import { relations } from "drizzle-orm";
import { boolean, customType, index, integer, pgTable, primaryKey, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth";

/** Same bytea declaration as src/db/schema/app.ts (see the note there on driver shapes). */
const bytea = customType<{ data: Buffer; driverData: Buffer | Uint8Array }>({
  dataType() {
    return "bytea";
  },
});

/**
 * A journal post: Markdown written by a member about their learning (src/lib/posts.ts
 * for the limits and slug rules). `publishedAt` null means a draft only its author sees.
 * The slug is fixed on creation so shared links keep working after a title edit.
 */
export const posts = pgTable(
  "posts",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    body: text("body").notNull(),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    // Moderation, same meaning as immersionSessions.hidden: gone for everyone else,
    // still visible to its author (with a note) so it doesn't silently vanish.
    hidden: boolean("hidden").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("posts_user_slug_idx").on(t.userId, t.slug),
    // The journal feed sorts every published post by date.
    index("posts_published_at_idx").on(t.publishedAt.desc()),
  ],
);

/**
 * An image uploaded for a post, re-encoded server-side (uploadPostImage in
 * src/actions/posts.ts) and served by src/app/api/post-image/[id]/route.ts. Owned by the
 * uploader rather than a post, so a new post can embed images before its first save.
 */
export const postImages = pgTable(
  "post_images",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    data: bytea("data").notNull(),
    contentType: text("content_type").notNull(),
    width: integer("width").notNull(),
    height: integer("height").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("post_images_user_created_idx").on(t.userId, t.createdAt)],
);

/** A heart on a post: the same one-row-per-(post, user) shape as sessionKudos. */
export const postKudos = pgTable(
  "post_kudos",
  {
    postId: uuid("post_id")
      .notNull()
      .references(() => posts.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.postId, t.userId] }), index("post_kudos_user_idx").on(t.userId)],
);

/** A member flagging a post for admins. One per (post, reporter); cleared when an admin dismisses them. */
export const postReports = pgTable(
  "post_reports",
  {
    postId: uuid("post_id")
      .notNull()
      .references(() => posts.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    reason: text("reason"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.postId, t.userId] })],
);

export const postsRelations = relations(posts, ({ one }) => ({
  user: one(user, { fields: [posts.userId], references: [user.id] }),
}));
