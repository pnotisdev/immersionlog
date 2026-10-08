import { describe, expect, it } from "vitest";
import { alignReading } from "@/lib/grammar/sentence";
import { getPoint } from "@/lib/grammar/decks";
import { LESSONS, parseLesson, PARTS } from "./index";
import type { Node } from "./types";

const examples = (nodes: Node[]): Extract<Node, { t: "ex" }>[] =>
  nodes.flatMap((n) => (n.t === "ex" ? [n] : n.t === "box" ? examples(n.children) : []));

describe("grammar guide", () => {
  it("has unique, URL-safe slugs", () => {
    const slugs = LESSONS.map((l) => l.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("lists every lesson in exactly one part", () => {
    expect(PARTS.flatMap((p) => p.lessons)).toEqual(LESSONS);
  });
});

describe.each(LESSONS.map((l) => [l.slug, l] as const))("lesson %s", (_slug, lesson) => {
  const parsed = parseLesson(lesson);

  it("has sections and a description", () => {
    expect(lesson.description.length).toBeGreaterThan(40);
    expect(parsed.sections.length).toBeGreaterThan(0);
    const ids = parsed.sections.map((s) => s.id);
    expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([]);
  });

  it("links only to real grammar points", () => {
    expect((lesson.points ?? []).filter((id) => !getPoint(id))).toEqual([]);
  });

  it("gives every example's kanji a reading that lines up", () => {
    const problems: string[] = [];
    for (const ex of examples(parsed.nodes)) {
      for (const c of ex.chunks) {
        const hasKanji = /[一-鿿々]/.test(c.jp);
        if (hasKanji && !c.kana) problems.push(`${c.jp} needs a reading`);
        if (c.kana && !alignReading(c.jp, c.kana)) problems.push(`${c.jp} / ${c.kana} don't line up`);
      }
    }
    expect(problems).toEqual([]);
  });

  it("is not cut short by stray markup", () => {
    expect(lesson.body).not.toMatch(/<[a-z]+[ >]/);
  });
});
