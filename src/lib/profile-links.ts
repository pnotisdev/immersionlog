import type { ProfileLink } from "@/db/schema/auth";

/**
 * Shared rules for `user.bio`/`user.profileLinks` (src/db/schema/auth.ts), enforced by
 * the settings form (src/components/auth/settings-form.tsx) and, as the actual source of
 * truth, by updateProfileLinks (src/actions/account.ts) — mirrors src/lib/username.ts.
 */
export const BIO_MAX_LENGTH = 280;
export const MAX_PROFILE_LINKS = 6;
export const PROFILE_LINK_URL_MAX_LENGTH = 200;

export const PROFILE_LINK_PLATFORMS = [
  { id: "anilist", label: "AniList" },
  { id: "vndb", label: "VNDB" },
  { id: "bookmeter", label: "Bookmeter" },
  { id: "discord", label: "Discord" },
  { id: "x", label: "X" },
  { id: "website", label: "Website" },
] as const;

export type ProfileLinkPlatform = (typeof PROFILE_LINK_PLATFORMS)[number]["id"];

const PLATFORM_IDS = new Set<string>(PROFILE_LINK_PLATFORMS.map((p) => p.id));

export function platformLabel(platform: string): string {
  return PROFILE_LINK_PLATFORMS.find((p) => p.id === platform)?.label ?? platform;
}

/**
 * Drops anything malformed rather than rejecting the whole save: an empty URL or an
 * unknown platform on one row shouldn't block the others. Only http(s) URLs are kept —
 * `new URL()` also accepts things like `javascript:`, which a link chip must never render.
 */
export function sanitizeProfileLinks(raw: unknown): ProfileLink[] {
  if (!Array.isArray(raw)) return [];
  const out: ProfileLink[] = [];
  for (const entry of raw) {
    if (out.length >= MAX_PROFILE_LINKS) break;
    if (typeof entry !== "object" || entry === null) continue;
    const platform = "platform" in entry ? String((entry as { platform: unknown }).platform) : "";
    const urlRaw = "url" in entry ? String((entry as { url: unknown }).url).trim() : "";
    if (!PLATFORM_IDS.has(platform) || !urlRaw || urlRaw.length > PROFILE_LINK_URL_MAX_LENGTH) continue;
    let parsed: URL;
    try {
      parsed = new URL(urlRaw);
    } catch {
      continue;
    }
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") continue;
    out.push({ platform, url: parsed.toString() });
  }
  return out;
}
