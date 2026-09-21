"use client";

import { useState } from "react";
import { Loader2, Search } from "lucide-react";
import { MEDIA_TYPE_META } from "@/lib/media";
import type { MediaType } from "@/db/schema";
import { useMediaSearch } from "@/lib/use-media-search";
import { cn } from "@/lib/utils";
import { DiscoverTile } from "./discover-tile";

/** Media types that can actually be searched, in the order people reach for them. */
const TYPES: MediaType[] = ["anime", "manga", "visual_novel", "light_novel", "book", "series", "movie"];

/**
 * Search is the reason this page exists, so it sits in the page head next to the
 * title, not below a 60px headline (redesign.md §5.2). Medium selection is tabs —
 * it switches what's shown, which is what a tab means, not chips (additive filters).
 */
export function DiscoverSearch() {
  const [type, setType] = useState<MediaType>("anime");
  const [q, setQ] = useState("");
  const query = q.trim();
  const { results: visible, warning: visibleWarning, loading } = useMediaSearch(type, query);

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-h1 font-semibold text-foreground">Discover</h1>
        <div className="relative w-full sm:w-[420px]">
          {loading ? (
            <Loader2 className="absolute top-1/2 left-3 size-4 -translate-y-1/2 animate-spin text-muted-foreground" />
          ) : (
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          )}
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={`Search ${MEDIA_TYPE_META[type].label.toLowerCase()}…`}
            aria-label="Search titles"
            className="h-9 w-full rounded-sm border bg-card pr-4 pl-9 text-sm outline-none transition-colors focus-visible:border-ring"
          />
        </div>
      </div>

      <div className="no-scrollbar scroll-fade-x -mx-4 flex gap-5 overflow-x-auto border-b px-4 sm:mx-0 sm:px-0">
        {TYPES.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={cn(
              "-mb-px shrink-0 border-b-2 py-2.5 text-sm transition-colors",
              t === type ? "border-primary font-medium text-foreground" : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {MEDIA_TYPE_META[t].label}
          </button>
        ))}
      </div>

      {visibleWarning && <p className="text-xs text-muted-foreground">{visibleWarning}</p>}

      {visible.length > 0 && (
        <div className="grid grid-cols-3 gap-x-3 gap-y-4 sm:grid-cols-5 lg:grid-cols-7">
          {visible.map((r) => (
            <DiscoverTile key={`${r.source}:${r.sourceId}`} item={r} className="w-full" />
          ))}
        </div>
      )}
      {query.length >= 2 && !loading && visible.length === 0 && !visibleWarning && (
        <p className="text-sm text-muted-foreground">No results for “{query}”.</p>
      )}
    </div>
  );
}
