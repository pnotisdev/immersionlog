/*
 * IMDb links. Resolved through TMDB's official /find endpoint whenever TMDB_API_KEY is
 * set, so the row is a plain TMDB item (same source/sourceId as TMDB search → one row
 * per film). The title-page JSON-LD fallback is for deployments without a TMDB key.
 *
 * JSON-LD field handling and parseISO8601Duration ported from Kechimochi
 * (src/importers/imdb.ts), MIT License, Copyright (c) 2026 Federico "Morg" Pareschi.
 * Deliberately not ported: its Googlebot User-Agent and the unofficial
 * caching.graphql.imdb.com endpoint.
 */
import "server-only";
import type { MediaType } from "@/db/schema";
import { IMPORT_HOSTS } from "./hosts";
import { jsonLd, loadHtml } from "./html";
import { safeFetchJson, safeFetchText } from "./http";
import { type TmdbMovie, type TmdbTv, tmdbToResult } from "./tmdb";
import { cleanDescription, type ImportResult, ImportError, type SearchResult, type UrlImporter, yearFrom } from "./types";

const TMDB_HOSTS = ["api.themoviedb.org"] as const;

interface TmdbFind {
  movie_results: TmdbMovie[];
  tv_results: TmdbTv[];
}

/** PT2H5M → 125. Unparseable → null. */
export function parseISO8601Duration(duration: string | null | undefined): number | null {
  const m = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(duration ?? "");
  if (!m || (!m[1] && !m[2] && !m[3])) return null;
  return Number(m[1] ?? 0) * 60 + Number(m[2] ?? 0) + Math.round(Number(m[3] ?? 0) / 60);
}

function formatRuntime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return [h ? `${h}h` : null, m ? `${m}m` : null].filter(Boolean).join(" ") || "0m";
}

/** Pick the TMDB hit: the one matching the dialog's type when both a movie and a show exist. */
export function pickFindResult(find: TmdbFind, hintType?: MediaType): SearchResult | null {
  const movie = find.movie_results?.[0];
  const tv = find.tv_results?.[0];
  const preferTv = hintType === "series" || hintType === "anime" || hintType === "drama_cd";
  const order: ["movie" | "series", TmdbMovie | TmdbTv | undefined][] = preferTv
    ? [["series", tv], ["movie", movie]]
    : [["movie", movie], ["series", tv]];
  for (const [kind, hit] of order) {
    if (!hit) continue;
    // Anime keeps its own type; everything else is TMDB's own movie/series split.
    return tmdbToResult(hit, kind, hintType === "anime" ? "anime" : kind);
  }
  return null;
}

function names(v: unknown): string[] {
  const list = Array.isArray(v) ? v : v ? [v] : [];
  return list
    .map((x) => (typeof x === "string" ? x : typeof x === "object" && x && "name" in x ? String((x as { name: unknown }).name) : null))
    .filter((x): x is string => !!x && x !== "undefined");
}

/** Title-page fallback. Pure: `html` in, row out. */
export function parseImdbHtml(html: string, ttId: string, canonicalUrl: string, hintType?: MediaType): ImportResult {
  const $ = loadHtml(html);
  // Kechimochi only looked for Movie, which missed every series.
  const node = jsonLd($, ["Movie", "TVSeries", "TVMiniSeries", "TVEpisode", "TVMovie"]);
  if (!node || typeof node.name !== "string" || !node.name.trim()) {
    throw new ImportError(
      "parse",
      "no JSON-LD",
      "Couldn't read that IMDb page (IMDb often blocks servers). Setting TMDB_API_KEY makes IMDb links work reliably.",
    );
  }
  const types = ([] as unknown[]).concat(node["@type"]);
  const isSeries = types.some((t) => typeof t === "string" && t.startsWith("TV") && t !== "TVMovie");
  const mediaType: MediaType = hintType === "anime" ? "anime" : isSeries ? "series" : "movie";

  const details: Record<string, string> = {};
  const genres = names(node.genre);
  if (genres.length) details.Genres = genres.join(", ");
  const directors = names(node.director);
  if (directors.length) details.Director = directors.join(", ");
  const runtime = parseISO8601Duration(typeof node.duration === "string" ? node.duration : null);
  if (runtime) details.Runtime = formatRuntime(runtime);
  const rating = (node.aggregateRating as { ratingValue?: unknown } | undefined)?.ratingValue;
  if (typeof rating === "number" || typeof rating === "string") details.Rating = `${rating} / 10 (IMDb)`;

  const warnings = ["IMDb posters aren't imported. Setting TMDB_API_KEY brings in posters and a richer record."];
  const result: SearchResult = {
    source: "imdb",
    sourceId: ttId,
    mediaType,
    title: node.name.trim(),
    titleNative: null,
    // IMDb images live on Amazon's CDN, which isn't on the image allowlist.
    coverUrl: null,
    bannerUrl: null,
    year: yearFrom(typeof node.datePublished === "string" ? node.datePublished : null),
    description: cleanDescription(typeof node.description === "string" ? node.description : null),
    externalUrl: canonicalUrl,
    totalAmount: null,
    totalUnit: null,
    metadata: {
      details,
      links: { imdb: canonicalUrl },
      ...(mediaType === "movie" && runtime ? { runtimeMinutes: runtime } : {}),
    },
  };
  return { result, warnings };
}

export const imdbImporter: UrlImporter = {
  source: "imdb",
  hosts: IMPORT_HOSTS.imdb,
  fetchHosts: TMDB_HOSTS,
  mediaTypes: ["movie", "series", "anime"],
  parse(url) {
    // Tolerates locale prefixes (/de/title/…), /reference and other suffixes, query strings.
    const m = /\/title\/(tt\d{5,10})(?:\/|$)/.exec(url.pathname);
    if (!m) return null;
    return { sourceId: m[1], canonicalUrl: `https://www.imdb.com/title/${m[1]}/` };
  },
  async fetch(parsed, { hintType }) {
    const key = process.env.TMDB_API_KEY;
    if (key) {
      const url = new URL(`https://api.themoviedb.org/3/find/${parsed.sourceId}`);
      url.searchParams.set("external_source", "imdb_id");
      url.searchParams.set("api_key", key);
      const find = await safeFetchJson<TmdbFind>(url, { allowedHosts: TMDB_HOSTS });
      const result = pickFindResult(find, hintType);
      if (!result) throw new ImportError("not_found", parsed.sourceId, "TMDB has no movie or series for that IMDb title.");
      result.metadata = { ...result.metadata, links: { imdb: parsed.canonicalUrl } };
      return { result, warnings: [] };
    }
    const { text } = await safeFetchText(parsed.canonicalUrl, { allowedHosts: IMPORT_HOSTS.imdb });
    return parseImdbHtml(text, parsed.sourceId, parsed.canonicalUrl, hintType);
  },
};
