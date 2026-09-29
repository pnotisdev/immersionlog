/**
 * Romaji ↔ kana for the drills on /tools. `toHiragana` is a small IME: it turns what
 * someone types on a keyboard without a Japanese input method into hiragana, so the
 * conjugation drill can be answered as "tabemashita". Hepburn and Kunrei spellings
 * both work (shi/si, tsu/tu, ja/zya), a doubled consonant is small っ, and n is ん
 * before anything but a vowel or y ("nn" and "n'" force it).
 */

const VOWELS = "aiueo";

const BASE: Record<string, string> = {
  a: "あ", i: "い", u: "う", e: "え", o: "お",
  ka: "か", ki: "き", ku: "く", ke: "け", ko: "こ",
  sa: "さ", shi: "し", si: "し", su: "す", se: "せ", so: "そ",
  ta: "た", chi: "ち", ti: "ち", tsu: "つ", tu: "つ", te: "て", to: "と",
  na: "な", ni: "に", nu: "ぬ", ne: "ね", no: "の",
  ha: "は", hi: "ひ", fu: "ふ", hu: "ふ", he: "へ", ho: "ほ",
  ma: "ま", mi: "み", mu: "む", me: "め", mo: "も",
  ya: "や", yu: "ゆ", yo: "よ",
  ra: "ら", ri: "り", ru: "る", re: "れ", ro: "ろ",
  la: "ら", li: "り", lu: "る", le: "れ", lo: "ろ",
  wa: "わ", wi: "うぃ", we: "うぇ", wo: "を",
  ga: "が", gi: "ぎ", gu: "ぐ", ge: "げ", go: "ご",
  za: "ざ", ji: "じ", zi: "じ", zu: "ず", ze: "ぜ", zo: "ぞ",
  da: "だ", di: "ぢ", du: "づ", de: "で", do: "ど",
  ba: "ば", bi: "び", bu: "ぶ", be: "べ", bo: "ぼ",
  pa: "ぱ", pi: "ぴ", pu: "ぷ", pe: "ぺ", po: "ぽ",
  vu: "ゔ", va: "ゔぁ", vi: "ゔぃ", ve: "ゔぇ", vo: "ゔぉ",
  fa: "ふぁ", fi: "ふぃ", fe: "ふぇ", fo: "ふぉ",
  she: "しぇ", che: "ちぇ", je: "じぇ", tsa: "つぁ",
  xa: "ぁ", xi: "ぃ", xu: "ぅ", xe: "ぇ", xo: "ぉ",
  xya: "ゃ", xyu: "ゅ", xyo: "ょ", xtsu: "っ", xtu: "っ", ltu: "っ", ltsu: "っ",
  "-": "ー",
};

// Consonant + y + vowel for every i-column kana, plus the Hepburn digraphs.
const YOON_STEMS: Record<string, string> = {
  ky: "き", sy: "し", ty: "ち", cy: "ち", ny: "に", hy: "ひ", my: "み", ry: "り",
  gy: "ぎ", zy: "じ", jy: "じ", dy: "ぢ", by: "び", py: "ぴ",
};
const SMALL_Y: Record<string, string> = { a: "ゃ", u: "ゅ", o: "ょ" };
for (const [stem, kana] of Object.entries(YOON_STEMS)) {
  for (const [v, small] of Object.entries(SMALL_Y)) BASE[stem + v] = kana + small;
}
for (const [v, small] of Object.entries(SMALL_Y)) {
  BASE[`sh${v}`] = `し${small}`;
  BASE[`ch${v}`] = `ち${small}`;
  BASE[`j${v}`] = `じ${small}`;
}

const MAX_KEY = Math.max(...Object.keys(BASE).map((k) => k.length));

/**
 * Romaji to hiragana. With `ime`, a trailing lone n stays n (the next letter decides
 * between ん and な-row), which is what an input field wants while the person is still
 * typing. Anything that isn't romaji (kana, kanji, punctuation) passes through.
 */
export function toHiragana(input: string, { ime = false }: { ime?: boolean } = {}): string {
  const s = input.toLowerCase();
  let out = "";
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    const next = s[i + 1];

    if (c === "n") {
      if (next === undefined) {
        out += ime ? "n" : "ん";
        i += 1;
        continue;
      }
      if (next === "'") {
        out += "ん";
        i += 2;
        continue;
      }
      if (next === "n") {
        // "nn" is ん, unless the second n starts a syllable of its own: konnichi.
        const after = s[i + 2];
        if (after !== undefined && (VOWELS.includes(after) || after === "y")) {
          out += "ん";
          i += 1;
        } else {
          out += "ん";
          i += 2;
        }
        continue;
      }
      if (!VOWELS.includes(next) && next !== "y") {
        out += "ん";
        i += 1;
        continue;
      }
    }

    // A doubled consonant is a small っ: katta, zutto. cch (Hepburn matcha) too.
    if (next !== undefined && /[bcdfghjklmpqrstvwxyz]/.test(c) && (next === c || (c === "t" && next === "c"))) {
      out += "っ";
      i += 1;
      continue;
    }

    let matched = false;
    for (let len = Math.min(MAX_KEY, s.length - i); len > 0; len--) {
      const kana = BASE[s.slice(i, i + len)];
      if (kana) {
        out += kana;
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      out += input[i];
      i += 1;
    }
  }
  return out;
}

/** Katakana to hiragana (the two blocks sit 0x60 apart); ー and everything else unchanged. */
export function katakanaToHiragana(s: string): string {
  return s.replace(/[ァ-ヶ]/g, (ch) => String.fromCodePoint(ch.codePointAt(0)! - 0x60));
}

/** Hiragana to katakana. */
export function hiraganaToKatakana(s: string): string {
  return s.replace(/[ぁ-ゖ]/g, (ch) => String.fromCodePoint(ch.codePointAt(0)! + 0x60));
}

/** What an answer is compared as: hiragana, no spaces, a trailing n finished off as ん. */
export function normalizeAnswer(s: string): string {
  return katakanaToHiragana(toHiragana(s.replace(/[\s　。．.、,!！?？]/g, "")));
}
