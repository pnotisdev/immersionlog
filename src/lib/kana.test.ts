import { describe, expect, it } from "vitest";
import { DAKUTEN, GOJUON, YOON } from "./kana";

const cells = (rows: typeof GOJUON) => rows.flatMap((r) => r.cells).filter((c) => c !== null);

describe("kana charts", () => {
  it("has the 46 basic kana, each once, in both scripts", () => {
    const basic = cells(GOJUON);
    expect(basic).toHaveLength(46);
    expect(new Set(basic.map((c) => c.hiragana)).size).toBe(46);
    expect(new Set(basic.map((c) => c.katakana)).size).toBe(46);
    for (const c of basic) expect(c.romaji).toMatch(/^[a-z]+$/);
  });

  it("pairs every hiragana with the katakana for the same sound", () => {
    // Katakana sit exactly 0x60 above their hiragana in Unicode.
    for (const c of [...cells(GOJUON), ...cells(DAKUTEN), ...YOON]) {
      const shifted = [...c.hiragana].map((ch) => String.fromCodePoint(ch.codePointAt(0)! + 0x60)).join("");
      expect(shifted).toBe(c.katakana);
    }
  });

  it("has 25 voiced and p-sound kana", () => {
    expect(cells(DAKUTEN)).toHaveLength(25);
  });
});
