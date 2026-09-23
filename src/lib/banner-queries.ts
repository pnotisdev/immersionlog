import "server-only";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { libraryEntries, mediaItems, userBanners } from "@/db/schema";
import { isAdultCover, publicCover } from "@/lib/adult-cover";
import { bannerUrl, type ProfileBanner } from "./banner";

/** The art fields a banner can be made from — a subset of getTopItems' rows. */
interface ArtSource {
  bannerUrl: string | null;
  coverUrl: string | null;
}

/** A user's stored banner choice, or null for automatic. Cheap: never selects the image bytes. */
export async function getBannerChoice(userId: string) {
  const [row] = await db
    .select({
      hasUpload: sql<boolean>`${userBanners.data} is not null`,
      updatedAt: userBanners.updatedAt,
      mediaItemId: userBanners.mediaItemId,
      itemBanner: mediaItems.bannerUrl,
      itemCover: mediaItems.coverUrl,
    })
    .from(userBanners)
    .leftJoin(mediaItems, eq(mediaItems.id, userBanners.mediaItemId))
    .where(eq(userBanners.userId, userId))
    .limit(1);
  return row ?? null;
}

/**
 * What a profile header shows: their upload, else the library title they picked, else
 * automatic — the first of their most-immersed titles with real wide art (an AniList
 * banner), falling back to the top title's cover. Split from getBannerChoice so a page
 * can fetch the choice in parallel with the `top` titles it already needs.
 */
export function resolveBanner(
  userId: string,
  choice: Awaited<ReturnType<typeof getBannerChoice>>,
  top: ArtSource[],
): ProfileBanner {
  if (choice?.hasUpload) return { url: bannerUrl(userId, choice.updatedAt), wide: true, source: "upload" };
  if (choice?.mediaItemId && (choice.itemBanner || choice.itemCover)) {
    return {
      url: choice.itemBanner ?? choice.itemCover,
      wide: choice.itemBanner != null,
      source: "library",
      mediaItemId: choice.mediaItemId,
    };
  }
  return autoBanner(top);
}

export function autoBanner(top: ArtSource[]): ProfileBanner {
  // Never pick adult art automatically: it would show as a blurred smear on the profile
  // (src/lib/adult-cover.ts). A banner the user chose explicitly is still honoured.
  const wide = top.slice(0, 5).find((t) => publicCover(t.bannerUrl));
  if (wide) return { url: wide.bannerUrl, wide: true, source: "auto" };
  return { url: top.find((t) => !isAdultCover(t.coverUrl))?.coverUrl ?? null, wide: false, source: "auto" };
}

/** Titles in someone's library that have art to use as a banner, for the settings picker. Wide art first. */
export async function listBannerOptions(userId: string) {
  const rows = await db
    .select({
      mediaItemId: mediaItems.id,
      title: mediaItems.title,
      bannerUrl: mediaItems.bannerUrl,
      coverUrl: mediaItems.coverUrl,
    })
    .from(libraryEntries)
    .innerJoin(mediaItems, eq(mediaItems.id, libraryEntries.mediaItemId))
    .where(and(eq(libraryEntries.userId, userId), sql`(${mediaItems.bannerUrl} is not null or ${mediaItems.coverUrl} is not null)`))
    .orderBy(sql`${mediaItems.bannerUrl} is null`, mediaItems.title)
    .limit(60);
  return rows;
}
