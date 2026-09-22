import { index, pgTable, primaryKey, smallint, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { mediaItems } from "./app";
import { user } from "./auth";

/**
 * One user's "how hard is this" vote on a media item, 1 (very easy) - 5 (very hard).
 * Same composite-PK vote shape as follows/sessionKudos (src/db/schema/social.ts) — one
 * row per (item, user), upserted in place rather than accumulating a history.
 */
export const mediaDifficultyVotes = pgTable(
  "media_difficulty_votes",
  {
    mediaItemId: uuid("media_item_id")
      .notNull()
      .references(() => mediaItems.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    value: smallint("value").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    primaryKey({ columns: [t.mediaItemId, t.userId] }),
    index("media_difficulty_votes_media_idx").on(t.mediaItemId),
  ],
);
