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

const KANA = /^[ぁ-ゖァ-ヺー]+$/;

/**
 * How unlikely a reading is for a run of kanji: a kanji is read with at least one kana
 * and rarely more than four. 昨日の夜 / きのうのよる can be split as 昨日=き, 夜=うのよる
 * (the の in きのう matches the particle), and this is what rules that out.
 */
export function readingPenalty(base: string, ruby: string): number {
  const n = [...base].length;
  const len = [...ruby].length;
  if (len < n) return (n - len) * 10;
  if (len > 4 * n) return len - 4 * n;
  return 0;
}

// A long sentence with many kanji runs has few possible splits in practice, but stop
// looking after this many so a pathological one can't hang a page.
const MAX_SPLITS = 200;

/**
 * Every way to split the reading so each non-literal run gets at least one character,
 * shortest captures first. Literal runs must appear verbatim at their position.
 */
function splits(parts: { text: string; literal: boolean }[], reading: string): string[][] {
  const out: string[][] = [];
  const captures: string[] = [];
  const walk = (i: number, pos: number) => {
    if (out.length >= MAX_SPLITS) return;
    if (i === parts.length) {
      if (pos === reading.length) out.push([...captures]);
      return;
    }
    const p = parts[i];
    if (p.literal) {
      if (reading.startsWith(p.text, pos)) walk(i + 1, pos + p.text.length);
      return;
    }
    for (let end = pos + 1; end <= reading.length; end++) {
      const ruby = reading.slice(pos, end);
      if (!KANA.test(ruby)) break;
      captures.push(ruby);
      walk(i + 1, end);
      captures.pop();
    }
  };
  walk(0, 0);
  return out;
}

/**
 * Align a sentence with its reading: each kanji run gets the stretch of kana between the
 * literal runs around it. When there's more than one way to do that, the most plausible
 * (lowest readingPenalty) wins. Returns null when the two strings can't be lined up (a
 * typo in either, or a reading that isn't kana).
 */
export function alignReading(japanese: string, reading: string): SentenceToken[] | null {
  const parts = runs(japanese);
  const bases = parts.filter((p) => !p.literal).map((p) => p.text);
  let best: string[] | null = null;
  let bestScore = Infinity;
  for (const s of splits(parts, reading)) {
    const score = s.reduce((sum, ruby, i) => sum + readingPenalty(bases[i], ruby), 0);
    if (score < bestScore) {
      best = s;
      bestScore = score;
    }
  }
  if (!best) return null;

  const tokens: SentenceToken[] = [];
  let group = 0;
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
      tokens.push({ text: p.text, ruby: best[group++], blank: inBlank });
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
