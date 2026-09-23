import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Wordmark } from "./mark";

/** Present on every route (redesign.md §5, §5.2) — was previously only on Discover. */
export function Footer({
  action,
  containerClassName,
  className,
  homeHref = "/",
}: {
  action?: ReactNode;
  containerClassName?: string;
  className?: string;
  /** Where the wordmark links — "/dashboard" inside the signed-in app, "/" everywhere else. */
  homeHref?: string;
}) {
  return (
    <footer className={cn("border-t", className)}>
      <div
        className={cn(
          "mx-auto flex flex-wrap items-center gap-x-5 gap-y-2.5 px-4 py-6 text-xs text-muted-foreground",
          containerClassName ?? "max-w-[1200px]",
        )}
      >
        <Link href={homeHref} className="text-foreground">
          <Wordmark markSize={14} textClassName="text-sm font-semibold" />
        </Link>
        <span>Cover art and metadata from AniList, VNDB, TMDB, Google Books, Jiten.moe and the stores you import from.</span>
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
