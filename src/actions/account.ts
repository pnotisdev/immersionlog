"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import sharp from "sharp";
import { db } from "@/db";
import { libraryEntries, user, userAvatars, userBanners, type ProfileLink } from "@/db/schema";
import { requireUser } from "@/lib/session";
import { AVATAR_CONTENT_TYPE, AVATAR_SIZE, avatarUrl, MAX_AVATAR_UPLOAD_BYTES } from "@/lib/avatar";
import { BANNER_CONTENT_TYPE, BANNER_HEIGHT, BANNER_WIDTH, MAX_BANNER_UPLOAD_BYTES } from "@/lib/banner";
import { sanitizeProfileLinks } from "@/lib/profile-links";
import type { ActionResult } from "./types";

function revalidateProfile(username: string | null | undefined) {
  revalidatePath("/settings");
  if (username) revalidatePath(`/u/${username}`);
}

/**
 * Stores an uploaded image as the user's avatar: capped at MAX_AVATAR_UPLOAD_BYTES
 * before any processing (so a huge file can't burn CPU on the resize step just to be
 * rejected afterward), then resized/re-encoded server-side to a small fixed-size square
 * — never trusting the client to have already done this. See src/db/schema/app.ts for
 * why the bytes live in their own table rather than on `user` itself, and
 * src/app/api/avatar/[userId]/route.ts for how they're served back out.
 */
export async function uploadAvatar(formData: FormData): Promise<ActionResult<{ image: string }>> {
  const me = await requireUser();

  const file = formData.get("avatar");
  if (!(file instanceof File)) return { ok: false, error: "No file provided" };
  if (file.size === 0) return { ok: false, error: "That file is empty" };
  if (file.size > MAX_AVATAR_UPLOAD_BYTES) {
    return { ok: false, error: `Images must be under ${Math.round(MAX_AVATAR_UPLOAD_BYTES / (1024 * 1024))}MB` };
  }

  let resized: Buffer;
  try {
    const inputBuffer = Buffer.from(await file.arrayBuffer());
    resized = await sharp(inputBuffer)
      .rotate() // apply EXIF orientation before the crop, or sideways photos crop wrong
      .resize(AVATAR_SIZE, AVATAR_SIZE, { fit: "cover", position: "attention" })
      .webp({ quality: 82 })
      .toBuffer();
  } catch {
    return { ok: false, error: "That doesn't look like a valid image" };
  }

  const now = new Date();
  await db.transaction(async (tx) => {
    await tx
      .insert(userAvatars)
      .values({ userId: me.id, data: resized, contentType: AVATAR_CONTENT_TYPE, updatedAt: now })
      .onConflictDoUpdate({
        target: userAvatars.userId,
        set: { data: resized, contentType: AVATAR_CONTENT_TYPE, updatedAt: now },
      });
    await tx.update(user).set({ image: avatarUrl(me.id, now) }).where(eq(user.id, me.id));
  });

  revalidateProfile(me.username);
  return { ok: true, data: { image: avatarUrl(me.id, now) } };
}

/** Reverts to the initials fallback (see src/components/ranking/avatar.tsx). */
export async function removeAvatar(): Promise<ActionResult<{ image: null }>> {
  const me = await requireUser();
  await db.transaction(async (tx) => {
    await tx.delete(userAvatars).where(eq(userAvatars.userId, me.id));
    await tx.update(user).set({ image: null }).where(eq(user.id, me.id));
  });
  revalidateProfile(me.username);
  return { ok: true, data: { image: null } };
}

/**
 * Profile banner from an uploaded image. Same shape as uploadAvatar: the size cap runs
 * before any decoding, and the image is always re-encoded server-side (to a fixed 3:1
 * WebP, cropped around whatever sharp judges most interesting), so nothing the client
 * sends is ever served back as-is. Replaces a library pick, if there was one.
 */
export async function uploadBanner(formData: FormData): Promise<ActionResult<null>> {
  const me = await requireUser();

  const file = formData.get("banner");
  if (!(file instanceof File)) return { ok: false, error: "No file provided" };
  if (file.size === 0) return { ok: false, error: "That file is empty" };
  if (file.size > MAX_BANNER_UPLOAD_BYTES) {
    return { ok: false, error: `Images must be under ${Math.round(MAX_BANNER_UPLOAD_BYTES / (1024 * 1024))}MB` };
  }

  let resized: Buffer;
  try {
    resized = await sharp(Buffer.from(await file.arrayBuffer()))
      .rotate()
      .resize(BANNER_WIDTH, BANNER_HEIGHT, { fit: "cover", position: "attention", withoutEnlargement: false })
      .webp({ quality: 80 })
      .toBuffer();
  } catch {
    return { ok: false, error: "That doesn't look like a valid image" };
  }

  const now = new Date();
  const values = { data: resized, contentType: BANNER_CONTENT_TYPE, mediaItemId: null, updatedAt: now };
  await db
    .insert(userBanners)
    .values({ userId: me.id, ...values })
    .onConflictDoUpdate({ target: userBanners.userId, set: values });

  revalidateProfile(me.username);
  return { ok: true, data: null };
}

/** Profile banner from the art of a title in the user's own library (never an arbitrary URL). */
export async function setBannerFromLibrary(mediaItemId: string): Promise<ActionResult<null>> {
  const me = await requireUser();
  if (typeof mediaItemId !== "string" || !/^[0-9a-f-]{36}$/i.test(mediaItemId)) return { ok: false, error: "Unknown title" };

  const [owned] = await db
    .select({ id: libraryEntries.id })
    .from(libraryEntries)
    .where(and(eq(libraryEntries.userId, me.id), eq(libraryEntries.mediaItemId, mediaItemId)))
    .limit(1);
  if (!owned) return { ok: false, error: "That title isn't in your library" };

  const values = { data: null, contentType: null, mediaItemId, updatedAt: new Date() };
  await db
    .insert(userBanners)
    .values({ userId: me.id, ...values })
    .onConflictDoUpdate({ target: userBanners.userId, set: values });

  revalidateProfile(me.username);
  return { ok: true, data: null };
}

/** Back to automatic: art from whatever they've spent the most time on (src/lib/banner-queries.ts). */
export async function resetBanner(): Promise<ActionResult<null>> {
  const me = await requireUser();
  await db.delete(userBanners).where(eq(userBanners.userId, me.id));
  revalidateProfile(me.username);
  return { ok: true, data: null };
}

/**
 * The profile-links list on /u/[username]. A separate action from the rest of Settings
 * (src/lib/auth.ts's `additionalFields` + authClient.updateUser) because it's a
 * structured array, not one of the primitive types that mechanism supports — same
 * db.update(user) shape as the avatar actions above. Re-sanitizes server-side
 * (sanitizeProfileLinks) rather than trusting the client's own filtering.
 */
export async function updateProfileLinks(links: unknown): Promise<ActionResult<{ links: ProfileLink[] }>> {
  const me = await requireUser();
  const clean = sanitizeProfileLinks(links);
  await db.update(user).set({ profileLinks: clean }).where(eq(user.id, me.id));
  revalidateProfile(me.username);
  return { ok: true, data: { links: clean } };
}
