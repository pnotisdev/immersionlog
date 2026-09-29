import { describe, expect, it } from "vitest";
import { normalizeAnswer, toHiragana } from "./romaji";

describe("toHiragana", () => {
  it.each([
    ["tabemashita", "たべました"],
    ["shinda", "しんだ"],
    ["konnichiha", "こんにちは"],
    ["kan'i", "かんい"],
    ["kanyo", "かにょ"],
    ["onnna", "おんな"],
    ["katta", "かった"],
    ["matcha", "まっちゃ"],
    ["benkyoushinakatta", "べんきょうしなかった"],
    ["jyouzu", "じょうず"],
    ["tsukutte", "つくって"],
    ["si ti tu hu zi", "し ち つ ふ じ"],
    ["ko-hi-", "こーひー"],
  ])("%s → %s", (input, out) => {
    expect(toHiragana(input)).toBe(out);
  });

  it("leaves a trailing n alone while typing", () => {
    expect(toHiragana("yon", { ime: true })).toBe("よn");
    expect(toHiragana("yon")).toBe("よん");
    expect(toHiragana("よn", { ime: true })).toBe("よn");
  });

  it("passes kana and kanji through, so re-converting a field is harmless", () => {
    expect(toHiragana("食べmasu")).toBe("食べます");
    expect(toHiragana(toHiragana("tabete"))).toBe("たべて");
  });
});

describe("normalizeAnswer", () => {
  it("compares as hiragana without spaces", () => {
    expect(normalizeAnswer(" タベマス ")).toBe("たべます");
    expect(normalizeAnswer("Yonde")).toBe("よんで");
  });
});
