"use client";

import { useState } from "react";
import type { MediaType } from "@/db/schema";
import { MEDIA_TYPE_META } from "@/lib/media";
import { Panel } from "@/components/layout/panel";
import type { LibraryPick } from "@/components/library/types";
import { SessionDialog } from "./session-dialog";

// What people actually log first, in rough order of how often.
const FIRST_TYPES: MediaType[] = ["anime", "youtube", "manga", "visual_novel", "light_novel", "book", "podcast", "game"];

/**
 * Shown on Home until the first session exists. Most sessions are logged after the
 * fact, so the first step is "add what you already did today", one tap per medium,
 * rather than a wall of zeroed stats. The timer card below covers "about to start".
 */
export function FirstLog({ entries, tz }: { entries: LibraryPick[]; tz: string }) {
  const [type, setType] = useState<MediaType | null>(null);

  return (
    <Panel
      title="Log your first session"
      description="Anything in Japanese counts: an episode, a YouTube video, a few pages, a podcast on the way to work."
    >
      <p className="mb-3 text-sm">What did you do today?</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {FIRST_TYPES.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className="rounded-md border px-3 py-2.5 text-left text-sm font-medium transition-colors hover:border-primary/60 hover:bg-accent/40"
          >
            {MEDIA_TYPE_META[t].label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-meta text-dim">
        Haven&apos;t started yet? Use the timer below and stop it when you&apos;re done.
      </p>

      <SessionDialog
        open={type !== null}
        onOpenChange={(open) => !open && setType(null)}
        description="Search for the title, or paste a link. Rough times are fine."
        entries={entries}
        tz={tz}
        formKey={type ?? undefined}
        initial={type ? { mediaType: type } : undefined}
        onDone={() => setType(null)}
      />
    </Panel>
  );
}
