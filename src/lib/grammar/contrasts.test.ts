import { describe, expect, it } from "vitest";
import { CONTRAST_GROUPS } from "./contrasts";
import { getPoint } from "./decks";
import { alignReading, blankOf, parseMarked, readingPenalty } from "./sentence";

describe("contrast groups", () => {
  it("have unique ids and real points", () => {
    expect(new Set(CONTRAST_GROUPS.map((g) => g.id)).size).toBe(CONTRAST_GROUPS.length);
    for (const g of CONTRAST_GROUPS) {
      expect(g.points.length).toBeGreaterThanOrEqual(2);
      for (const p of g.points) expect(getPoint(p.pointId), `${g.id}: ${p.pointId}`).toBeDefined();
    }
  });

  describe.each(CONTRAST_GROUPS.map((g) => [g.id, g] as const))("%s", (_id, group) => {
    it("has enough questions", () => expect(group.questions.length).toBeGreaterThanOrEqual(4));

    it.each(group.questions.map((q) => [q.english, q] as const))("%s", (_e, q) => {
      expect(parseMarked(q.japanese), q.japanese).not.toBeNull();
      expect(parseMarked(q.reading), q.reading).not.toBeNull();
      const tokens = alignReading(q.japanese, q.reading);
      expect(tokens, `${q.japanese} / ${q.reading}`).not.toBeNull();
      for (const t of tokens ?? []) if (t.ruby) expect(readingPenalty(t.text, t.ruby), `${t.text} read as ${t.ruby}`).toBe(0);
      expect(q.choices.length).toBeGreaterThanOrEqual(2);
      expect(new Set(q.choices).size).toBe(q.choices.length);
      expect(blankOf(q.japanese)).toBe(q.choices[0]);
      expect(q.why.trim()).not.toBe("");
    });
  });
});
