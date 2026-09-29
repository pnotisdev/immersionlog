import { describe, expect, it } from "vitest";
import { conjugate } from "@/lib/conjugation";
import { checkAnswer, normalizeInput } from "./check";
import { DECKS, allPoints, getPoint } from "./decks";
import { alignReading, blankOf, parseMarked, readingPenalty } from "./sentence";

/**
 * Every deck entry, checked the way a careful editor would: ids, markup, furigana,
 * answers and near misses. A new deck gets all of this for free.
 */

const points = allPoints();
const KANA_ONLY = /^[ぁ-ゖァ-ヺー\s。、，．！？!?「」『』（）()〜~…‥・：:／/{}"'“”‘’]+$/u;

describe("decks", () => {
  it("have unique, URL-safe ids that don't collide with the app's own routes", () => {
    const ids = DECKS.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) {
      expect(id).toMatch(/^[a-z0-9]+$/);
      expect(["learn", "review"]).not.toContain(id);
    }
  });

  it("give every point a unique, prefixed slug and a sequential order", () => {
    const ids = points.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const d of DECKS) {
      d.points.forEach((p, i) => {
        expect(p.id).toMatch(new RegExp(`^${d.id}-[a-z0-9]+(-[a-z0-9]+)*$`));
        expect(p.deck).toBe(d.id);
        expect(p.order).toBe(i + 1);
        expect(getPoint(p.id)).toBe(p);
      });
    }
  });
});

describe.each(points.map((p) => [p.id, p] as const))("%s", (_id, point) => {
  it("is complete", () => {
    expect(point.title.trim()).not.toBe("");
    expect(point.meaning.trim()).not.toBe("");
    expect(point.structure.trim()).not.toBe("");
    const words = point.explanation.split(/\s+/).filter(Boolean).length;
    expect(words, "explanation length in words").toBeGreaterThanOrEqual(80);
    expect(words, "explanation length in words").toBeLessThanOrEqual(200);
    expect(point.sentences.length).toBeGreaterThanOrEqual(5);
    expect(point.related).not.toContain(point.id);
  });

  it("lists its common near misses", () => {
    expect(point.sentences.flatMap((s) => s.nearMisses).length).toBeGreaterThan(0);
  });

  it("has unique sentence ids", () => {
    const ids = point.sentences.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    ids.forEach((id, i) => expect(id).toBe(`${point.id}-${i + 1}`));
  });

  it.each(point.sentences.map((s) => [s.id, s] as const))("%s parses, aligns and accepts its own answer", (_sid, s) => {
    expect(parseMarked(s.japanese), s.japanese).not.toBeNull();
    expect(parseMarked(s.reading), s.reading).not.toBeNull();
    expect(s.reading, "reading is kana only").toMatch(KANA_ONLY);
    const tokens = alignReading(s.japanese, s.reading);
    expect(tokens, `${s.japanese} / ${s.reading}`).not.toBeNull();
    for (const t of tokens ?? []) {
      if (t.ruby) expect(readingPenalty(t.text, t.ruby), `${t.text} read as ${t.ruby}`).toBe(0);
    }
    expect(s.english.trim()).toMatch(/[.?!"”]$/);

    expect(s.acceptedAnswers.length).toBeGreaterThan(0);
    expect(checkAnswer(s, blankOf(s.japanese))).toEqual({ result: "correct" });
    expect(checkAnswer(s, blankOf(s.reading))).toEqual({ result: "correct" });
    for (const a of s.acceptedAnswers) expect(checkAnswer(s, a), a).toEqual({ result: "correct" });

    for (const miss of s.nearMisses) {
      expect(normalizeInput(miss.nudge)).not.toBe("");
      expect(checkAnswer(s, miss.answer), `near miss ${miss.answer} is accepted`).toEqual({ result: "nearMiss", nudge: miss.nudge });
    }

    if (s.conjugation) {
      const { word, form, head = "", tail = "" } = s.conjugation;
      const generated = conjugate(word, form).flatMap((a) => [a.kanji, a.kana].map((x) => normalizeInput(`${head}${x}${tail}`)));
      expect(generated, "the marked answer is one the conjugation engine produces").toContain(normalizeInput(blankOf(s.japanese)));
    }
  });
});
