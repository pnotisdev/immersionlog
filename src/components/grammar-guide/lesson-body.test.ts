import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { LESSONS, parseLesson } from "@/lib/grammar-guide";
import { LessonBody } from "./lesson-body";

describe("LessonBody", () => {
  it.each(LESSONS.map((l) => [l.slug, l] as const))("renders %s", (_slug, lesson) => {
    const html = renderToStaticMarkup(createElement(LessonBody, { nodes: parseLesson(lesson).nodes }));
    expect(html).toContain("<h2");
    // Lessons with glossed examples show furigana; a lesson of tables and prose may have none.
    if (parseLesson(lesson).nodes.some((n) => n.t === "ex")) expect(html).toContain("<ruby");
    expect(html).not.toContain(":::");
    expect(html).not.toContain("<table><thead></thead>");
  });
});
