import { describe, expect, it } from "vitest";
import { buildDeck, isCorrect, KANA_GROUPS } from "./kana-drill";

const all = KANA_GROUPS.map((g) => g.id);

describe("kana quiz deck", () => {
  it("covers 46 basic, 25 voiced and 33 combination kana", () => {
    const count = (set: string) => KANA_GROUPS.filter((g) => g.set === set).flatMap((g) => g.cards).length;
    expect(count("basic")).toBe(46);
    expect(count("dakuten")).toBe(25);
    expect(count("yoon")).toBe(33);
  });

  it("has a card per script and unique kana", () => {
    const deck = buildDeck(all, ["hiragana", "katakana"]);
    expect(deck).toHaveLength(104 * 2);
    expect(new Set(deck.map((c) => c.kana)).size).toBe(deck.length);
  });

  it("uses Hepburn for combinations and accepts other spellings", () => {
    const find = (kana: string) => buildDeck(all, ["hiragana", "katakana"]).find((c) => c.kana === kana)!;
    expect(find("しゃ").answers[0]).toBe("sha");
    expect(find("チョ").answers[0]).toBe("cho");
    expect(find("じゅ").answers[0]).toBe("ju");
    expect(find("きょ").answers[0]).toBe("kyo");
    expect(isCorrect(find("し"), "SI")).toBe(true);
    expect(isCorrect(find("を"), "wo")).toBe(true);
    expect(isCorrect(find("ん"), "nn")).toBe(true);
    expect(isCorrect(find("ぢ"), "ji")).toBe(true);
    expect(isCorrect(find("ね"), "re")).toBe(false);
  });
});
