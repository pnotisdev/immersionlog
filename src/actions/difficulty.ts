"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { mediaDifficultyVotes } from "@/db/schema";
import { requireUser } from "@/lib/session";
import type { ActionResult } from "./types";

/** Upserts the viewer's difficulty vote (1 very easy - 5 very hard) on a media item. */
export async function setDifficultyVote(mediaItemId: string, value: number): Promise<ActionResult<void>> {
  const me = await requireUser();
  if (!Number.isInteger(value) || value < 1 || value > 5) return { ok: false, error: "Invalid rating" };

  await db
    .insert(mediaDifficultyVotes)
    .values({ mediaItemId, userId: me.id, value })
    .onConflictDoUpdate({
      target: [mediaDifficultyVotes.mediaItemId, mediaDifficultyVotes.userId],
      set: { value, updatedAt: new Date() },
    });

  revalidatePath(`/media/${mediaItemId}`);
  return { ok: true, data: undefined };
}

/** Removes the viewer's vote, if any. */
export async function clearDifficultyVote(mediaItemId: string): Promise<ActionResult<void>> {
  const me = await requireUser();
  await db.delete(mediaDifficultyVotes).where(and(eq(mediaDifficultyVotes.mediaItemId, mediaItemId), eq(mediaDifficultyVotes.userId, me.id)));
  revalidatePath(`/media/${mediaItemId}`);
  return { ok: true, data: undefined };
}
