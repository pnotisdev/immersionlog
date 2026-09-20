"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SessionDialog } from "@/components/sessions/session-dialog";
import type { LibraryPick } from "./types";
import { MediaCard, type MediaCardData } from "./media-card";

/**
 * A library tile with a hover "log" button, so a repeat session against something
 * already in your library doesn't need a trip to its page first. Only rendered for
 * your own library — see the `quickLog` prop on LibraryBrowser.
 */
export function MediaCardQuickLog({ item, entries, tz }: { item: MediaCardData; entries: LibraryPick[]; tz: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group/card relative">
      <MediaCard item={item} />
      <button
        type="button"
        aria-label={`Log ${item.title}`}
        title={`Log ${item.title}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
        className="absolute right-1.5 bottom-2.5 flex size-6 items-center justify-center rounded-full bg-black/70 text-white opacity-0 shadow transition-opacity group-hover/card:opacity-100 focus-visible:opacity-100 sm:size-7"
      >
        <Plus className="size-3.5 sm:size-4" />
      </button>

      <SessionDialog
        open={open}
        onOpenChange={setOpen}
        description={item.title}
        formKey={item.mediaItemId}
        entries={entries}
        tz={tz}
        initial={{ mediaItemId: item.mediaItemId, mediaType: item.type }}
        onDone={() => setOpen(false)}
      />
    </div>
  );
}
