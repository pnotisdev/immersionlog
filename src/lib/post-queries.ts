import "server-only";
import { and, count, desc, eq, inArray, isNotNull, lt, lte, or, sql, type SQL } from "drizzle-orm";
import { db } from "@/db";
import { immersionSessions, postKudos, postReports, posts, user } from "@/db/schema";
import { getFollowingIds } from "./social-queries";
import { firstPostImage, postExcerpt, readingMinutes } from "./posts";

export interface PostCard {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string | null;
  minutes: number;
  publishedAt: Date | null;
  updatedAt: Date;
  hidden: boolean;
  author: { id: string; username: string; name: string; image: string | null };
  kudos: number;
  kudosByViewer: boolean;
}

export interface PostPage {
  items: PostCard[];
  /** ISO publishedAt to pass back as `before`; null when there's nothing older. */
  nextCursor: string | null;
}

const authorColumns = {
  authorId: user.id,
  username: sql<string>`${user.username}`,
  name: user.name,
  image: user.image,
};

/**
 * Who else may see a post: published, not hidden, by a public, unbanned member. The
 * author always sees their own (hidden ones included, so they know).
 */
function visibleTo(viewerId: string): SQL {
  return or(
    eq(posts.userId, viewerId),
    and(isNotNull(posts.publishedAt), eq(posts.hidden, false), eq(user.publicProfile, true), eq(user.banned, false)),
  )!;
}

/** Published posts, newest first: everyone's, the viewer's follows', or one author's. */
export async function listPosts(
  viewerId: string,
  {
    scope = "global",
    authorId,
    limit = 20,
    before,
  }: { scope?: "global" | "following"; authorId?: string; limit?: number; before?: string } = {},
): Promise<PostPage> {
  let who: SQL | undefined;
  if (authorId) who = eq(posts.userId, authorId);
  else if (scope === "following") who = inArray(posts.userId, [...(await getFollowingIds(viewerId)), viewerId]);

  const rows = await db
    .select({ post: posts, ...authorColumns })
    .from(posts)
    .innerJoin(user, eq(posts.userId, user.id))
    .where(and(isNotNull(posts.publishedAt), visibleTo(viewerId), who, before ? lt(posts.publishedAt, new Date(before)) : undefined))
    .orderBy(desc(posts.publishedAt))
    .limit(limit + 1);

  const page = rows.slice(0, limit);
  const items = await toCards(viewerId, page);
  return { items, nextCursor: rows.length > limit ? page[page.length - 1].post.publishedAt!.toISOString() : null };
}

/** An author's drafts, for their own posts page. */
export async function listDrafts(userId: string): Promise<PostCard[]> {
  const rows = await db
    .select({ post: posts, ...authorColumns })
    .from(posts)
    .innerJoin(user, eq(posts.userId, user.id))
    .where(and(eq(posts.userId, userId), sql`${posts.publishedAt} is null`))
    .orderBy(desc(posts.updatedAt));
  return toCards(userId, rows);
}

export async function countPublishedPosts(authorId: string): Promise<number> {
  const [row] = await db
    .select({ n: count() })
    .from(posts)
    .where(and(eq(posts.userId, authorId), isNotNull(posts.publishedAt), eq(posts.hidden, false)));
  return row?.n ?? 0;
}

/** One post by its author and slug, if the viewer may see it (drafts only to their author). */
export async function getPost(authorId: string, slug: string, viewerId: string) {
  const [row] = await db
    .select({ post: posts, ...authorColumns })
    .from(posts)
    .innerJoin(user, eq(posts.userId, user.id))
    .where(and(eq(posts.userId, authorId), eq(posts.slug, slug), visibleTo(viewerId)))
    .limit(1);
  if (!row) return null;
  const [card] = await toCards(viewerId, [row]);
  return { ...card, body: row.post.body };
}

/** A post for its author's editor. */
export async function getOwnPost(id: string, userId: string) {
  const [row] = await db
    .select()
    .from(posts)
    .where(and(eq(posts.id, id), eq(posts.userId, userId)))
    .limit(1);
  return row ?? null;
}

/** Admin-only: reported posts first (most reports), then the newest published ones. */
export async function adminListPosts(limit = 40) {
  const reports = db
    .select({ postId: postReports.postId, n: count().as("n"), reasons: sql<string[]>`array_remove(array_agg(${postReports.reason}), null)`.as("reasons") })
    .from(postReports)
    .groupBy(postReports.postId)
    .as("r");
  return db
    .select({
      id: posts.id,
      title: posts.title,
      slug: posts.slug,
      hidden: posts.hidden,
      publishedAt: posts.publishedAt,
      username: sql<string>`${user.username}`,
      userName: user.name,
      reports: sql<number>`coalesce(${reports.n}, 0)::int`.mapWith(Number),
      reasons: sql<string[]>`coalesce(${reports.reasons}, '{}')`,
    })
    .from(posts)
    .innerJoin(user, eq(posts.userId, user.id))
    .leftJoin(reports, eq(reports.postId, posts.id))
    .where(isNotNull(posts.publishedAt))
    .orderBy(sql`coalesce(${reports.n}, 0) desc`, desc(posts.publishedAt))
    .limit(limit);
}

export type AdminPostRow = Awaited<ReturnType<typeof adminListPosts>>[number];

type Row = { post: typeof posts.$inferSelect; authorId: string; username: string; name: string; image: string | null };

async function toCards(viewerId: string, rows: Row[]): Promise<PostCard[]> {
  const ids = rows.map((r) => r.post.id);
  const [counts, mine] = await Promise.all([
    ids.length
      ? db
          .select({ postId: postKudos.postId, n: count() })
          .from(postKudos)
          .where(inArray(postKudos.postId, ids))
          .groupBy(postKudos.postId)
      : [],
    ids.length && viewerId
      ? db
          .select({ postId: postKudos.postId })
          .from(postKudos)
          .where(and(eq(postKudos.userId, viewerId), inArray(postKudos.postId, ids)))
      : [],
  ]);
  const countMap = new Map(counts.map((c) => [c.postId, c.n]));
  const mineSet = new Set(mine.map((m) => m.postId));
  return rows.map(({ post, authorId, username, name, image }) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: postExcerpt(post.body),
    image: firstPostImage(post.body),
    minutes: readingMinutes(post.body),
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    hidden: post.hidden,
    author: { id: authorId, username, name, image },
    kudos: countMap.get(post.id) ?? 0,
    kudosByViewer: mineSet.has(post.id),
  }));
}

/** Everything an author had logged by a moment: "written at 412 hours in". */
export async function immersedBefore(userId: string, at: Date): Promise<number> {
  const [row] = await db
    .select({ seconds: sql<number>`coalesce(sum(${immersionSessions.durationSeconds}), 0)::int`.mapWith(Number) })
    .from(immersionSessions)
    .where(and(eq(immersionSessions.userId, userId), lte(immersionSessions.startedAt, at)));
  return row?.seconds ?? 0;
}
