import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The app's one content surface: a hairline box on --surface, the same one the landing
 * page draws its modules in (the ranking table, the heatmap), so the product and the
 * page that sells it are visibly one thing. A title row, an optional action on the
 * right, and a body.
 *
 * `flush` drops the body's side padding for lists whose rows run edge to edge with
 * their own dividers (sessions, feed items); their rows carry the padding instead.
 */
export function Panel({
  title,
  description,
  action,
  children,
  className,
  bodyClassName,
  flush = false,
  id,
}: {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  flush?: boolean;
  id?: string;
}) {
  const hasHeader = title != null || action != null;
  return (
    <section id={id} className={cn("min-w-0 rounded-lg border border-border bg-surface", className)}>
      {hasHeader && (
        <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 px-4 pt-4 sm:px-5">
          <div className="min-w-0">
            {title != null && <h2 className="text-h3 font-semibold text-foreground">{title}</h2>}
            {description != null && <p className="mt-0.5 text-meta text-dim">{description}</p>}
          </div>
          {action != null && <div className="flex shrink-0 items-center gap-2">{action}</div>}
        </header>
      )}
      <div
        className={cn(
          flush ? "pt-1.5 pb-1.5" : "px-4 pb-4 sm:px-5 sm:pb-5",
          !flush && (hasHeader ? "pt-3.5" : "pt-4 sm:pt-5"),
          bodyClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** The quiet "All stats" / "Full log" link a panel header carries on its right. */
export function PanelLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-meta text-dim transition-colors hover:text-foreground">
      {children}
    </Link>
  );
}
