/**
 * Shared profile-banner constants/helpers — imported from server code (src/actions/account.ts,
 * src/lib/banner-queries.ts, src/app/api/banner/[userId]/route.ts) and the client-side
 * settings form, so this file must stay environment-agnostic (no `server-only`).
 */

/** Rejected before any processing — see uploadBanner in src/actions/account.ts. */
export const MAX_BANNER_UPLOAD_BYTES = 4 * 1024 * 1024; // 4MB — under next.config serverActions.bodySizeLimit
/** Stored dimensions: 3:1, wide enough for a desktop profile header at 1.5x. */
export const BANNER_WIDTH = 1800;
export const BANNER_HEIGHT = 600;
export const BANNER_CONTENT_TYPE = "image/webp";

/** Where an uploaded banner is served from; `?v` busts caches on re-upload (same scheme as avatarUrl). */
export function bannerUrl(userId: string, updatedAt: Date | number): string {
  const v = typeof updatedAt === "number" ? updatedAt : updatedAt.getTime();
  return `/api/banner/${userId}?v=${v}`;
}

export type BannerSource = "upload" | "library" | "auto";

/** A resolved profile banner, ready for ArtBanner. */
export interface ProfileBanner {
  url: string | null;
  /**
   * true for art made to be wide (an upload, an AniList banner): shown as is. false for a
   * portrait cover, which cropped to a 5:1 strip is a blurry band of someone's torso, so
   * ArtBanner shows it whole, letterboxed by a blurred wash of its own colours.
   */
  wide: boolean;
  source: BannerSource;
  /** The picked library title, when source is "library". */
  mediaItemId?: string | null;
}
