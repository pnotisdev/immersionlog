/**
 * Sentence markup. Each sentence is written twice, in normal Japanese and in kana, with
 * the tested part in braces in both: 窓を{開けてください}。 / まどを{あけてください}。
 * Furigana isn't stored separately: kana, punctuation and braces appear in both strings,
 * so they anchor an alignment, and whatever sits between them in the kana version is the
 * reading of the kanji between them in the other. A sentence whose two versions don't
 * line up fails the deck test, which catches most typos in either.
 */

export interface SentenceToken {
  text: string;
  /** Reading, when `text` is kanji (or digits, or anything else that isn't kana). */
  ruby?: string;
  /** Inside the braces. */
  blank: boolean;
}

export interface Marked {
  before: string;
  blank: string;
  after: string;
}

const MARK = /^([^{}]*)\{([^{}]+)\}([^{}]*)$/;

/** Split a marked sentence at its one pair of braces. Null when there isn't exactly one. */
export function parseMarked(s: string): Marked | null {
  const m = MARK.exec(s);
  return m ? { before: m[1], blank: m[2], after: m[3] } : null;
}

/** The text in braces. */
export function blankOf(s: string): string {
  return parseMarked(s)?.blank ?? "";
}

/** The sentence with the braces removed. */
export function unmark(s: string): string {
  return s.replace(/[{}]/g, "");
}

/** Kana, the long-vowel mark, punctuation and the braces: everything that reads as itself. */
const LITERAL = /[ぁ-ゖァ-ヺー゛゜・\s。、，．！？!?「」『』（）()〜~…‥：:／/{}"'“”‘’]/;

function isLiteral(ch: string): boolean {
  return LITERAL.test(ch);
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Runs of literal and non-literal characters, in order. */
function runs(s: string): { text: string; literal: boolean }[] {
  const out: { text: string; literal: boolean }[] = [];
  for (const ch of s) {
    const literal = isLiteral(ch);
    const last = out[out.length - 1];
    if (last && last.literal === literal) last.text += ch;
    else out.push({ text: ch, literal });
  }
  return out;
}

/**
 * Align a sentence with its reading. Each kanji run becomes a lazy capture between the
 * literal runs around it; the regex's backtracking finds the split. Returns null when the
 * two strings can't be lined up (a typo in either, or a reading that isn't kana).
 */
export function alignReading(japanese: string, reading: string): SentenceToken[] | null {
  const parts = runs(japanese);
  const pattern = parts.map((p) => (p.literal ? escapeRegExp(p.text) : "(.+?)")).join("");
  const m = new RegExp(`^${pattern}$`, "u").exec(reading);
  if (!m) return null;

  const tokens: SentenceToken[] = [];
  let group = 1;
  let inBlank = false;
  for (const p of parts) {
    if (p.literal) {
      // Split literal runs at the braces so each token knows whether it's in the blank.
      for (const piece of p.text.split(/([{}])/)) {
        if (piece === "{") inBlank = true;
        else if (piece === "}") inBlank = false;
        else if (piece) tokens.push({ text: piece, blank: inBlank });
      }
    } else {
      const ruby = m[group++];
      if (!/^[ぁ-ゖァ-ヺー]+$/.test(ruby)) return null;
      tokens.push({ text: p.text, ruby, blank: inBlank });
    }
  }
  return tokens;
}

/**
 * Tokens for display. A sentence that doesn't align (it never should: the deck test
 * checks every one) still renders, just without furigana.
 */
export function sentenceTokens(japanese: string, reading: string): SentenceToken[] {
  const aligned = alignReading(japanese, reading);
  if (aligned) return aligned;
  const m = parseMarked(japanese);
  if (!m) return [{ text: unmark(japanese), blank: false }];
  return [
    { text: m.before, blank: false },
    { text: m.blank, blank: true },
    { text: m.after, blank: false },
  ].filter((t) => t.text);
}
