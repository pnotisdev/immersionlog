/**
 * The parts of the kanji model that need no data, so client components can use them
 * without pulling the 2,136-entry list into the browser bundle.
 */

/** One jōyō kanji. Readings are as KANJIDIC lists them: on in katakana, kun in hiragana with "." before okurigana. */
export interface Kanji {
  c: string;
  /** School grade 1-6, or 8 for the jōyō kanji taught in secondary school. */
  g: number;
  m: string[];
  on: string[];
  kun: string[];
  /** Stroke count. */
  s: number;
  /** Old JLPT level (5 to 1), where KANJIDIC has one. */
  n?: number;
}

// ---------------------------------------------------------------------------
// Readings

/** Katakana to hiragana, for on readings. */
function kata(s: string): string {
  return s.replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));
}

/** A reading as shown: on in katakana as is, kun with the okurigana dot as a thin separator ("た.べる" → "た・べる"). */
export function displayReading(r: string): string {
  return r.replace(/\./g, "・");
}

/** Every hiragana spelling that counts for an on reading. */
export function onAnswers(k: Pick<Kanji, "on">): string[] {
  return [...new Set(k.on.map((r) => kata(r.replace(/-/g, ""))))];
}

/**
 * Every hiragana spelling that counts for a kun reading: the stem alone (た) and with its
 * okurigana (たべる), since people type either. Leading and trailing "-" (affix markers) are dropped.
 */
export function kunAnswers(k: Pick<Kanji, "kun">): string[] {
  const out = new Set<string>();
  for (const r of k.kun) {
    const clean = r.replace(/-/g, "");
    const [stem] = clean.split(".");
    if (stem) out.add(stem);
    out.add(clean.replace(/\./g, ""));
  }
  return [...out];
}

/** What a review asks about a kanji: its meaning, plus each kind of reading it actually has. */
export type PromptKind = "meaning" | "on" | "kun";

export function promptsFor(k: Pick<Kanji, "on" | "kun">): PromptKind[] {
  return ["meaning", ...(k.on.length ? (["on"] as const) : []), ...(k.kun.length ? (["kun"] as const) : [])];
}
