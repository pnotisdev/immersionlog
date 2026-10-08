import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { LESSONS, parseLesson } from "@/lib/grammar-guide";
import { LessonBody } from "./lesson-body";

describe("LessonBody", () => {
  it.each(LESSONS.map((l) => [l.slug, l] as const))("renders %s", (_slug, lesson) => {
    const html = renderToStaticMarkup(createElement(LessonBody, { nodes: parseLesson(lesson).nodes }));
    expect(html).toContain("<h2");
    expect(html).toContain("<ruby");
    expect(html).not.toContain(":::");
    expect(html).not.toContain("<table><thead></thead>");
  });
});
