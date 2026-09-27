import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { GUIDE_CHAPTERS } from "./guide";
import { GUIDE_ANIME, GUIDE_BOOKS, GUIDE_FILMS, GUIDE_GAMES, GUIDE_MANGA, GUIDE_VISUAL_NOVELS } from "./guide-media";

const pageFile = (slug: string) => join(process.cwd(), "src/app/(profile)/guide", slug, "page.tsx");

describe("learning guide", () => {
  it("has a page for every chapter, with an anchor for every listed section", () => {
    expect(new Set(GUIDE_CHAPTERS.map((c) => c.slug)).size).toBe(GUIDE_CHAPTERS.length);
    for (const c of GUIDE_CHAPTERS) {
      const file = pageFile(c.slug);
      expect(existsSync(file), file).toBe(true);
      const source = readFileSync(file, "utf8");
      expect(source).toContain(`chapterMetadata("${c.slug}")`);
      for (const s of c.sections) expect(source, `${c.slug}#${s.id}`).toContain(`id="${s.id}"`);
    }
  });

  it("links only to chapters that exist", () => {
    const paths = new Set(GUIDE_CHAPTERS.map((c) => (c.slug ? `/guide/${c.slug}` : "/guide")));
    const anchors = new Map(GUIDE_CHAPTERS.map((c) => [c.slug ? `/guide/${c.slug}` : "/guide", new Set(c.sections.map((s) => s.id))]));
    for (const c of GUIDE_CHAPTERS) {
      const source = readFileSync(pageFile(c.slug), "utf8");
      for (const m of source.matchAll(/href="(\/guide[^"#]*)(?:#([^"]+))?"/g)) {
        expect(paths.has(m[1]), `${c.slug} links to ${m[1]}`).toBe(true);
        if (m[2]) expect(anchors.get(m[1])?.has(m[2]), `${c.slug} links to ${m[1]}#${m[2]}`).toBe(true);
      }
    }
  });

  it("has sane recommendation data", () => {
    for (const list of [GUIDE_ANIME, GUIDE_FILMS, GUIDE_MANGA, GUIDE_VISUAL_NOVELS, GUIDE_GAMES, GUIDE_BOOKS]) {
      expect(new Set(list.map((m) => m.jiten)).size).toBe(list.length);
      for (const m of list) {
        expect(m.difficulty).toBeGreaterThanOrEqual(0);
        expect(m.difficulty).toBeLessThanOrEqual(5);
        expect(m.chars).toBeGreaterThan(0);
      }
    }
    for (const vn of GUIDE_VISUAL_NOVELS) expect(vn.vndb).toMatch(/^v\d+$/);
  });
});
