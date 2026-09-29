import Link from "next/link";
import { Languages } from "lucide-react";
import { pluralize } from "@/lib/format";
import { Button } from "@/components/ui/button";

/**
 * The dashboard's nudge when grammar reviews are waiting. One slim row, and nothing at
 * all when none are due: the dashboard is about immersion, and this is a side dish.
 */
export function GrammarDueCard({ due }: { due: number }) {
  if (due <= 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 sm:px-5">
      <Languages className="size-4 text-primary" aria-hidden />
      <p className="text-sm">
        <span className="font-semibold tabular-nums">{pluralize(due, "grammar review")}</span>{" "}
        <span className="text-muted-foreground">due</span>
      </p>
      <Button size="sm" className="ml-auto" nativeButton={false} render={<Link href="/grammar/review" />}>
        Review
      </Button>
    </div>
  );
}
