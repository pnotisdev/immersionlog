"use client";

import { useState, type ReactNode } from "react";
import type { MediaType } from "@/db/schema";
import { formatDuration } from "@/lib/format";
import { Poster } from "@/components/media/poster";
import { Rail } from "@/components/media/scroll-rail";
import type { LibraryPick } from "@/components/library/types";
import { SessionDialog } from "./session-dialog";

export interface QuickLogItem {
  mediaItemId: string;
  title: string;
  titleNative: string | null;
  coverUrl: string | null;
  type: MediaType;
  /** Pre-formatted on the server ("3h ago") so SSR and hydration agree. */
  lastLabel: string;
  seconds: number;
}

/**
 * "Continue": 144px cards, one click opens a pre-filled session form.
 * Caller only renders this once there's at least one item.
 */
export function QuickLogGrid({
  items,
  entries,
  tz,
  action,
}: {
  items: QuickLogItem[];
  entries: LibraryPick[];
  tz: string;
  action?: ReactNode;
}) {
  const [active, setActive] = useState<QuickLogItem | null>(null);

  return (
    <>
      <Rail title="Continue" label="Continue" action={action}>
        {items.map((it) => (
          <button
            key={it.mediaItemId}
            type="button"
            onClick={() => setActive(it)}
            className="group block w-[144px] shrink-0 rounded-md text-left outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            title={`Log ${it.title}`}
          >
            <Poster src={it.coverUrl} title={it.title} type={it.type} sizes="144px" />
            <p className="mt-1.5 line-clamp-2 h-10 text-h3 leading-snug font-semibold group-hover:text-primary">{it.title}</p>
            <p className="truncate text-meta text-dim">
              {formatDuration(it.seconds)} · {it.lastLabel}
            </p>
          </button>
        ))}
      </Rail>

      <SessionDialog
        open={active !== null}
        onOpenChange={(o) => !o && setActive(null)}
        description={active?.title}
        formKey={active?.mediaItemId}
        entries={entries}
        tz={tz}
        initial={active ? { mediaItemId: active.mediaItemId, mediaType: active.type } : undefined}
        onDone={() => setActive(null)}
      />
    </>
  );
}
