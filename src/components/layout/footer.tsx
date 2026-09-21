import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Present on every route (redesign.md §5, §5.2) — was previously only on Discover. */
export function Footer({ action, containerClassName, className }: { action?: ReactNode; containerClassName?: string; className?: string }) {
  return (
    <footer className={cn("border-t", className)}>
      <div
        className={cn(
          "mx-auto flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-6 text-xs text-muted-foreground",
          containerClassName ?? "max-w-[1200px]",
        )}
      >
        <span>
          immersion<span className="text-dim">log</span>
        </span>
        <span>Cover art and metadata from AniList, VNDB, TMDB and Google Books.</span>
        <Link href="/terms" className="hover:text-foreground">
          Terms
        </Link>
        <Link href="/privacy" className="hover:text-foreground">
          Privacy
        </Link>
        {action && <div className="ml-auto">{action}</div>}
      </div>
    </footer>
  );
}
