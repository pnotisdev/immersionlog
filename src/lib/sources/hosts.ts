import type { ImportSource } from "./types";

/**
 * Hostnames each URL importer accepts, matched exactly (never by substring: a check
 * like `url.includes("bookwalker.jp")` would accept `evil.com/?bookwalker.jp/`).
 * Deliberately not server-only: the add dialog uses matchImporterHost() to say
 * "BookWalker link detected" as you paste, without a round-trip. The server
 * re-checks everything in findImporter() (./index.ts) before fetching.
 */
export const IMPORT_HOSTS: Record<ImportSource, readonly string[]> = {
  imdb: ["www.imdb.com", "imdb.com", "m.imdb.com"],
  jiten: ["jiten.moe", "www.jiten.moe"],
  bookmeter: ["bookmeter.com"],
  // r18.bookwalker.jp is recognized only so it can be refused with a clear message.
  bookwalker: ["bookwalker.jp", "www.bookwalker.jp", "r18.bookwalker.jp"],
  cmoa: ["www.cmoa.jp"],
  shonenjumpplus: ["shonenjumpplus.com"],
  backloggd: ["backloggd.com", "www.backloggd.com"],
  // The adult storefront is refused unless DMM_ALLOW_ADULT=1 (see ./dmm.ts).
  dmm: ["dlsoft.dmm.com", "dlsoft.dmm.co.jp"],
};

/** Hostname-only check, safe on the client. Returns the source that would handle `raw`. */
export function matchImporterHost(raw: string): ImportSource | null {
  let url: URL;
  try {
    url = new URL(raw.trim());
  } catch {
    return null;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return null;
  const host = url.hostname.toLowerCase();
  for (const [source, hosts] of Object.entries(IMPORT_HOSTS) as [ImportSource, readonly string[]][]) {
    if (hosts.includes(host)) return source;
  }
  return null;
}
