import { describe, expect, it } from "vitest";
import { parseSpotifyShowHtml, showIdFromEpisodeHtml } from "./spotify";
import { ImportError } from "./types";

const SHOW = "0TWRqowC0TPhXlG79M0qzv";

const showHtml = (extra = "") => `<html><head>
<meta property="og:title" content="Japanese with Shun"/>
<meta property="og:description" content="Podcast · Shunsuke Otani · A podcast for beginner learners · Genki 1"/>
<meta property="og:image" content="https://i.scdn.co/image/ab6765630000ba8a"/>
${extra}</head><body></body></html>`;

describe("Spotify", () => {
  it("builds a podcast row from a show page", () => {
    const { result } = parseSpotifyShowHtml(showHtml(), SHOW);
    expect(result).toMatchObject({
      source: "spotify",
      sourceId: SHOW,
      mediaType: "podcast",
      title: "Japanese with Shun",
      coverUrl: "https://i.scdn.co/image/ab6765630000ba8a",
      description: "A podcast for beginner learners · Genki 1",
      externalUrl: `https://open.spotify.com/show/${SHOW}`,
    });
    expect(result.metadata?.details).toEqual({ Publisher: "Shunsuke Otani" });
  });

  it("prefers the PodcastSeries name and drops covers on other hosts", () => {
    const ld = `<script type="application/ld+json">{"@type":"PodcastSeries","name":"日本語の時間"}</script>`;
    const html = showHtml(ld).replace("https://i.scdn.co/", "https://evil.example/");
    const { result } = parseSpotifyShowHtml(html, SHOW);
    expect(result.title).toBe("日本語の時間");
    expect(result.coverUrl).toBeNull();
  });

  it("refuses a page with no title", () => {
    expect(() => parseSpotifyShowHtml("<html></html>", SHOW)).toThrow(ImportError);
  });

  it("finds the show an episode belongs to", () => {
    expect(showIdFromEpisodeHtml(`<h1>Ep1</h1><a href="/show/${SHOW}"><div></div></a>`)).toBe(SHOW);
    expect(showIdFromEpisodeHtml(`<a href="/show/short">x</a>`)).toBeNull();
  });
});
