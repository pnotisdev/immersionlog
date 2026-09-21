import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * One line, plus at most one button — no dashed box, no circled icon, no two-sentence
 * explanation (redesign.md §4.10). Those were doing the work of an illustration and
 * failing; a single factual line is what a shipped product does.
 */
export function EmptyState({ title, action, className }: { title: ReactNode; action?: ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3 py-12", className)}>
      <p className="text-meta text-dim">{title}</p>
      {action}
    </div>
  );
}
