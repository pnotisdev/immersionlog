"use client";

import { useEffect, useState } from "react";
import type { MediaType } from "@/db/schema";
import type { SearchResponse, SearchResult } from "@/lib/sources";

/**
 * Debounced search against /api/search — the one implementation shared by every
 * "search a medium and pick a title" surface (Discover, Add to library, and any
 * picker that can add a title on the fly). Previously three separate copies of the
 * same debounce/fetch/abort effect had drifted into slightly different shapes;
 * this is the single source of truth for it.
 */
export function useMediaSearch(type: MediaType, query: string, enabled = true) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [warning, setWarning] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // A short/disabled query never runs the effect, so state is never reset for it —
  // gate the returned values instead of setState-ing inside the effect for that case
  // (which would just cause an extra render on every keystroke back down to nothing).
  const active = enabled && query.length >= 2;

  useEffect(() => {
    if (!active) return;
    const ctrl = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?type=${type}&q=${encodeURIComponent(query)}`, { signal: ctrl.signal });
        const data = (await res.json()) as SearchResponse;
        setResults(data.results ?? []);
        setWarning(data.warning ?? null);
      } catch (err) {
        if ((err as Error).name !== "AbortError") setWarning("Search failed. Try again.");
      } finally {
        if (!ctrl.signal.aborted) setLoading(false);
      }
    }, 350);
    return () => {
      clearTimeout(timer);
      ctrl.abort();
    };
  }, [type, query, active]);

  return { results: active ? results : [], warning: active ? warning : null, loading: active ? loading : false };
}
