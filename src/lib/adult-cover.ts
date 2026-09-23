/**
 * Covers of adult-flagged items (metadata.adult) are stored with a `#adult` URL
 * fragment. Fragments are never sent to the image host or through /_next/image's
 * fetch, so the image loads as usual, but the flag now travels with the cover through
 * every query and component without threading a new field through each one.
 *
 * - Web pages: globals.css blurs any <img> whose src carries the mark (raw, or encoded
 *   as %23adult inside a /_next/image URL) unless the viewer opted in (Settings →
 *   "Show adult covers", which sets data-adult-covers="show"; see AdultCoversPref).
 * - Server-rendered images (OG cards, report card, auto profile banner) can't be
 *   blurred by CSS, so they drop marked covers entirely: see publicCover().
 */
export const ADULT_COVER_MARK = "#adult";

export function isAdultCover(url: string | null | undefined): boolean {
  return !!url && url.endsWith(ADULT_COVER_MARK);
}

export function markAdultCover(url: string | null): string | null {
  if (!url || isAdultCover(url)) return url;
  return url.replace(/#.*$/, "") + ADULT_COVER_MARK;
}

/** For images rendered server-side and shared publicly: adult covers are left out. */
export function publicCover(url: string | null | undefined): string | null {
  return url && !isAdultCover(url) ? url : null;
}
