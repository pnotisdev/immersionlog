import type { MediaType } from "@/db/schema";
import { cacheGet, cacheSet } from "@/lib/cache-store";
import { effectiveSearchSource, MEDIA_TYPE_META } from "@/lib/media";
import { searchAniList } from "./anilist";
import { backloggdImporter } from "./backloggd";
import { bookmeterImporter } from "./bookmeter";
import { bookwalkerImporter } from "./bookwalker";
import { cmoaImporter } from "./cmoa";
import { dmmImporter } from "./dmm";
import { searchGoogleBooks } from "./google-books";
import { imdbImporter } from "./imdb";
import { jitenImporter, searchJiten } from "./jiten";
import { shonenJumpPlusImporter } from "./shonenjumpplus";
import { searchTmdb } from "./tmdb";
import {
  type ImportMetadata,
  type ImportOptions,
  type ImportResult,
  ImportError,
  type ParsedImportUrl,
  type SearchResponse,
  type UrlImporter,
} from "./types";
import { searchVndb } from "./vndb";

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

// --- Import from URL ----------------------------------------------------------------

/**
 * Every paste-a-link importer. JPDB is intentionally absent: its terms of use forbid
 * automated access, so JPDB links are stored as link-outs only (./jpdb.ts).
 */
export const URL_IMPORTERS: readonly UrlImporter[] = [
  jitenImporter,
  imdbImporter,
  bookmeterImporter,
  bookwalkerImporter,
  cmoaImporter,
  shonenJumpPlusImporter,
  backloggdImporter,
  dmmImporter,
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
    // Covers show up in public feeds and profiles; adult items never carry one.
    r.coverUrl = null;
    r.bannerUrl = null;
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
