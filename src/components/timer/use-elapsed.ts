"use client";

import { useEffect, useState } from "react";

export interface TimerClock {
  startedAt: string;
  /** Set while paused. */
  pausedAt: string | null;
  /** Total of every finished pause. */
  pausedSeconds: number;
}

/**
 * Seconds actually timed: since `startedAt`, minus pauses, frozen while paused. Ticks
 * once per second while running. Renders 0 during SSR/hydration (server and client
 * would otherwise disagree on "now"), then snaps to the real value on mount.
 */
export function useElapsed(clock: TimerClock | null) {
  const startMs = clock ? new Date(clock.startedAt).getTime() : null;
  const pausedMs = clock?.pausedAt ? new Date(clock.pausedAt).getTime() : null;
  const pausedSeconds = clock?.pausedSeconds ?? 0;
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (startMs == null) return;
    const tick = () => setElapsed(Math.max(0, Math.floor(((pausedMs ?? Date.now()) - startMs) / 1000) - pausedSeconds));
    tick();
    if (pausedMs != null) return;
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [startMs, pausedMs, pausedSeconds]);

  return startMs == null ? 0 : elapsed;
}
