import type { MediaType } from "@/db/schema";
import { markAdultCover } from "@/lib/adult-cover";
import { cacheGet, cacheSet } from "@/lib/cache-store";
import { effectiveSearchSource, MEDIA_TYPE_META } from "@/lib/media";
import { anilistImporter, searchAniList } from "./anilist";
import { backloggdImporter } from "./backloggd";
import { bookmeterImporter } from "./bookmeter";
import { bookwalkerImporter } from "./bookwalker";
import { cmoaImporter } from "./cmoa";
import { dmmImporter } from "./dmm";
import { getGoogleBook, searchGoogleBooks } from "./google-books";
import { imdbImporter } from "./imdb";
import { deckToResult, fetchJitenDetail, jitenImporter, searchJiten } from "./jiten";
import { shonenJumpPlusImporter } from "./shonenjumpplus";
import { getTmdb, searchTmdb } from "./tmdb";
import {
  type ImportMetadata,
  type ImportOptions,
  type ImportResult,
  ImportError,
  type ParsedImportUrl,
  type SearchResponse,
  type SearchResult,
  type UrlImporter,
} from "./types";
import { getVndb, searchVndb } from "./vndb";
import { youtubeImporter } from "./youtube";

export type { SearchResult, SearchResponse, ImportResult } from "./types";
export { ImportError } from "./types";

/** Route a search to the right external source for the media type. */
export async function searchExternal(mediaType: MediaType, q: string): Promise<SearchResponse> {
  const query = q.trim();
  if (query.length < 2) return { results: [] };

  switch (effectiveSearchSource(mediaType)) {
    case "anilist":
      return searchAniList(mediaType as "anime" | "manga" | "light_novel", query);
    case "vndb":
      return searchVndb(query);
    case "tmdb":
      return searchTmdb(mediaType as "movie" | "series", query);
    case "google_books":
      return searchGoogleBooks(mediaType as "book" | "graded_reader", query);
    case "jiten":
      return searchJiten(mediaType, query);
    default:
      return { results: [], warning: `${MEDIA_TYPE_META[mediaType].label} has no search source; add it manually.` };
  }
}

// --- Lookup by id ------------------------------------------------------------------

export type LookupSource = "anilist" | "vndb" | "tmdb" | "google_books" | "jiten";

const LOOKUP_TTL_MS = 24 * 3600 * 1000;

/**
 * Re-read a search hit from its source by id, so what's stored in a shared row is what
 * the source says, never what a client sent. The picked media type is kept when that
 * type searches this source (book vs graded reader, game vs drama CD); AniList's own
 * anime/manga/LN split always wins. Cached for a day; misses (null) are not cached.
 */
export async function lookupExternal(source: LookupSource, sourceId: string, mediaType: MediaType): Promise<SearchResult | null> {
  const key = `lookup:v1:${source}:${sourceId}:${mediaType}`;
  const cached = await cacheGet<SearchResult>(key, LOOKUP_TTL_MS).catch(() => undefined);
  if (cached) return cached;

  const typeFits = effectiveSearchSource(mediaType) === source;
  let result: SearchResult | null = null;
  switch (source) {
    case "anilist": {
      if (!/^\d{1,9}$/.test(sourceId)) return null;
      try {
        result = (await anilistImporter.fetch({ sourceId, canonicalUrl: `https://anilist.co/anime/${sourceId}` }, {})).result;
      } catch (err) {
        if (err instanceof ImportError && err.code === "not_found") return null;
        throw err;
      }
      break;
    }
    case "vndb":
      result = await getVndb(sourceId);
      break;
    case "tmdb":
      result = await getTmdb(sourceId);
      if (result && typeFits) result = { ...result, mediaType };
      break;
    case "google_books":
      result = await getGoogleBook(sourceId, mediaType === "graded_reader" ? "graded_reader" : "book");
      break;
    case "jiten": {
      const deckId = Number(sourceId);
      if (!Number.isInteger(deckId) || deckId <= 0) return null;
      try {
        const { data } = await fetchJitenDetail(deckId);
        result = deckToResult(data.mainDeck, data.parentDeck, typeFits ? mediaType : undefined).result;
      } catch (err) {
        if (err instanceof ImportError && err.code === "not_found") return null;
        throw err;
      }
      break;
    }
  }
  if (result) {
    result = finalize({ result, warnings: [] }).result;
    cacheSet(key, result).catch((err) => console.error("[lookup] failed to cache", key, err));
  }
  return result;
}

// --- Import from URL ----------------------------------------------------------------

/**
 * Every paste-a-link importer. JPDB is intentionally absent: its terms of use forbid
 * automated access, so JPDB links are stored as link-outs only (./jpdb.ts).
 */
export const URL_IMPORTERS: readonly UrlImporter[] = [
  anilistImporter,
  jitenImporter,
  imdbImporter,
  bookmeterImporter,
  bookwalkerImporter,
  cmoaImporter,
  shonenJumpPlusImporter,
  backloggdImporter,
  dmmImporter,
  youtubeImporter,
];

export interface FoundImporter {
  importer: UrlImporter;
  parsed: ParsedImportUrl;
  url: URL;
}

/**
 * Exact-hostname routing: never substring matching, which would accept
 * `evil.com/?bookwalker.jp/`. http:// is upgraded only for hosts an importer lists.
 */
export function findImporter(rawUrl: string, importers: readonly UrlImporter[] = URL_IMPORTERS): FoundImporter | null {
  let url: URL;
  try {
    url = new URL(rawUrl.trim());
  } catch {
    return null;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return null;
  if (url.username || url.password || (url.port && url.port !== "443" && url.port !== "80")) return null;
  const host = url.hostname.toLowerCase();
  const importer = importers.find((i) => i.hosts.includes(host));
  if (!importer) return null;
  if (url.protocol === "http:") {
    url = new URL(url.toString().replace(/^http:/, "https:"));
    url.port = "";
  }
  const parsed = importer.parse(url);
  return parsed ? { importer, parsed, url } : null;
}

export function importersForType(type: MediaType): UrlImporter[] {
  return URL_IMPORTERS.filter((i) => i.mediaTypes.includes(type));
}

const IMPORT_TTL_MS = 7 * 24 * 3600 * 1000;

function cacheKey(found: FoundImporter, opts: ImportOptions): string {
  // The type hint and volume change what's fetched/produced, so they're part of the key.
  return `import:v1:${found.importer.source}:${found.parsed.sourceId}:${opts.hintType ?? "-"}:${opts.volume ?? "-"}`;
}

/** Last line of defence before a scraped row is shown or stored. */
function finalize(out: ImportResult): ImportResult {
  const r = out.result;
  const meta: ImportMetadata = { ...r.metadata, importedAt: new Date().toISOString() };
  if (meta.adult) {
    // Covers show up in public feeds and profiles: marked so they render blurred unless
    // the viewer opted in, and are left out of server-rendered share images.
    r.coverUrl = markAdultCover(r.coverUrl);
    r.bannerUrl = markAdultCover(r.bannerUrl);
  }
  r.title = r.title.slice(0, 500);
  if (r.titleNative) r.titleNative = r.titleNative.slice(0, 500);
  if (r.titleNative === r.title) r.titleNative = null;
  if (r.description && r.description.length > 2000) r.description = r.description.slice(0, 1999) + "…";
  r.metadata = meta;
  return out;
}

/**
 * Resolve a pasted link to one normalized row. Successful results are cached for a
 * week in the shared cache (so previewImport → addFromUrl refetches nothing);
 * failures never are. Always throws ImportError, whose message is user-safe.
 */
export async function importFromUrl(rawUrl: string, opts: ImportOptions = {}): Promise<ImportResult> {
  const found = findImporter(rawUrl);
  if (!found) throw new ImportError("unsupported", rawUrl.slice(0, 200));
  const key = cacheKey(found, opts);

  const cached = await cacheGet<ImportResult>(key, IMPORT_TTL_MS).catch(() => undefined);
  if (cached) return cached;

  try {
    const out = finalize(await found.importer.fetch(found.parsed, opts));
    cacheSet(key, out).catch((err) => console.error("[import] failed to cache", key, err));
    return out;
  } catch (err) {
    const e = err instanceof ImportError ? err : new ImportError("parse", err instanceof Error ? err.message : String(err));
    console.warn("[import]", found.importer.source, found.parsed.sourceId, `${e.code}${e.detail != null ? ` (${e.detail})` : ""}`);
    throw e;
  }
}
