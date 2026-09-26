/*
 * Spotify podcast links (shows and episodes). Spotify's oEmbed titles a show after its
 * latest episode, and its Web API needs client credentials, so the public show page is
 * read instead: og:title / PodcastSeries JSON-LD carry the show's own name. An episode
 * link resolves to its show, since a podcast is one library row however many episodes
 * are logged against it. Verified against live pages on 2026-09-25.
 */
import "server-only";
import { IMPORT_HOSTS } from "./hosts";
import { jsonLd, loadHtml, og } from "./html";
import { safeFetchText } from "./http";
import { cleanDescription, type ImportResult, ImportError, type ParsedImportUrl, type UrlImporter } from "./types";

const COVER_HOSTS = ["i.scdn.co"];

const SPOTIFY_ID = /^[A-Za-z0-9]{22}$/;

/**
 * Pure: `show:<id>` / `episode:<id>` for open.spotify.com show and episode pages
 * (with or without an /intl-xx/ prefix), or null (artists, albums, playlists).
 */
export function parseSpotifyUrl(url: URL): ParsedImportUrl | null {
  const m = /^(?:\/intl-[a-z-]+)?\/(show|episode)\/([^/?#]+)/i.exec(url.pathname);
  if (!m || !SPOTIFY_ID.test(m[2])) return null;
  const kind = m[1].toLowerCase();
  return { sourceId: `${kind}:${m[2]}`, canonicalUrl: `https://open.spotify.com/${kind}/${m[2]}` };
}

function allowedCover(url: string | null | undefined): string | null {
  if (!url) return null;
  try {
    return COVER_HOSTS.includes(new URL(url).hostname) ? url : null;
  } catch {
    return null;
  }
}

/** Pure: the show an episode page belongs to, or null. */
export function showIdFromEpisodeHtml(html: string): string | null {
  const $ = loadHtml(html);
  let id: string | null = null;
  $('a[href^="/show/"]').each((_, el) => {
    const m = /^\/show\/([A-Za-z0-9]{22})(?:[/?#]|$)/.exec($(el).attr("href") ?? "");
    if (m) {
      id = m[1];
      return false;
    }
  });
  return id;
}

/** Pure: show page HTML → row. */
export function parseSpotifyShowHtml(html: string, showId: string): ImportResult {
  const $ = loadHtml(html);
  const ld = jsonLd($, ["PodcastSeries"]);
  const title = (typeof ld?.name === "string" && ld.name.trim()) || og($, "og:title");
  if (!title) throw new ImportError("no_title", showId);

  // og:description reads "Podcast · <publisher> · <description>".
  const parts = (og($, "og:description") ?? "").split(" · ");
  const publisher = parts[0] === "Podcast" && parts.length >= 3 ? parts[1].trim() : null;
  const description = parts.length >= 3 ? parts.slice(2).join(" · ") : typeof ld?.description === "string" ? ld.description : null;

  const details: Record<string, string> = {};
  if (publisher) details.Publisher = publisher;

  return {
    result: {
      source: "spotify",
      sourceId: showId,
      mediaType: "podcast",
      title,
      titleNative: null,
      coverUrl: allowedCover(og($, "og:image")),
      bannerUrl: null,
      year: null,
      description: cleanDescription(description?.replace(/^Listen to .+? on Spotify\.\s*/, "")),
      externalUrl: `https://open.spotify.com/show/${showId}`,
      totalAmount: null,
      totalUnit: null,
      metadata: { details, ...(publisher ? { publisher } : {}) },
    },
    warnings: [],
  };
}

async function fetchPage(url: string, id: string): Promise<string> {
  try {
    return (await safeFetchText(url, { allowedHosts: IMPORT_HOSTS.spotify })).text;
  } catch (err) {
    // Unknown ids answer 403, not 404.
    if (err instanceof ImportError && err.code === "upstream_status" && err.detail === 403) throw new ImportError("not_found", id);
    throw err;
  }
}

export const spotifyImporter: UrlImporter = {
  source: "spotify",
  hosts: IMPORT_HOSTS.spotify,
  mediaTypes: ["podcast"],
  parse: parseSpotifyUrl,
  async fetch(parsed) {
    const [kind, id] = parsed.sourceId.split(":");
    let showId = id;
    if (kind === "episode") {
      const found = showIdFromEpisodeHtml(await fetchPage(parsed.canonicalUrl, id));
      if (!found) throw new ImportError("parse", `no show link on episode ${id}`);
      showId = found;
    }
    return parseSpotifyShowHtml(await fetchPage(`https://open.spotify.com/show/${showId}`, showId), showId);
  },
};
