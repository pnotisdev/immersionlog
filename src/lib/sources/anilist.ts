import type { MediaType } from "@/db/schema";
import { IMPORT_HOSTS } from "./hosts";
import {
  cleanDescription,
  FETCH_TIMEOUT_MS,
  ImportError,
  type ParsedImportUrl,
  type SearchResponse,
  type SearchResult,
  type UrlImporter,
} from "./types";

const ENDPOINT = "https://graphql.anilist.co";

const MEDIA_FIELDS = /* GraphQL */ `
  id
  title { romaji english native }
  coverImage { large }
  bannerImage
  episodes
  chapters
  volumes
  duration
  format
  startDate { year }
  siteUrl
  description(asHtml: false)
`;

const QUERY = /* GraphQL */ `
  query Search($search: String, $type: MediaType, $formatIn: [MediaFormat], $formatNotIn: [MediaFormat]) {
    Page(perPage: 12) {
      media(
        search: $search
        type: $type
        format_in: $formatIn
        format_not_in: $formatNotIn
        isAdult: false
        sort: SEARCH_MATCH
      ) {
        ${MEDIA_FIELDS}
      }
    }
  }
`;

const BROWSE_QUERY = /* GraphQL */ `
  query Browse($type: MediaType, $formatIn: [MediaFormat], $formatNotIn: [MediaFormat], $sort: [MediaSort], $perPage: Int) {
    Page(perPage: $perPage) {
      media(
        type: $type
        format_in: $formatIn
        format_not_in: $formatNotIn
        countryOfOrigin: "JP"
        isAdult: false
        sort: $sort
      ) {
        ${MEDIA_FIELDS}
      }
    }
  }
`;

const BY_ID_QUERY = /* GraphQL */ `
  query ById($id: Int) {
    Media(id: $id) {
      ${MEDIA_FIELDS}
      type
      isAdult
    }
  }
`;

interface AniListMedia {
  id: number;
  title: { romaji: string | null; english: string | null; native: string | null };
  coverImage: { large: string | null } | null;
  bannerImage: string | null;
  episodes: number | null;
  chapters: number | null;
  volumes: number | null;
  // Average per-episode runtime in minutes; anime only (AniList returns null for manga/LN).
  duration: number | null;
  format: string | null;
  startDate: { year: number | null } | null;
  siteUrl: string | null;
  description: string | null;
}

type AniListType = "anime" | "manga" | "light_novel";

const VARIABLES: Record<AniListType, Record<string, unknown>> = {
  anime: { type: "ANIME" },
  manga: { type: "MANGA", formatNotIn: ["NOVEL"] },
  light_novel: { type: "MANGA", formatIn: ["NOVEL"] },
};

async function query(body: unknown): Promise<AniListMedia[]> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`AniList responded ${res.status}`);
  const json = (await res.json()) as { data?: { Page?: { media?: AniListMedia[] } } };
  return json.data?.Page?.media ?? [];
}

function toResult(m: AniListMedia, mediaType: AniListType): SearchResult {
  const title = m.title.english ?? m.title.romaji ?? m.title.native ?? `AniList #${m.id}`;
  let totalAmount: number | null = null;
  let totalUnit: SearchResult["totalUnit"] = null;
  if (mediaType === "anime" && m.episodes) {
    totalAmount = m.episodes;
    totalUnit = "episodes";
  } else if (mediaType === "manga" && m.chapters) {
    totalAmount = m.chapters;
    totalUnit = "chapters";
  } else if (mediaType === "light_novel" && m.volumes) {
    totalAmount = m.volumes;
    totalUnit = "volumes";
  }
  return {
    source: "anilist",
    sourceId: String(m.id),
    mediaType: mediaType as MediaType,
    title,
    titleNative: m.title.native,
    coverUrl: m.coverImage?.large ?? null,
    bannerUrl: m.bannerImage,
    year: m.startDate?.year ?? null,
    description: cleanDescription(m.description),
    externalUrl: m.siteUrl,
    totalAmount,
    totalUnit,
    metadata: {
      format: m.format,
      romaji: m.title.romaji,
      // Lets session logging default duration to "episodes logged × runtime" instead
      // of a flat guess (see defaultDurationSeconds in session-form.tsx).
      ...(mediaType === "anime" && m.duration ? { episodeMinutes: m.duration } : {}),
    },
  };
}

export async function searchAniList(mediaType: AniListType, q: string): Promise<SearchResponse> {
  const media = await query({ query: QUERY, variables: { search: q, ...VARIABLES[mediaType] } });
  return { results: media.map((m) => toResult(m, mediaType)) };
}

export type AniListSort = "TRENDING_DESC" | "POPULARITY_DESC" | "SCORE_DESC";

/** Charts for the Discover page. Callers cache: "what's trending" is the same for everyone. */
export async function browseAniList(mediaType: AniListType, sort: AniListSort, perPage = 24): Promise<SearchResult[]> {
  const media = await query({ query: BROWSE_QUERY, variables: { sort: [sort], perPage, ...VARIABLES[mediaType] } });
  return media.map((m) => toResult(m, mediaType));
}

// --- Paste-a-link -------------------------------------------------------------------

/**
 * anilist.co/anime/7791/K-ON-Season-2/ and anilist.co/manga/30104/Yotsuba-to. Resolved
 * through the same GraphQL API as search, so the row lands on the same
 * (anilist, id) item a search pick would. Only the numeric id is sent upstream.
 */
function parseAniListUrl(url: URL): ParsedImportUrl | null {
  const m = /^\/(anime|manga)\/(\d{1,9})(?:\/|$)/.exec(url.pathname);
  if (!m) return null;
  return { sourceId: m[2], canonicalUrl: `https://anilist.co/${m[1]}/${m[2]}` };
}

async function fetchAniListById(id: number): Promise<(AniListMedia & { type: "ANIME" | "MANGA"; isAdult: boolean | null }) | null> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ query: BY_ID_QUERY, variables: { id } }),
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  // Unknown ids come back as a 404 with a GraphQL error body.
  if (res.status === 404) return null;
  if (!res.ok) throw new ImportError("upstream_status", res.status);
  const json = (await res.json()) as { data?: { Media?: (AniListMedia & { type: "ANIME" | "MANGA"; isAdult: boolean | null }) | null } };
  return json.data?.Media ?? null;
}

export const anilistImporter: UrlImporter = {
  source: "anilist",
  hosts: IMPORT_HOSTS.anilist,
  mediaTypes: ["anime", "manga", "light_novel"],
  parse: parseAniListUrl,
  async fetch(parsed) {
    let media;
    try {
      media = await fetchAniListById(Number(parsed.sourceId));
    } catch (err) {
      if (err instanceof ImportError) throw err;
      throw new ImportError(err instanceof Error && err.name === "TimeoutError" ? "timeout" : "upstream_status", String(err));
    }
    if (!media) throw new ImportError("not_found", parsed.sourceId);
    // The URL's /anime/ vs /manga/ segment is cosmetic on AniList; trust the API's type.
    const type: AniListType = media.type === "ANIME" ? "anime" : media.format === "NOVEL" ? "light_novel" : "manga";
    const result = toResult(media, type);
    if (media.isAdult) result.metadata = { ...result.metadata, adult: true };
    return { result, warnings: [] };
  },
};
