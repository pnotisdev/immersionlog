import { describe, expect, it } from "vitest";
import { checkMeaning, checkReading, gradeAll } from "./check";
import { getKanji, KANJI, KANJI_GROUPS, kunAnswers, onAnswers, promptsFor } from "./index";

describe("kanji data", () => {
  it("has exactly the 2,136 jōyō kanji, once each", () => {
    expect(KANJI).toHaveLength(2136);
    expect(new Set(KANJI.map((k) => k.c)).size).toBe(2136);
  });

  it("puts every kanji in one group, in grade order", () => {
    expect(KANJI_GROUPS.reduce((n, g) => n + g.kanji.length, 0)).toBe(2136);
    expect(KANJI[0].g).toBe(1);
    expect(KANJI.at(-1)!.g).toBe(8);
  });

  it("gives every kanji a meaning and at least one reading", () => {
    for (const k of KANJI) {
      expect(k.m.length, k.c).toBeGreaterThan(0);
      expect(k.on.length + k.kun.length, k.c).toBeGreaterThan(0);
    }
  });

  it("only asks the readings a kanji has", () => {
    expect(promptsFor(getKanji("日")!)).toEqual(["meaning", "on", "kun"]);
    const onlyOn = KANJI.find((k) => k.kun.length === 0)!;
    expect(promptsFor(onlyOn)).toEqual(["meaning", "on"]);
  });
});

describe("readings", () => {
  const day = getKanji("日")!;
  const eat = getKanji("食")!;

  it("turns on readings into hiragana and drops kun affix markers", () => {
    expect(onAnswers(day)).toEqual(["にち", "じつ"]);
    expect(kunAnswers(day)).toContain("ひ");
    expect(kunAnswers(day)).toContain("び");
  });

  it("accepts a kun reading with or without its okurigana", () => {
    expect(kunAnswers(eat)).toEqual(expect.arrayContaining(["た", "たべる"]));
  });

  it("accepts romaji, kana and katakana for on'yomi", () => {
    expect(checkReading(day, "on", "nichi").result).toBe("correct");
    expect(checkReading(day, "on", "にち").result).toBe("correct");
    expect(checkReading(day, "on", "ニチ").result).toBe("correct");
    expect(checkReading(day, "on", "zzz").result).toBe("wrong");
  });

  it("calls the wrong reading type a near miss, not a fail", () => {
    const r = checkReading(day, "on", "ひ");
    expect(r.result).toBe("nearMiss");
    expect(checkReading(day, "kun", "にち").result).toBe("nearMiss");
  });
});

describe("meanings", () => {
  const day = getKanji("日")!;
  it("ignores case, articles and 'to'", () => {
    expect(checkMeaning(day, "Sun").result).toBe("correct");
    expect(checkMeaning(day, "the sun").result).toBe("correct");
    expect(checkMeaning(getKanji("食")!, "to eat").result).toBe("correct");
  });
  it("forgives one typo in a longer word only", () => {
    expect(checkMeaning({ m: ["chief"] }, "cheif").result).toBe("wrong");
    expect(checkMeaning({ m: ["mountain"] }, "mountian").result).toBe("wrong");
    expect(checkMeaning({ m: ["mountain"] }, "mountan").result).toBe("nearMiss");
    expect(checkMeaning(day, "moon").result).toBe("wrong");
  });
});

describe("gradeAll", () => {
  const day = getKanji("日")!;
  it("is right only when every prompt is", () => {
    expect(gradeAll(day, { meaning: "day", on: "nichi", kun: "hi" }, promptsFor(day)).correct).toBe(true);
    const bad = gradeAll(day, { meaning: "day", on: "nichi", kun: "x" }, promptsFor(day));
    expect(bad.correct).toBe(false);
    expect(bad.each).toEqual({ meaning: true, on: true, kun: false });
  });
});
