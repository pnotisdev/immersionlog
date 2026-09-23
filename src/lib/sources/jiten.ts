/*
 * Jiten.moe client: deck search (with Kechimochi's progressive fallback), import from a
 * deck link, and the stats used to enrich items that came from another source.
 *
 * Search fallback, media type table and child→parent value picking ported from
 * Kechimochi (src/jiten_api.ts, src/importers/jiten.ts), MIT License,
 * Copyright (c) 2026 Federico "Morg" Pareschi.
 */
import "server-only";
import type { MediaSource, MediaType } from "@/db/schema";
import { cacheGet, cacheSet } from "@/lib/cache-store";
import { MEDIA_TYPE_META } from "@/lib/media";
import { IMPORT_HOSTS } from "./hosts";
import { safeFetchJson } from "./http";
import {
  cleanDescription,
  type ImportResult,
  ImportError,
  type JitenStats,
  type SearchResponse,
  type SearchResult,
  type UrlImporter,
  yearFrom,
} from "./types";

const API = "https://api.jiten.moe";
const API_HOSTS = ["api.jiten.moe"] as const;
const CDN_HOST = "cdn.jiten.moe";

/**
 * The API as observed 2026-09-23 (fields this module doesn't read are omitted):
 *   GET /api/media-deck/get-media-decks?titleFilter=&mediaType=&offset=
 *     → { data: Deck[], totalItems, pageSize (always 50: `limit` is ignored), currentOffset }
 *     Search only returns top-level decks (parentDeckId null).
 *   GET /api/media-deck/{id}/detail[?offset=]
 *     → { data: { parentDeck: Deck | null, mainDeck: Deck, subDecks: Deck[] (25/page) }, totalItems, … }
 * Child decks (episodes, volumes) are sparse: no english/romaji title, coverName
 * "nocover.jpg", description "", releaseDate "0001-01-01T00:00:00" — but they do carry
 * their own numeric stats. difficultyRaw is 0–5; -1 means "not computed".
 */
export interface JitenDeck {
  deckId: number;
  parentDeckId: number | null;
  originalTitle: string;
  romajiTitle: string | null;
  englishTitle: string | null;
  mediaType: number;
  coverName: string | null;
  childrenDeckCount: number;
  description?: string | null;
  releaseDate?: string | null;
  characterCount?: number | null;
  wordCount?: number | null;
  uniqueKanjiCount?: number | null;
  difficultyRaw?: number | null;
  links?: { linkType: number; url: string }[];
}

interface SearchPayload {
  data: JitenDeck[];
  totalItems?: number;
}

interface DetailPayload {
  data: { parentDeck: JitenDeck | null; mainDeck: JitenDeck; subDecks: JitenDeck[] };
  totalItems?: number;
}

// --- Media types --------------------------------------------------------------------

/** Jiten mediaType → immersionlog type. The preview lets the user switch (Novel → book, Audio → podcast). */
export const JITEN_TO_TYPE: Record<number, MediaType> = {
  1: "anime",
  2: "series",
  3: "movie",
  4: "light_novel",
  5: "book",
  6: "game",
  7: "visual_novel",
  8: "light_novel",
  9: "manga",
  10: "drama_cd",
};

export const JITEN_TYPE_LABELS: Record<number, string> = {
  1: "Anime",
  2: "Drama",
  3: "Movie",
  4: "Novel",
  5: "Non-fiction",
  6: "Video game",
  7: "Visual novel",
  8: "Web novel",
  9: "Manga",
  10: "Audio",
};

/** immersionlog type → Jiten search filter. Unmapped types search every Jiten type. */
const TYPE_TO_JITEN: Partial<Record<MediaType, number>> = {
  anime: 1,
  series: 2,
  movie: 3,
  light_novel: 4,
  book: 5,
  game: 6,
  visual_novel: 7,
  manga: 9,
  drama_cd: 10,
  podcast: 10,
};

// --- URLs ---------------------------------------------------------------------------

export function jitenDeckUrl(deckId: number): string {
  return `https://jiten.moe/decks/media/${deckId}/detail`;
}

/** Only covers actually on Jiten's CDN; child decks' "nocover.jpg" and anything else → null. */
function coverOf(deck: JitenDeck | null | undefined): string | null {
  if (!deck?.coverName) return null;
  try {
    const u = new URL(deck.coverName);
    return u.protocol === "https:" && u.hostname === CDN_HOST ? u.toString() : null;
  } catch {
    return null;
  }
}

// Jiten link types seen in `links`: 2 VNDB, 4 AniList (5 MAL has no immersionlog source).
const LINK_SOURCES: Record<number, { source: MediaSource; host: string }> = {
  2: { source: "vndb", host: "vndb.org" },
  4: { source: "anilist", host: "anilist.co" },
};

function crossLinks(deck: JitenDeck | null | undefined): Partial<Record<MediaSource, string>> {
  const out: Partial<Record<MediaSource, string>> = {};
  for (const l of deck?.links ?? []) {
    const known = LINK_SOURCES[l.linkType];
    if (!known) continue;
    try {
      const u = new URL(l.url);
      if (u.protocol === "https:" && (u.hostname === known.host || u.hostname.endsWith(`.${known.host}`))) out[known.source] = u.toString();
    } catch {
      /* ignore malformed link */
    }
  }
  return out;
}

// --- Search -------------------------------------------------------------------------

const SEARCH_TTL_MS = 60 * 60 * 1000;
/** More hits than this means the query was too vague to be useful (Kechimochi's rule). */
const TOO_VAGUE = 25;

const PUNCTUATION = /[!！?？.。,:：;；~～()（）[\]［］{}｛｝]/g;
const DIGITS = /[0-9０-９]/g;

async function performSearch(query: string, jitenType: number | undefined): Promise<JitenDeck[]> {
  const url = new URL(`${API}/api/media-deck/get-media-decks`);
  url.searchParams.set("titleFilter", query);
  if (jitenType) url.searchParams.set("mediaType", String(jitenType));
  const json = await safeFetchJson<SearchPayload>(url, { allowedHosts: API_HOSTS });
  const decks = json.data ?? [];
  const total = json.totalItems ?? decks.length;
  return total > TOO_VAGUE ? [] : decks;
}

/** One query: with the type filter first, then without it. */
async function searchWithFallback(query: string, jitenType: number | undefined, run: typeof performSearch): Promise<JitenDeck[]> {
  const typed = await run(query, jitenType);
  if (typed.length > 0 || !jitenType) return typed;
  return run(query, undefined);
}

/**
 * Kechimochi's progressive fallback: exact → without punctuation → without digits →
 * drop the last word (up to 3 times). Titles from other sources rarely match Jiten's
 * exactly ("STEINS;GATE" vs "Steins;Gate 0", subtitles, volume numbers). `run` is
 * injectable for tests.
 */
export async function searchJitenDecks(title: string, type: MediaType | null, run = performSearch): Promise<JitenDeck[]> {
  const q = title.trim();
  if (!q) return [];
  const jitenType = type ? TYPE_TO_JITEN[type] : undefined;

  let results = await searchWithFallback(q, jitenType, run);
  if (results.length) return results;

  const noPunct = q.replace(PUNCTUATION, " ").replace(/\s+/g, " ").trim();
  if (noPunct && noPunct !== q) {
    results = await searchWithFallback(noPunct, jitenType, run);
    if (results.length) return results;
  }

  const noDigits = (noPunct || q).replace(DIGITS, "").replace(/\s+/g, " ").trim();
  if (noDigits && noDigits !== q && noDigits !== noPunct) {
    results = await searchWithFallback(noDigits, jitenType, run);
    if (results.length) return results;
  }

  let current = q;
  for (let i = 0; i < 3; i++) {
    const cut = Math.max(current.lastIndexOf(" "), current.lastIndexOf("　"));
    if (cut <= 0) break;
    current = current.slice(0, cut).trim();
    if (!current) break;
    results = await searchWithFallback(current, jitenType, run);
    if (results.length) return results;
  }
  return [];
}

/** Keep only what this module reads, so cache rows stay small. */
function slim(d: JitenDeck): JitenDeck {
  return {
    deckId: d.deckId,
    parentDeckId: d.parentDeckId ?? null,
    originalTitle: d.originalTitle,
    romajiTitle: d.romajiTitle ?? null,
    englishTitle: d.englishTitle ?? null,
    mediaType: d.mediaType,
    coverName: d.coverName ?? null,
    childrenDeckCount: d.childrenDeckCount ?? 0,
    description: d.description ?? null,
    releaseDate: d.releaseDate ?? null,
    characterCount: d.characterCount ?? null,
    wordCount: d.wordCount ?? null,
    uniqueKanjiCount: d.uniqueKanjiCount ?? null,
    difficultyRaw: d.difficultyRaw ?? null,
    links: (d.links ?? []).map((l) => ({ linkType: l.linkType, url: l.url })),
  };
}

/** Cached (1 h, shared across processes) wrapper around searchJitenDecks. */
export async function searchJitenCached(title: string, type: MediaType | null): Promise<JitenDeck[]> {
  const normalized = title.trim().toLowerCase().replace(/\s+/g, " ");
  const key = `jiten:search:v1:${type ?? "any"}:${normalized}`;
  const hit = await cacheGet<JitenDeck[]>(key, SEARCH_TTL_MS).catch(() => undefined);
  if (hit) return hit;
  const decks = (await searchJitenDecks(normalized, type)).map(slim);
  cacheSet(key, decks).catch((err) => console.error("[jiten] failed to cache search:", err));
  return decks;
}

// --- Detail + stats -----------------------------------------------------------------

export async function fetchJitenDetail(deckId: number, offset = 0): Promise<DetailPayload> {
  const url = new URL(`${API}/api/media-deck/${deckId}/detail`);
  if (offset > 0) url.searchParams.set("offset", String(offset));
  const json = await safeFetchJson<DetailPayload>(url, { allowedHosts: API_HOSTS });
  if (!json.data?.mainDeck) throw new ImportError("not_found", `jiten deck ${deckId}`);
  return json;
}

const hasNumber = (v: number | null | undefined): v is number => typeof v === "number" && Number.isFinite(v) && v >= 0;
const hasText = (v: string | null | undefined): v is string => typeof v === "string" && v.trim().length > 0;
const hasDate = (v: string | null | undefined): v is string => hasText(v) && !v.startsWith("0001-");

/** Prefer the child's value, fall back to the series' (Kechimochi's pickValue). */
export function pickValue<T>(child: T | null | undefined, series: T | null | undefined, usable: (v: T | null | undefined) => v is T) {
  if (usable(child)) return { value: child, fromSeries: false };
  if (usable(series)) return { value: series, fromSeries: true };
  return { value: undefined, fromSeries: false };
}

const STAT_FIELDS = [
  ["characterCount", "characterCount"],
  ["wordCount", "wordCount"],
  ["uniqueKanji", "uniqueKanjiCount"],
  ["difficulty", "difficultyRaw"],
] as const;

export function jitenStats(main: JitenDeck, parent: JitenDeck | null): JitenStats {
  const stats: JitenStats = { deckId: main.deckId, parentDeckId: main.parentDeckId ?? null, fetchedAt: new Date().toISOString() };
  const fromSeries: string[] = [];
  for (const [key, field] of STAT_FIELDS) {
    const picked = pickValue(main[field], parent?.[field], hasNumber);
    if (picked.value === undefined) continue;
    stats[key] = key === "difficulty" ? Math.round(picked.value * 100) / 100 : picked.value;
    if (picked.fromSeries) fromSeries.push(key);
  }
  if (fromSeries.length) stats.fromSeries = fromSeries;
  return stats;
}

const STAT_LABELS: Record<string, string> = {
  characterCount: "Character count",
  wordCount: "Word count",
  uniqueKanji: "Unique kanji",
  difficulty: "Jiten difficulty",
};

export function jitenDetails(stats: JitenStats): Record<string, string> {
  const details: Record<string, string> = {};
  if (stats.characterCount != null) details["Character count"] = stats.characterCount.toLocaleString("en-US");
  if (stats.wordCount != null) details["Word count"] = stats.wordCount.toLocaleString("en-US");
  if (stats.uniqueKanji != null) details["Unique kanji"] = stats.uniqueKanji.toLocaleString("en-US");
  if (stats.difficulty != null) details["Jiten difficulty"] = `${stats.difficulty.toFixed(2)} / 5`;
  return details;
}

export function seriesWarnings(stats: JitenStats): string[] {
  return (stats.fromSeries ?? []).map((k) => `${STAT_LABELS[k]} is for the whole series, not this entry.`);
}

function displayTitle(d: JitenDeck): string {
  return d.englishTitle || d.romajiTitle || d.originalTitle;
}

/** A deck (plus its series, for child decks) as an immersionlog row. */
export function deckToResult(main: JitenDeck, parent: JitenDeck | null, hintType?: MediaType): ImportResult {
  const warnings: string[] = [];
  const mediaType = hintType ?? JITEN_TO_TYPE[main.mediaType] ?? "other";
  const stats = jitenStats(main, parent);
  warnings.push(...seriesWarnings(stats));

  // Child decks are titled "Episode 1" / "Volume 3"; prefix the series name.
  const title = parent ? `${displayTitle(parent)} – ${displayTitle(main)}` : displayTitle(main);
  const native = parent ? `${parent.originalTitle} ${main.originalTitle}` : main.originalTitle;

  const description = pickValue(main.description, parent?.description, hasText);
  if (description.fromSeries) warnings.push("Using the series description.");
  const date = pickValue(main.releaseDate, parent?.releaseDate, hasDate);
  const cover = coverOf(main) ?? coverOf(parent);

  // Only characters: Jiten doesn't know page or episode counts, and a character total
  // in a pages-tracked item would be meaningless.
  const useChars = MEDIA_TYPE_META[mediaType].defaultUnit === "characters" && stats.characterCount != null;

  const result: SearchResult = {
    source: "jiten",
    sourceId: String(main.deckId),
    mediaType,
    title,
    titleNative: native && native !== title ? native : null,
    coverUrl: cover,
    bannerUrl: null,
    year: yearFrom(date.value),
    description: cleanDescription(description.value),
    externalUrl: jitenDeckUrl(main.deckId),
    totalAmount: useChars ? stats.characterCount! : null,
    totalUnit: useChars ? "characters" : null,
    metadata: {
      jiten: stats,
      details: jitenDetails(stats),
      links: { ...crossLinks(parent), ...crossLinks(main) },
    },
  };
  return { result, warnings };
}

/** Search box for types with no primary search API (game, drama CD). */
export async function searchJiten(type: MediaType, q: string): Promise<SearchResponse> {
  const decks = await searchJitenCached(q, type);
  // The user asked for this type; an untyped fallback hit is still added as one.
  return { results: decks.map((d) => deckToResult(d, null, type).result) };
}

// --- Enrichment candidates (the "Link Jiten.moe deck" picker) ------------------------

export interface JitenCandidate {
  deckId: number;
  title: string;
  titleNative: string | null;
  typeLabel: string;
  coverUrl: string | null;
  childrenDeckCount: number;
  characterCount: number | null;
  difficulty: number | null;
}

function toCandidate(d: JitenDeck, parent: JitenDeck | null = null): JitenCandidate {
  const title = displayTitle(d);
  return {
    deckId: d.deckId,
    title,
    titleNative: d.originalTitle !== title ? d.originalTitle : null,
    typeLabel: JITEN_TYPE_LABELS[d.mediaType] ?? "Media",
    coverUrl: coverOf(d) ?? coverOf(parent),
    childrenDeckCount: d.childrenDeckCount ?? 0,
    characterCount: hasNumber(d.characterCount) ? d.characterCount : null,
    difficulty: hasNumber(d.difficultyRaw) ? Math.round(d.difficultyRaw * 100) / 100 : null,
  };
}

export async function jitenCandidates(title: string, type: MediaType): Promise<JitenCandidate[]> {
  return (await searchJitenCached(title, type)).map((d) => toCandidate(d));
}

export async function jitenSubDecks(deckId: number, offset = 0): Promise<{ items: JitenCandidate[]; total: number }> {
  const json = await fetchJitenDetail(deckId, offset);
  const parent = json.data.mainDeck;
  return { items: json.data.subDecks.map((d) => toCandidate(d, parent)), total: json.totalItems ?? json.data.subDecks.length };
}

// --- URL importer -------------------------------------------------------------------

const DECK_PATH = /^\/decks\/(?:media\/)?(\d+)(?:\/|$)/;

export const jitenImporter: UrlImporter = {
  source: "jiten",
  hosts: IMPORT_HOSTS.jiten,
  fetchHosts: API_HOSTS,
  mediaTypes: ["anime", "manga", "light_novel", "visual_novel", "movie", "series", "book", "game", "drama_cd", "podcast"],
  parse(url) {
    // Current deck pages are /decks/media/{id}/detail; /decks/{id} is the older form
    // (Kechimochi's) and still worth accepting from old bookmarks.
    const m = DECK_PATH.exec(url.pathname);
    if (!m) return null;
    return { sourceId: m[1], canonicalUrl: jitenDeckUrl(Number(m[1])) };
  },
  async fetch(parsed, { hintType }) {
    const { data } = await fetchJitenDetail(Number(parsed.sourceId));
    return deckToResult(data.mainDeck, data.parentDeck, hintType);
  },
};
