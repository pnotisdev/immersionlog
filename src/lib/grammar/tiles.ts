import { alignReading, unmark, type SentenceToken } from "./sentence";
import type { GrammarSentence } from "./types";

/**
 * Sentence building: a sentence cut into phrase-sized tiles to put back in order.
 *
 * Where to cut is worked out on the server, once, with the platform's Japanese word
 * segmenter (`chunkBoundaries`), and sent to the browser as character offsets. The
 * browser only cuts at those offsets (`tilesFromBoundaries`), so the server render and
 * the client can never disagree about the tiles, whatever ICU data each one has.
 */

export interface Tile {
  /** Position in the correct order. */
  id: number;
  text: string;
  /** For furigana. Kanji are never split across tiles, so a ruby token is always whole. */
  tokens: SentenceToken[];
}

/** Fewest and most tiles a sentence can have and still make a good puzzle. */
export const MIN_TILES = 3;
export const MAX_TILES = 9;

// A tile ends after one of these (a case or linking particle), or after a comma.
const BREAK_AFTER = new Set(["は", "が", "を", "に", "で", "と", "へ", "から", "まで", "より", "も", "、", "，"]);
// ...unless the next piece makes it a compound particle: にも, では, とは, でも, には.
const GLUE_NEXT = new Set(["は", "も"]);

/** Offsets in the unmarked sentence where a new tile starts, or null when it doesn't suit the exercise. */
export function chunkBoundaries(sentence: Pick<GrammarSentence, "japanese" | "reading">): number[] | null {
  const text = unmark(sentence.japanese);
  const tokens = alignReading(sentence.japanese, sentence.reading);
  if (!tokens) return null;

  const pieces = [...new Intl.Segmenter("ja", { granularity: "word" }).segment(text)];
  const cuts: number[] = [];
  pieces.forEach((p, i) => {
    const end = p.index + p.segment.length;
    if (end >= text.length || !BREAK_AFTER.has(p.segment)) return;
    const next = pieces[i + 1]?.segment ?? "";
    // Punctuation stays with the tile before it: cut after the comma, not before it.
    if (p.segment !== "、" && p.segment !== "，" && (GLUE_NEXT.has(next) || /^[、，。！？!?]/.test(next))) return;
    cuts.push(end);
  });

  // Never cut through a kanji run that carries a reading.
  const inside: [number, number][] = [];
  let at = 0;
  for (const t of tokens) {
    if (t.ruby) inside.push([at, at + t.text.length]);
    at += t.text.length;
  }
  const valid = cuts.filter((c) => !inside.some(([from, to]) => c > from && c < to));
  const tiles = valid.length + 1;
  return tiles >= MIN_TILES && tiles <= MAX_TILES ? valid : null;
}

/** The tiles for a sentence, in the correct order, cut at the given offsets. */
export function tilesFromBoundaries(sentence: Pick<GrammarSentence, "japanese" | "reading">, boundaries: number[]): Tile[] {
  const text = unmark(sentence.japanese);
  const tokens = alignReading(sentence.japanese, sentence.reading) ?? [{ text, blank: false }];
  const edges = [0, ...boundaries, text.length];
  const spans: { start: number; token: SentenceToken }[] = [];
  let pos = 0;
  for (const t of tokens) {
    spans.push({ start: pos, token: t });
    pos += t.text.length;
  }
  return edges.slice(0, -1).map((from, id) => {
    const to = edges[id + 1];
    const parts: SentenceToken[] = [];
    for (const { start, token } of spans) {
      const end = start + token.text.length;
      if (end <= from || start >= to) continue;
      if (token.ruby) parts.push(token);
      else parts.push({ text: token.text.slice(Math.max(from, start) - start, Math.min(to, end) - start), blank: token.blank });
    }
    return { id, text: text.slice(from, to), tokens: parts };
  });
}

function seedFrom(s: string): number {
  let h = 2166136261;
  for (const ch of s) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return h >>> 0;
}

/** A shuffle that's the same on the server and in the browser, and never leaves the tiles already in order. */
export function scrambled(tiles: Tile[], seed: string): Tile[] {
  let state = seedFrom(seed) || 1;
  const rand = () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 2 ** 32;
  };
  const out = [...tiles];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  if (out.every((t, i) => t.id === i)) out.push(out.shift()!);
  return out;
}
