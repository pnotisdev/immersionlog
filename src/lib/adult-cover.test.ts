import { describe, expect, it } from "vitest";
import { isAdultCover, markAdultCover, publicCover } from "./adult-cover";
import { autoBanner } from "./banner-queries";

describe("adult cover marking", () => {
  it("marks idempotently, replacing any existing fragment", () => {
    expect(markAdultCover("https://c.example/a.jpg")).toBe("https://c.example/a.jpg#adult");
    expect(markAdultCover("https://c.example/a.jpg#adult")).toBe("https://c.example/a.jpg#adult");
    expect(markAdultCover("https://c.example/a.jpg#x")).toBe("https://c.example/a.jpg#adult");
    expect(markAdultCover(null)).toBeNull();
  });

  it("survives the /_next/image encoding the CSS rule matches on", () => {
    const src = `/_next/image?url=${encodeURIComponent("https://c.example/a.jpg#adult")}&w=384&q=75`;
    expect(src).toContain("%23adult");
    // The fragment is never sent to the image host.
    expect(new URL("https://c.example/a.jpg#adult").href.split("#")[0]).toBe("https://c.example/a.jpg");
  });

  it("keeps adult art out of server-rendered and automatic images", () => {
    expect(isAdultCover("https://c.example/a.jpg#adult")).toBe(true);
    expect(publicCover("https://c.example/a.jpg#adult")).toBeNull();
    expect(publicCover("https://c.example/a.jpg")).toBe("https://c.example/a.jpg");
    const top = [
      { bannerUrl: "https://c.example/wide.jpg#adult", coverUrl: "https://c.example/a.jpg#adult" },
      { bannerUrl: null, coverUrl: "https://c.example/b.jpg" },
    ];
    expect(autoBanner(top as never)).toMatchObject({ url: "https://c.example/b.jpg", wide: false });
  });
});
