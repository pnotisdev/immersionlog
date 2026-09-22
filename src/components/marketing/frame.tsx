import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Page structure for the landing page: one 1200px column with a hairline rule between
 * bands. Nothing more than that — no crosshairs, no plotted grid, no monospace index
 * labels. Those read as a costume rather than as structure, and they were carrying
 * weight the content should be carrying.
 *
 * The band rules are real elements rather than a `border-t`, because a border cannot be
 * scaled: they get drawn left to right as you reach them (landing-motion.tsx).
 */

/** The full-bleed hairline that separates two bands. */
export function Rule() {
  return <div data-rule aria-hidden className="h-px w-full origin-left bg-border" />;
}

/** The page column. */
export function Frame({
  className,
  children,
  flush = false,
}: {
  className?: string;
  children: ReactNode;
  /** Content runs edge to edge, with no gutter of its own. */
  flush?: boolean;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[1200px]">
      <div className={cn(!flush && "px-5 sm:px-8 lg:px-12", className)}>{children}</div>
    </div>
  );
}

/** One horizontal band of the page: full-bleed top rule, framed content. */
export function Band({
  id,
  className,
  innerClassName,
  children,
  rule = true,
}: {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  rule?: boolean;
}) {
  return (
    // scroll-mt clears the sticky header when the in-page nav jumps to a band.
    <section id={id} className={cn("relative scroll-mt-16", className)}>
      {rule && <Rule />}
      <Frame className={cn("py-16 sm:py-20 lg:py-24", innerClassName)}>{children}</Frame>
    </section>
  );
}
