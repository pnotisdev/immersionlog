"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { formatClock } from "@/lib/format";
import { cn } from "@/lib/utils";
import { type TimerClock, useElapsed } from "./use-elapsed";

export interface TimerPillData extends TimerClock {
  what: string;
}

// Our prefix on document.title, so it can be swapped every tick and removed on stop.
const PREFIX = /^(?:▶|❚❚) [\d:]+ · /;

/**
 * A running timer, visible from every page: a pill in the header linking back to the
 * timer, and the time in the tab title so it can be seen from other tabs. Hidden on
 * Home, where the full timer card already is (the tab title still updates there).
 */
export function TimerPill({ timer }: { timer: TimerPillData | null }) {
  const elapsed = useElapsed(timer);
  const pathname = usePathname();
  const paused = timer?.pausedAt != null;

  useEffect(() => {
    if (!timer) return;
    // Next rewrites the title on navigation, so re-apply on every tick (and route change).
    document.title = `${paused ? "❚❚" : "▶"} ${formatClock(elapsed)} · ${document.title.replace(PREFIX, "")}`;
  }, [timer, paused, elapsed, pathname]);

  useEffect(() => {
    if (!timer) return;
    return () => {
      document.title = document.title.replace(PREFIX, "");
    };
  }, [timer]);

  if (!timer || pathname === "/dashboard") return null;
  return (
    <Link
      href="/dashboard"
      title={`${timer.what}${paused ? " (paused)" : ""}`}
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-sm border px-3 font-mono text-sm tabular-nums transition-colors hover:bg-muted",
        paused ? "border-border text-muted-foreground" : "border-primary/50 text-foreground",
      )}
    >
      <span className={cn("size-2 rounded-full", paused ? "bg-muted-foreground" : "animate-pulse bg-primary")} />
      {formatClock(elapsed)}
    </Link>
  );
}
