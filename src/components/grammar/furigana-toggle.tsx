"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Chip, useStoredSettings } from "@/components/tools/drill-parts";

const isPref = (v: unknown): v is { on: boolean } => typeof (v as { on?: unknown } | null)?.on === "boolean";

/**
 * Furigana on or off for server-rendered sentences (point pages). The sentences always
 * carry their <rt>; this hides them with CSS, keeping the line height so nothing jumps.
 * Remembered per browser, so it works for visitors without an account.
 */
export function FuriganaToggle({ children, className }: { children: ReactNode; className?: string }) {
  const [pref, setPref] = useStoredSettings("grammar-furigana", { on: true }, isPref);
  return (
    <div className={cn(!pref.on && "[&_rt]:invisible", className)}>
      <div className="mb-3 flex justify-end">
        <Chip on={pref.on} onClick={() => setPref({ on: !pref.on })} className="px-2.5 py-1 text-xs">
          Furigana
        </Chip>
      </div>
      {children}
    </div>
  );
}
