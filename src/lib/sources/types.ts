import type { MediaSource, MediaType, Unit } from "@/db/schema";

/** One normalized hit from any external source, ready to become a media_items row. */
export interface SearchResult {
  source: Exclude<MediaSource, "manual">;
  sourceId: string;
  mediaType: MediaType;
  title: string;
  titleNative: string | null;
  coverUrl: string | null;
  /** Wide key art, when the source has one (AniList banners, TMDB backdrops). */
  bannerUrl: string | null;
  year: number | null;
  description: string | null;
  externalUrl: string | null;
  totalAmount: number | null;
  totalUnit: Unit | null;
  metadata?: Record<string, unknown>;
}

export interface SearchResponse {
  results: SearchResult[];
  /** Non-fatal problem, e.g. a missing API key. */
  warning?: string;
}

export const FETCH_TIMEOUT_MS = 8000;

/** Strip HTML tags / BBCode and collapse whitespace; truncate for storage. */
export function cleanDescription(raw: string | null | undefined, max = 600): string | null {
  if (!raw) return null;
  const text = raw
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\[\/?(?:url|spoiler|b|i|u|s|quote|code|raw)[^\]]*\]/gi, "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return null;
  return text.length > max ? text.slice(0, max - 1).trimEnd() + "…" : text;
}

export function yearFrom(dateish: string | number | null | undefined): number | null {
  if (dateish == null) return null;
  if (typeof dateish === "number") return Number.isFinite(dateish) ? dateish : null;
  const m = /^(\d{4})/.exec(dateish);
  return m ? Number(m[1]) : null;
}

/** Sources that can turn a pasted link into a SearchResult (src/lib/sources/index.ts). */
// JPDB is link-only (its terms forbid automated access), so it has no importer.
export type ImportSource = Exclude<MediaSource, "manual" | "anilist" | "vndb" | "tmdb" | "google_books" | "jpdb">;

export interface ParsedImportUrl {
  sourceId: string;
  canonicalUrl: string;
}

/** Paste-a-link importer. Every site-specific module in this folder exports one. */
export interface UrlImporter {
  source: ImportSource;
  /** Exact hostnames this importer accepts (see ./hosts.ts). Also the fetch allowlist. */
  hosts: readonly string[];
  /** Extra hosts the importer may fetch from besides `hosts` (APIs, feeds). Never user-chosen. */
  fetchHosts?: readonly string[];
  /** immersionlog media types this importer can produce. */
  mediaTypes: readonly MediaType[];
  /** Pure: canonical id for a supported page URL, or null. No I/O. */
  parse(url: URL): ParsedImportUrl | null;
  /** Fetch and normalize. `hintType` is the type picked in the dialog, if any. */
  fetch(parsed: ParsedImportUrl, options: ImportOptions): Promise<ImportResult>;
}

export interface ImportOptions {
  hintType?: MediaType;
  /** BookWalker only: jump from a volume/series page to this volume number. */
  volume?: number;
}

export interface ImportResult {
  result: SearchResult;
  /** Non-fatal notes shown to the user ("No cover on DMM pages", "Using the series description"). */
  warnings: string[];
}

export type ImportErrorCode =
  | "unsupported"
  | "invalid_url"
  | "blocked_host"
  | "upstream_status"
  | "upstream_type"
  | "too_large"
  | "timeout"
  | "not_found"
  | "no_title"
  | "not_configured"
  | "adult_disabled"
  | "parse";

const IMPORT_ERROR_MESSAGES: Record<ImportErrorCode, string> = {
  unsupported: "That site isn't supported yet.",
  invalid_url: "That doesn't look like a link to a title page.",
  blocked_host: "That link points somewhere we don't fetch from.",
  upstream_status: "The site didn't return the page.",
  upstream_type: "The site returned something that isn't a title page.",
  too_large: "The page was too large to read.",
  timeout: "The site took too long to respond.",
  not_found: "Couldn't find that title on the site.",
  no_title: "Couldn't find a title on that page.",
  not_configured: "This import source isn't configured on this server.",
  adult_disabled: "Adult storefront links aren't supported.",
  parse: "Couldn't read that page. The site may have changed.",
};

/**
 * A failure with a message that is safe to show the user. `detail` stays server-side
 * (logs only): it can carry upstream status codes, hostnames, parser notes.
 */
export class ImportError extends Error {
  constructor(
    readonly code: ImportErrorCode,
    readonly detail?: string | number,
    userMessage?: string,
    /** Whatever was scraped before the failure, for pre-filling the manual form. */
    readonly partial?: Partial<SearchResult>,
  ) {
    super(userMessage ?? IMPORT_ERROR_MESSAGES[code]);
    this.name = "ImportError";
  }
}

/**
 * Conventional keys new sources write into SearchResult.metadata. Still stored as a
 * plain jsonb record; older keys (episodeMinutes, lengthMinutes, originalLanguage,
 * format, romaji, authors, language) keep working untouched.
 */
export interface JitenStats {
  deckId: number;
  parentDeckId: number | null;
  characterCount?: number;
  wordCount?: number;
  uniqueKanji?: number;
  /** 0–5 scale. Jiten's own estimate, never mixed into community difficulty votes. */
  difficulty?: number;
  /** Fields above that came from the parent (series) deck rather than this one. */
  fromSeries?: string[];
  fetchedAt: string;
}

export interface ImportMetadata {
  /** English display label → value, rendered as a "Details" list on the media page. */
  details?: Record<string, string>;
  /** The same work on other sites. */
  links?: Partial<Record<MediaSource, string>>;
  jiten?: JitenStats;
  /** Adult storefront / R18 flag. Such items never store a cover. */
  adult?: boolean;
  importedAt?: string;
  [key: string]: unknown;
}
