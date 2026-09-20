import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A standalone empty section: icon chip, message, optional action. For a page-level
 * gap (an empty feed, leaderboard, library) — not for a tight inline list, where a
 * plain line of muted text stays proportionate to the content around it.
 */
export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: {
  icon?: LucideIcon;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-3 rounded-xl border border-dashed p-10 text-center", className)}>
      {Icon && (
        <div className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <Icon className="size-5" />
        </div>
      )}
      <div className="max-w-sm">
        <p className="text-sm font-medium">{title}</p>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  );
}
