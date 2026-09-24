import type { MediaType } from "@/db/schema";
import { cleanDescription, FETCH_TIMEOUT_MS, type SearchResponse, type SearchResult, yearFrom } from "./types";

const ENDPOINT = "https://www.googleapis.com/books/v1/volumes";

interface Volume {
  id: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    authors?: string[];
    publishedDate?: string;
    description?: string;
    pageCount?: number;
    imageLinks?: { thumbnail?: string; smallThumbnail?: string };
    language?: string;
    infoLink?: string;
  };
}

function toResult(v: Volume, mediaType: "book" | "graded_reader"): SearchResult {
  const info = v.volumeInfo;
  const thumb = info.imageLinks?.thumbnail ?? info.imageLinks?.smallThumbnail ?? null;
  const coverUrl = thumb ? thumb.replace(/^http:/, "https:").replace(/&edge=curl/, "") : null;
  const title = info.subtitle ? `${info.title}: ${info.subtitle}` : info.title;
  return {
    source: "google_books",
    sourceId: v.id,
    mediaType: mediaType as MediaType,
    title,
    titleNative: null,
    coverUrl,
    bannerUrl: null,
    year: yearFrom(info.publishedDate),
    description: cleanDescription(info.description),
    externalUrl: info.infoLink ?? null,
    totalAmount: info.pageCount && info.pageCount > 0 ? info.pageCount : null,
    totalUnit: info.pageCount && info.pageCount > 0 ? "pages" : null,
    metadata: { authors: info.authors ?? [], language: info.language },
  };
}

export async function searchGoogleBooks(mediaType: "book" | "graded_reader", q: string): Promise<SearchResponse> {
  const url = new URL(ENDPOINT);
  url.searchParams.set("q", q);
  url.searchParams.set("maxResults", "12");
  url.searchParams.set("printType", "books");
  const key = process.env.GOOGLE_BOOKS_API_KEY;
  if (key) url.searchParams.set("key", key);

  const res = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  if (!res.ok) throw new Error(`Google Books responded ${res.status}`);
  const json = (await res.json()) as { items?: Volume[] };

  const results: SearchResult[] = (json.items ?? []).map((v) => toResult(v, mediaType));
  return { results };
}

/** One volume by id, or null. */
export async function getGoogleBook(id: string, mediaType: "book" | "graded_reader"): Promise<SearchResult | null> {
  if (!/^[\w-]{4,40}$/.test(id)) return null;
  const url = new URL(`${ENDPOINT}/${id}`);
  const key = process.env.GOOGLE_BOOKS_API_KEY;
  if (key) url.searchParams.set("key", key);
  const res = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  if (res.status === 404 || res.status === 503) return null;
  if (!res.ok) throw new Error(`Google Books responded ${res.status}`);
  return toResult((await res.json()) as Volume, mediaType);
}
