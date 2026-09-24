/*
 * YouTube video links (watch, youtu.be, shorts, live, embed). Official endpoints only:
 * oEmbed (no key) gives title, channel and thumbnail; with YOUTUBE_API_KEY set, the Data
 * API's videos.list adds length, publish date and description. The watch page itself is
 * never fetched (consent walls, and YouTube's terms prefer the API).
 */
import "server-only";
import type { MediaType } from "@/db/schema";
import { IMPORT_HOSTS } from "./hosts";
import { safeFetchJson } from "./http";
import { cleanDescription, type ImportResult, ImportError, type ParsedImportUrl, type UrlImporter, yearFrom } from "./types";

const OEMBED_HOSTS = ["www.youtube.com"] as const;
const API_HOSTS = ["www.googleapis.com"] as const;
const COVER_HOSTS = ["i.ytimg.com"];

const VIDEO_ID = /^[A-Za-z0-9_-]{11}$/;

/** Pure: video id for any of YouTube's video URL shapes, or null (channels, playlists, search). */
export function parseYouTubeUrl(url: URL): ParsedImportUrl | null {
  const host = url.hostname.toLowerCase();
  let id: string | null = null;
  if (host === "youtu.be") {
    id = url.pathname.split("/")[1] ?? null;
  } else if (url.pathname === "/watch") {
    id = url.searchParams.get("v");
  } else {
    const m = /^\/(?:shorts|live|embed|v)\/([^/?#]+)/.exec(url.pathname);
    id = m?.[1] ?? null;
  }
  if (!id || !VIDEO_ID.test(id)) return null;
  return { sourceId: id, canonicalUrl: `https://www.youtube.com/watch?v=${id}` };
}

/** PT1H2M3S / P1DT2H → seconds. Live streams report P0D → null. */
export function parseYouTubeDuration(iso: string | null | undefined): number | null {
  const m = /^P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(iso ?? "");
  if (!m) return null;
  const s = Number(m[1] ?? 0) * 86400 + Number(m[2] ?? 0) * 3600 + Number(m[3] ?? 0) * 60 + Number(m[4] ?? 0);
  return s > 0 ? s : null;
}

function formatLength(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return h ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}` : `${m}:${String(s).padStart(2, "0")}`;
}

function allowedCover(url: string | null | undefined): string | null {
  if (!url) return null;
  try {
    return COVER_HOSTS.includes(new URL(url).hostname) ? url : null;
  } catch {
    return null;
  }
}

/** A YouTube link logged as a podcast stays a podcast; everything else is a video. */
function typeFor(hintType?: MediaType): MediaType {
  return hintType === "podcast" ? "podcast" : "youtube";
}

interface OEmbed {
  title?: string;
  author_name?: string;
  author_url?: string;
  thumbnail_url?: string;
}

export function fromOEmbed(o: OEmbed, parsed: ParsedImportUrl, hintType?: MediaType): ImportResult {
  const title = o.title?.trim();
  if (!title) throw new ImportError("no_title", parsed.sourceId);
  const details: Record<string, string> = {};
  if (o.author_name) details.Channel = o.author_name;
  return {
    result: {
      source: "youtube",
      sourceId: parsed.sourceId,
      mediaType: typeFor(hintType),
      title,
      titleNative: null,
      coverUrl: allowedCover(o.thumbnail_url),
      bannerUrl: null,
      year: null,
      description: null,
      externalUrl: parsed.canonicalUrl,
      totalAmount: null,
      totalUnit: null,
      metadata: { details, ...(o.author_name ? { channel: o.author_name } : {}) },
    },
    warnings: [],
  };
}

type Thumb = { url?: string; width?: number };
interface ApiVideo {
  snippet?: {
    title?: string;
    description?: string;
    channelTitle?: string;
    channelId?: string;
    publishedAt?: string;
    thumbnails?: Partial<Record<"default" | "medium" | "high" | "standard" | "maxres", Thumb>>;
  };
  contentDetails?: { duration?: string };
}

export function fromApi(v: ApiVideo, parsed: ParsedImportUrl, hintType?: MediaType): ImportResult {
  const sn = v.snippet ?? {};
  const title = sn.title?.trim();
  if (!title) throw new ImportError("no_title", parsed.sourceId);
  const t = sn.thumbnails ?? {};
  const lengthSeconds = parseYouTubeDuration(v.contentDetails?.duration);

  const details: Record<string, string> = {};
  if (sn.channelTitle) details.Channel = sn.channelTitle;
  if (sn.publishedAt) details.Published = sn.publishedAt.slice(0, 10);
  if (lengthSeconds) details.Length = formatLength(lengthSeconds);

  return {
    result: {
      source: "youtube",
      sourceId: parsed.sourceId,
      mediaType: typeFor(hintType),
      title,
      titleNative: null,
      coverUrl: allowedCover(t.high?.url ?? t.medium?.url ?? t.default?.url),
      // Only the full-size frame is sharp enough for a media page header.
      bannerUrl: allowedCover(t.maxres?.url),
      year: yearFrom(sn.publishedAt),
      description: cleanDescription(sn.description),
      externalUrl: parsed.canonicalUrl,
      totalAmount: null,
      totalUnit: null,
      metadata: {
        details,
        ...(sn.channelTitle ? { channel: sn.channelTitle } : {}),
        ...(sn.channelId ? { channelId: sn.channelId } : {}),
        ...(lengthSeconds ? { lengthSeconds } : {}),
      },
    },
    warnings: [],
  };
}

async function fetchViaApi(parsed: ParsedImportUrl, key: string, hintType?: MediaType): Promise<ImportResult> {
  const url = new URL("https://www.googleapis.com/youtube/v3/videos");
  url.searchParams.set("part", "snippet,contentDetails");
  url.searchParams.set("id", parsed.sourceId);
  url.searchParams.set("key", key);
  const json = await safeFetchJson<{ items?: ApiVideo[] }>(url, { allowedHosts: API_HOSTS });
  const video = json.items?.[0];
  if (!video) throw new ImportError("not_found", parsed.sourceId);
  return fromApi(video, parsed, hintType);
}

async function fetchViaOEmbed(parsed: ParsedImportUrl, hintType?: MediaType): Promise<ImportResult> {
  const url = new URL("https://www.youtube.com/oembed");
  url.searchParams.set("url", parsed.canonicalUrl);
  url.searchParams.set("format", "json");
  try {
    return fromOEmbed(await safeFetchJson<OEmbed>(url, { allowedHosts: OEMBED_HOSTS }), parsed, hintType);
  } catch (err) {
    // oEmbed answers 401 for private videos and ones with embedding turned off.
    if (err instanceof ImportError && err.code === "upstream_status" && (err.detail === 401 || err.detail === 403)) {
      throw new ImportError("not_found", parsed.sourceId, "That video is private, or its owner doesn't allow it to be shared.");
    }
    // …and 400/404 for ids that don't exist.
    if (err instanceof ImportError && err.code === "upstream_status" && err.detail === 400) {
      throw new ImportError("not_found", parsed.sourceId);
    }
    throw err;
  }
}

export const youtubeImporter: UrlImporter = {
  source: "youtube",
  hosts: IMPORT_HOSTS.youtube,
  fetchHosts: [...OEMBED_HOSTS, ...API_HOSTS],
  mediaTypes: ["youtube", "podcast"],
  parse: parseYouTubeUrl,
  async fetch(parsed, options) {
    const key = process.env.YOUTUBE_API_KEY;
    if (key) {
      try {
        return await fetchViaApi(parsed, key, options.hintType);
      } catch (err) {
        // A bad/exhausted key shouldn't break imports: oEmbed still has the basics.
        if (err instanceof ImportError && err.code === "not_found") throw err;
        console.warn("[import] youtube API failed, using oEmbed:", err instanceof ImportError ? `${err.code} (${err.detail})` : err);
      }
    }
    return fetchViaOEmbed(parsed, options.hintType);
  },
};
