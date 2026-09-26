"use server";

import { and, count, eq, gt, isNotNull, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import sharp, { type OutputInfo } from "sharp";
import { z } from "zod";
import { db } from "@/db";
import { immersionSessions, postImages, postKudos, postReports, posts, user } from "@/db/schema";
import { requireAdmin } from "@/lib/admin";
import {
  IMAGE_UPLOAD_MIN_SECONDS,
  MAX_POST_BODY,
  MAX_POST_IMAGE_UPLOAD_BYTES,
  MAX_POST_TITLE,
  POST_IMAGE_CONTENT_TYPE,
  POST_IMAGE_MAX_WIDTH,
  POST_IMAGES_PER_DAY,
  POSTS_PER_DAY,
  postImageUrl,
  postPath,
  slugifyTitle,
} from "@/lib/posts";
import { requireUser } from "@/lib/session";
import type { ActionResult } from "./types";

const DAY_MS = 24 * 60 * 60 * 1000;
const isId = (id: string) => z.string().uuid().safeParse(id).success;

const postInput = z.object({
  id: z.string().uuid().optional(),
  title: z.string().trim().min(1, "Give your post a title").max(MAX_POST_TITLE, `Titles are at most ${MAX_POST_TITLE} characters`),
  body: z.string().max(MAX_POST_BODY, `Posts are at most ${MAX_POST_BODY.toLocaleString()} characters`),
  /** The state to leave the post in: published (publishing or updating) or a draft. */
  publish: z.boolean(),
});

function revalidatePosts(username: string | null | undefined, slug?: string) {
  revalidatePath("/community/journal");
  if (!username) return;
  revalidatePath(`/u/${username}`);
  revalidatePath(`/u/${username}/posts`);
  if (slug) revalidatePath(postPath(username, slug));
}

/** A slug unused by this author: the title's, else a random one, suffixed on collision. */
async function freeSlug(userId: string, title: string): Promise<string> {
  const base = slugifyTitle(title) || crypto.randomUUID().slice(0, 8);
  const taken = await db
    .select({ slug: posts.slug })
    .from(posts)
    .where(and(eq(posts.userId, userId), sql`${posts.slug} like ${`${base}%`}`));
  const used = new Set(taken.map((r) => r.slug));
  if (!used.has(base)) return base;
  for (let n = 2; ; n++) if (!used.has(`${base}-${n}`)) return `${base}-${n}`;
}

/** Create or edit a post, leaving it published or as a draft. */
export async function savePost(input: z.input<typeof postInput>): Promise<ActionResult<{ id: string; url: string }>> {
  const me = await requireUser();
  const parsed = postInput.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid post" };
  const { id, title, body, publish } = parsed.data;
  if (publish && !body.trim()) return { ok: false, error: "Write something before publishing" };
  const now = new Date();

  let row: { id: string; slug: string };
  if (id) {
    const [existing] = await db
      .select({ publishedAt: posts.publishedAt })
      .from(posts)
      .where(and(eq(posts.id, id), eq(posts.userId, me.id)))
      .limit(1);
    if (!existing) return { ok: false, error: "Post not found" };
    [row] = await db
      .update(posts)
      .set({ title, body, updatedAt: now, publishedAt: publish ? (existing.publishedAt ?? now) : null })
      .where(eq(posts.id, id))
      .returning({ id: posts.id, slug: posts.slug });
  } else {
    const [recent] = await db
      .select({ n: count() })
      .from(posts)
      .where(and(eq(posts.userId, me.id), gt(posts.createdAt, new Date(now.getTime() - DAY_MS))));
    if ((recent?.n ?? 0) >= POSTS_PER_DAY) return { ok: false, error: `You can start ${POSTS_PER_DAY} posts a day. Try again tomorrow.` };
    [row] = await db
      .insert(posts)
      .values({ userId: me.id, slug: await freeSlug(me.id, title), title, body, publishedAt: publish ? now : null })
      .returning({ id: posts.id, slug: posts.slug });
  }

  revalidatePosts(me.username, row.slug);
  const url = me.username ? postPath(me.username, row.slug) : `/write/${row.id}`;
  return { ok: true, data: { id: row.id, url } };
}

export async function deletePost(id: string): Promise<ActionResult> {
  const me = await requireUser();
  if (!isId(id)) return { ok: false, error: "Post not found" };
  const [row] = await db
    .delete(posts)
    .where(and(eq(posts.id, id), eq(posts.userId, me.id)))
    .returning({ slug: posts.slug });
  if (!row) return { ok: false, error: "Post not found" };
  revalidatePosts(me.username, row.slug);
  return { ok: true, data: undefined };
}

/**
 * Stores an image for a post and returns the URL to embed. Same handling as avatar and
 * banner uploads (src/actions/account.ts): size cap before decoding, then always
 * re-encoded, so nothing the client sent is served back as is. sharp drops EXIF (GPS
 * included) unless told to keep it; .rotate() applies the orientation first.
 */
export async function uploadPostImage(formData: FormData): Promise<ActionResult<{ url: string; width: number; height: number }>> {
  const me = await requireUser();
  const file = formData.get("image");
  if (!(file instanceof File)) return { ok: false, error: "No file provided" };
  if (file.size === 0) return { ok: false, error: "That file is empty" };
  if (file.size > MAX_POST_IMAGE_UPLOAD_BYTES) {
    return { ok: false, error: `Images must be under ${Math.round(MAX_POST_IMAGE_UPLOAD_BYTES / (1024 * 1024))}MB` };
  }

  const [[logged], [recent]] = await Promise.all([
    db
      .select({ seconds: sql<number>`coalesce(sum(${immersionSessions.durationSeconds}), 0)::int`.mapWith(Number) })
      .from(immersionSessions)
      .where(eq(immersionSessions.userId, me.id)),
    db
      .select({ n: count() })
      .from(postImages)
      .where(and(eq(postImages.userId, me.id), gt(postImages.createdAt, new Date(Date.now() - DAY_MS)))),
  ]);
  if ((logged?.seconds ?? 0) < IMAGE_UPLOAD_MIN_SECONDS) {
    return { ok: false, error: "Images unlock once you've logged an hour of immersion" };
  }
  if ((recent?.n ?? 0) >= POST_IMAGES_PER_DAY) return { ok: false, error: `You can upload ${POST_IMAGES_PER_DAY} images a day` };

  let out: { data: Buffer; info: OutputInfo };
  try {
    out = await sharp(Buffer.from(await file.arrayBuffer()), { limitInputPixels: 50_000_000 })
      .rotate()
      .resize({ width: POST_IMAGE_MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer({ resolveWithObject: true });
  } catch {
    return { ok: false, error: "That doesn't look like a valid image" };
  }

  const [row] = await db
    .insert(postImages)
    .values({ userId: me.id, data: out.data, contentType: POST_IMAGE_CONTENT_TYPE, width: out.info.width, height: out.info.height })
    .returning({ id: postImages.id });
  return { ok: true, data: { url: postImageUrl(row.id), width: out.info.width, height: out.info.height } };
}

/** A post someone other than its author may react to or report: published, visible, by a public member. */
async function othersPost(id: string, viewerId: string) {
  if (!isId(id)) return null;
  const [row] = await db
    .select({ id: posts.id, userId: posts.userId })
    .from(posts)
    .innerJoin(user, eq(posts.userId, user.id))
    .where(
      and(eq(posts.id, id), isNotNull(posts.publishedAt), eq(posts.hidden, false), eq(user.publicProfile, true), eq(user.banned, false)),
    )
    .limit(1);
  return row && row.userId !== viewerId ? row : null;
}

export async function togglePostKudos(postId: string): Promise<ActionResult<{ given: boolean }>> {
  const me = await requireUser();
  if (!(await othersPost(postId, me.id))) return { ok: false, error: "Post not found" };
  const removed = await db
    .delete(postKudos)
    .where(and(eq(postKudos.postId, postId), eq(postKudos.userId, me.id)))
    .returning({ postId: postKudos.postId });
  if (removed.length) return { ok: true, data: { given: false } };
  await db.insert(postKudos).values({ postId, userId: me.id }).onConflictDoNothing();
  return { ok: true, data: { given: true } };
}

export async function reportPost(postId: string, reason: string): Promise<ActionResult> {
  const me = await requireUser();
  if (!(await othersPost(postId, me.id))) return { ok: false, error: "Post not found" };
  const text = reason.trim().slice(0, 500) || null;
  await db
    .insert(postReports)
    .values({ postId, userId: me.id, reason: text })
    .onConflictDoUpdate({ target: [postReports.postId, postReports.userId], set: { reason: text, createdAt: new Date() } });
  revalidatePath("/admin");
  return { ok: true, data: undefined };
}

// --- Admin (see src/actions/admin.ts for why these write directly after requireAdmin) ---

export async function setPostHidden(postId: string, hidden: boolean): Promise<ActionResult> {
  await requireAdmin();
  if (!isId(postId)) return { ok: false, error: "Post not found" };
  const [row] = await db
    .update(posts)
    .set({ hidden })
    .where(eq(posts.id, postId))
    .returning({ slug: posts.slug, userId: posts.userId });
  if (row) {
    const [author] = await db.select({ username: user.username }).from(user).where(eq(user.id, row.userId)).limit(1);
    revalidatePosts(author?.username, row.slug);
  }
  revalidatePath("/admin");
  return { ok: true, data: undefined };
}

export async function dismissPostReports(postId: string): Promise<ActionResult> {
  await requireAdmin();
  if (!isId(postId)) return { ok: false, error: "Post not found" };
  await db.delete(postReports).where(eq(postReports.postId, postId));
  revalidatePath("/admin");
  return { ok: true, data: undefined };
}
