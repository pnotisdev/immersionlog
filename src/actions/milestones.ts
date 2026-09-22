"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { libraryEntries, milestones, type Unit } from "@/db/schema";
import { requireUser } from "@/lib/session";
import type { ActionResult } from "./types";

const TITLE_MAX_LENGTH = 100;
const NOTE_MAX_LENGTH = 500;

export interface MilestoneInput {
  libraryEntryId: string;
  title: string;
  note?: string | null;
  /** "YYYY-MM-DD", or null/undefined to leave unset. */
  occurredAt?: string | null;
  progressAmount?: number | null;
  progressUnit?: Unit | null;
}

/** Loads the entry and checks it belongs to `userId` — every mutation below needs this. */
async function ownedEntry(libraryEntryId: string, userId: string) {
  return db.query.libraryEntries.findFirst({
    where: and(eq(libraryEntries.id, libraryEntryId), eq(libraryEntries.userId, userId)),
  });
}

/** revalidatePath with "layout" so the profile's nested /library and /report/[year] pick up the change too. */
function revalidateOwner(username: string | null | undefined) {
  if (username) revalidatePath(`/u/${username}`, "layout");
}

export async function createMilestone(input: MilestoneInput): Promise<ActionResult<{ id: string }>> {
  const me = await requireUser();
  const title = input.title.trim().slice(0, TITLE_MAX_LENGTH);
  if (!title) return { ok: false, error: "Title is required" };

  const entry = await ownedEntry(input.libraryEntryId, me.id);
  if (!entry) return { ok: false, error: "That entry doesn't exist" };

  const [row] = await db
    .insert(milestones)
    .values({
      libraryEntryId: entry.id,
      userId: me.id,
      title,
      note: input.note?.trim().slice(0, NOTE_MAX_LENGTH) || null,
      occurredAt: input.occurredAt || null,
      progressAmount: input.progressAmount ?? null,
      progressUnit: input.progressAmount != null ? (input.progressUnit ?? null) : null,
    })
    .returning({ id: milestones.id });

  revalidatePath(`/media/${entry.mediaItemId}`);
  revalidateOwner(me.username);
  return { ok: true, data: { id: row.id } };
}

export async function updateMilestone(id: string, input: MilestoneInput): Promise<ActionResult<void>> {
  const me = await requireUser();
  const title = input.title.trim().slice(0, TITLE_MAX_LENGTH);
  if (!title) return { ok: false, error: "Title is required" };

  const entry = await ownedEntry(input.libraryEntryId, me.id);
  if (!entry) return { ok: false, error: "That entry doesn't exist" };

  const [existing] = await db.select({ id: milestones.id }).from(milestones).where(and(eq(milestones.id, id), eq(milestones.userId, me.id)));
  if (!existing) return { ok: false, error: "Milestone not found" };

  await db
    .update(milestones)
    .set({
      title,
      note: input.note?.trim().slice(0, NOTE_MAX_LENGTH) || null,
      occurredAt: input.occurredAt || null,
      progressAmount: input.progressAmount ?? null,
      progressUnit: input.progressAmount != null ? (input.progressUnit ?? null) : null,
    })
    .where(eq(milestones.id, id));

  revalidatePath(`/media/${entry.mediaItemId}`);
  revalidateOwner(me.username);
  return { ok: true, data: undefined };
}

export async function deleteMilestone(id: string, mediaItemId: string): Promise<ActionResult<void>> {
  const me = await requireUser();
  const [deleted] = await db
    .delete(milestones)
    .where(and(eq(milestones.id, id), eq(milestones.userId, me.id)))
    .returning({ id: milestones.id });
  if (!deleted) return { ok: false, error: "Milestone not found" };

  revalidatePath(`/media/${mediaItemId}`);
  revalidateOwner(me.username);
  return { ok: true, data: undefined };
}
