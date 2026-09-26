import { describe, expect, it } from "vitest";
import { firstPostImage, isPostImageSrc, postExcerpt, readingMinutes, slugifyTitle } from "./posts";

const IMG = "/api/post-image/0f8fad5b-d9cb-469f-a165-70867728950e";

describe("posts", () => {
  it("slugs titles, and gives up on ones with no ASCII words", () => {
    expect(slugifyTitle("My first 500 hours: Café & VNs!")).toBe("my-first-500-hours-cafe-vns");
    expect(slugifyTitle("日本語の勉強")).toBe("");
    expect(slugifyTitle("a".repeat(80)).length).toBe(60);
  });

  it("accepts only images uploaded here", () => {
    expect(isPostImageSrc(IMG)).toBe(true);
    expect(isPostImageSrc("https://evil.example/pixel.gif")).toBe(false);
    expect(isPostImageSrc(`${IMG}?x=1`)).toBe(false);
    expect(isPostImageSrc(`https://immersionlog.com${IMG}`)).toBe(false);
  });

  it("finds the first uploaded image, skipping external ones", () => {
    expect(firstPostImage(`![x](https://evil.example/a.png)\n\n![shelf](${IMG} "my shelf")`)).toBe(IMG);
    expect(firstPostImage("no images")).toBeNull();
  });

  it("excerpts Markdown as plain text", () => {
    const md = `## Week 1\n\nRead **Yotsuba** with [Yomitan](https://yomitan.wiki). ![a](${IMG})`;
    expect(postExcerpt(md)).toBe("Week 1 Read Yotsuba with Yomitan.");
    expect(postExcerpt("word ".repeat(100), 30)).toMatch(/…$/);
    expect(postExcerpt('Hi\n\n| Month | Hours |\n|---|---|\n| 1 | 40 |\n\n---\n\n<script>alert("x")</script> bye')).toBe("Hi Month Hours 1 40 bye");
  });

  it("estimates reading time for English and Japanese", () => {
    expect(readingMinutes("word ".repeat(660))).toBe(3);
    expect(readingMinutes("あ".repeat(500))).toBe(2);
    expect(readingMinutes("")).toBe(1);
  });
});
