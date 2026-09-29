import { WORDS } from "@/lib/conjugation";
import { normalizeInput } from "./check";
import { alignReading } from "./sentence";
import type { GrammarDeck } from "./types";

/**
 * Near misses are written the way the deck writes Japanese (食べてください), but most
 * learners type romaji, which arrives as kana (たべてください). So each near miss also
 * carries its kana spellings, read off the furigana the decks already have: every kanji
 * run in every sentence, plus the conjugation drill's word list, gives a reading.
 */

const KANJI_RUN = /([^ぁ-ゖァ-ヺー]+)/u;
/** A near miss rarely has more than a couple of kanji runs; this keeps the product small. */
const MAX_SPELLINGS = 16;

export type ReadingLexicon = Map<string, Set<string>>;

function add(lexicon: ReadingLexicon, text: string, ruby: string) {
  const readings = lexicon.get(text) ?? new Set<string>();
  readings.add(normalizeInput(ruby));
  lexicon.set(text, readings);
}

/** Kanji run → the readings the content gives it. */
export function readingLexicon(decks: GrammarDeck[]): ReadingLexicon {
  const lexicon: ReadingLexicon = new Map();
  const pairs = [
    ...decks.flatMap((d) => d.points.flatMap((p) => p.sentences.map((s) => [s.japanese, s.reading] as const))),
    ...WORDS.map((w) => [w.kanji, w.kana] as const),
  ];
  for (const [japanese, reading] of pairs) {
    for (const t of alignReading(japanese, reading) ?? []) if (t.ruby) add(lexicon, t.text, t.ruby);
  }
  return lexicon;
}

/** Readings for one kanji run: as a whole if the content has it, else as known pieces. */
function runReadings(run: string, lexicon: ReadingLexicon): string[] {
  const whole = lexicon.get(run);
  if (whole) return [...whole];
  const out: string[] = [];
  for (let i = run.length - 1; i > 0; i--) {
    const head = lexicon.get(run.slice(0, i));
    if (!head) continue;
    for (const rest of runReadings(run.slice(i), lexicon)) for (const h of head) out.push(h + rest);
    if (out.length >= MAX_SPELLINGS) break;
  }
  return out.slice(0, MAX_SPELLINGS);
}

/** Every kana spelling of `text` the lexicon can give; empty when a kanji run is unknown. */
export function kanaSpellings(text: string, lexicon: ReadingLexicon): string[] {
  let spellings = [""];
  for (const [i, part] of normalizeInput(text).split(KANJI_RUN).entries()) {
    if (!part) continue;
    // split() with a capture group puts the kanji runs at odd indexes.
    const options = i % 2 === 1 ? runReadings(part, lexicon) : [part];
    if (options.length === 0) return [];
    spellings = spellings.flatMap((s) => options.map((o) => s + o)).slice(0, MAX_SPELLINGS);
  }
  return spellings;
}

/** The decks with every near miss that contains kanji given its kana spellings. */
export function withKanaSpellings(decks: GrammarDeck[]): GrammarDeck[] {
  const lexicon = readingLexicon(decks);
  return decks.map((d) => ({
    ...d,
    points: d.points.map((p) => ({
      ...p,
      sentences: p.sentences.map((s) => ({
        ...s,
        nearMisses: s.nearMisses.map((m) => {
          if (!KANJI_RUN.test(normalizeInput(m.answer))) return m;
          const derived = kanaSpellings(m.answer, lexicon).filter((k) => k !== normalizeInput(m.answer));
          const spellings = [...new Set([...(m.spellings ?? []).map(normalizeInput), ...derived])];
          return spellings.length ? { ...m, spellings } : m;
        }),
      })),
    })),
  }));
}
