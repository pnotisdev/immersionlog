import { describe, expect, it } from "vitest";
import { ImportError } from "./types";
import { fromApi, fromOEmbed, parseYouTubeDuration } from "./youtube";

const parsed = { sourceId: "dQw4w9WgXcQ", canonicalUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" };

describe("YouTube", () => {
  it("parses ISO 8601 durations to seconds", () => {
    expect(parseYouTubeDuration("PT3M33S")).toBe(213);
    expect(parseYouTubeDuration("PT1H2M3S")).toBe(3723);
    expect(parseYouTubeDuration("P1DT2H")).toBe(93600);
    expect(parseYouTubeDuration("P0D")).toBeNull();
    expect(parseYouTubeDuration("garbage")).toBeNull();
  });

  it("builds a row from oEmbed, keeping only ytimg thumbnails", () => {
    const { result } = fromOEmbed(
      { title: " 石器時代の村作り ", author_name: "アフロマスク", thumbnail_url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" },
      parsed,
    );
    expect(result).toMatchObject({ source: "youtube", sourceId: "dQw4w9WgXcQ", mediaType: "youtube", title: "石器時代の村作り" });
    expect(result.coverUrl).toBe("https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg");
    expect(result.metadata?.details).toEqual({ Channel: "アフロマスク" });
    expect(fromOEmbed({ title: "x", thumbnail_url: "https://evil.example/x.jpg" }, parsed).result.coverUrl).toBeNull();
  });

  it("keeps a podcast hint, otherwise imports as YouTube", () => {
    expect(fromOEmbed({ title: "x" }, parsed, "podcast").result.mediaType).toBe("podcast");
    expect(fromOEmbed({ title: "x" }, parsed, "anime").result.mediaType).toBe("youtube");
  });

  it("builds a richer row from the Data API", () => {
    const { result } = fromApi(
      {
        snippet: {
          title: "Cure Dolly 1",
          channelTitle: "Cure Dolly",
          channelId: "UC123",
          publishedAt: "2017-05-01T00:00:00Z",
          description: "Japanese grammar",
          thumbnails: { high: { url: "https://i.ytimg.com/vi/x/hqdefault.jpg" }, maxres: { url: "https://i.ytimg.com/vi/x/maxresdefault.jpg" } },
        },
        contentDetails: { duration: "PT12M5S" },
      },
      parsed,
    );
    expect(result.year).toBe(2017);
    expect(result.bannerUrl).toBe("https://i.ytimg.com/vi/x/maxresdefault.jpg");
    expect(result.metadata).toMatchObject({ lengthSeconds: 725, channel: "Cure Dolly", channelId: "UC123" });
    expect(result.metadata?.details).toEqual({ Channel: "Cure Dolly", Published: "2017-05-01", Length: "12:05" });
  });

  it("refuses a video with no title", () => {
    expect(() => fromOEmbed({}, parsed)).toThrow(ImportError);
  });
});
