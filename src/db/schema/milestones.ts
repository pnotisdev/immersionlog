import { date, index, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { libraryEntries, unitEnum } from "./app";
import { user } from "./auth";

/**
 * A named moment on a library entry ("Finished Route A", "Volume 12", "Chapter 50"),
 * shown on the media page (src/app/(app)/media/[id]/page.tsx), a profile's "Highlights"
 * (src/app/(profile)/u/[username]/page.tsx) and the Immersion Report
 * (src/app/(profile)/u/[username]/report/[year]/page.tsx).
 */
export const milestones = pgTable(
  "milestones",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    libraryEntryId: uuid("library_entry_id")
      .notNull()
      .references(() => libraryEntries.id, { onDelete: "cascade" }),
    // Denormalized: lets "my milestones" / report-range queries filter directly instead
    // of joining through libraryEntries on every read.
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    note: text("note"),
    occurredAt: date("occurred_at"),
    // Optional link to progress in the entry's native unit ("Volume 12" -> amount 12, unit "volumes").
    progressAmount: integer("progress_amount"),
    progressUnit: unitEnum("progress_unit"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("milestones_entry_idx").on(t.libraryEntryId), index("milestones_user_occurred_idx").on(t.userId, t.occurredAt)],
);
