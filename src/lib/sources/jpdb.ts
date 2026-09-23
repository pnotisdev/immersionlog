/**
 * JPDB (jpdb.io) is link-out only. Its terms of use (https://jpdb.io/terms-of-use,
 * checked 2026-09-23) treat "accessing the website in an automated manner, e.g.
 * scraping" as abuse, so this app never fetches it: a user can attach a JPDB page URL
 * to an item and it's rendered as a link. Gated by ENABLE_JPDB=1.
 */

const JPDB_MEDIA_PATH = /^\/(visual-novel|anime|light-novel|novel|web-novel|live-action|video-game|non-fiction|textbook|audio)\/(\d+)(?:\/[^/?#]*)?\/?$/;

export function jpdbEnabled(): boolean {
  return process.env.ENABLE_JPDB === "1";
}

/** A canonical jpdb.io media page URL, or null for anything else. Pure; no I/O. */
export function parseJpdbUrl(raw: string): string | null {
  let url: URL;
  try {
    url = new URL(raw.trim());
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || url.hostname.toLowerCase() !== "jpdb.io") return null;
  const m = JPDB_MEDIA_PATH.exec(url.pathname);
  return m ? `https://jpdb.io${url.pathname.replace(/\/$/, "")}` : null;
}
