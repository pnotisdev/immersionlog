"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PreviewFrame } from "./preview-shell";

const TABS = [
  { key: "community", label: "Community" },
  { key: "dashboard", label: "Dashboard" },
  { key: "stats", label: "Stats" },
  { key: "library", label: "Library" },
  { key: "discover", label: "Discover" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

/**
 * Tab switcher over the product previews. The previews themselves are Server
 * Components (they fetch real cover art) rendered by the caller and handed in as
 * props — this component only ever receives their finished output, never their code
 * (see server-and-client-boundary.md: passing rendered elements as props keeps data
 * fetching on the server while state lives here). Same pill-tab look as TabLinks'
 * "pill" variant (src/components/layout/tab-links.tsx) — this just swaps hrefs for
 * client-side state since it isn't navigating anywhere. Community opens first: the
 * social surfaces are the point, not an afterthought after the solo-tracking tabs.
 */
export function ProductShowcase({
  community,
  dashboard,
  stats,
  library,
  discover,
}: {
  community: ReactNode;
  dashboard: ReactNode;
  stats: ReactNode;
  library: ReactNode;
  discover: ReactNode;
}) {
  const [active, setActive] = useState<TabKey>("community");
  const panels: Record<TabKey, ReactNode> = { community, dashboard, stats, library, discover };

  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(t.key)}
            aria-pressed={active === t.key}
            className={cn(
              "rounded-sm border px-3 py-1 text-xs transition-colors",
              active === t.key
                ? "border-primary bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <PreviewFrame>{panels[active]}</PreviewFrame>
      </div>
    </div>
  );
}
