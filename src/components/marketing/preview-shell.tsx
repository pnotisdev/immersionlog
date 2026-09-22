import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/layout/mark";
import { Avatar } from "@/components/ranking/avatar";
import { ScaleToFit } from "./scale-to-fit";

// Just wide enough to clear the app's own 1200px container (so it isn't flush against
// the frame edge) and to keep lg: breakpoints (1024px) active for the real two-column
// grids. Kept close to the frame's typical rendered width on purpose — the whole thing
// is a CSS transform: scale() (see ScaleToFit), so a wider canvas means more shrink,
// which softens text, icons and the chart's hairlines. Minimize the shrink instead.
const CANVAS_WIDTH = 1240;
const NAV_LINKS = ["Home", "Library", "Discover", "Community", "Stats"] as const;

/**
 * Wraps a static product preview: the page rendered at a fixed desktop width and
 * scaled to fit (see ScaleToFit) so it always reads as a real screenshot, never a
 * squeezed mobile layout. No browser-window chrome and no rounded corners — a plain
 * hairline box, the same one the rest of the landing page is drawn with, not a
 * floating mockup. `dark` is forced regardless of the visitor's site theme — this is
 * what the product looks like, not a themed embed.
 */
export function PreviewFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark overflow-hidden border border-border/70 bg-surface">
      <ScaleToFit width={CANVAS_WIDTH}>
        {/* inert: this is a static screenshot, not a live view of the app — the real
            components underneath still carry real Links and server-action buttons
            (delete session, add to library…), so the whole subtree must be
            unclickable and unfocusable, not just visually inert. */}
        {/* font-sans: the landing page around this is set entirely in mono, but a preview
            is a screenshot of the app and has to look like the app. */}
        <div inert className="bg-background font-sans text-foreground select-none">
          {children}
        </div>
      </ScaleToFit>
    </div>
  );
}

/** Static replica of the real app nav (src/components/layout/nav.tsx) — no auth, no client state. */
export function PreviewNav({ active }: { active: (typeof NAV_LINKS)[number] }) {
  return (
    <header className="border-b border-border/70 bg-background/85">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center gap-2 px-4">
        <span className="shrink-0">
          <Wordmark markSize={17} textClassName="text-base font-semibold" />
        </span>
        <nav className="ml-5 flex items-center">
          {NAV_LINKS.map((l) => (
            <span
              key={l}
              className={cn("rounded-full px-3.5 py-2 text-sm", l === active ? "font-medium text-foreground" : "text-muted-foreground")}
            >
              {l}
            </span>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          {/* Exact classes from the real LogSessionEntry (src/components/sessions/log-session-entry.tsx)
              — rounded-sm like every other button in the app, not a pill. */}
          <span className="inline-flex h-9 items-center gap-1.5 rounded-sm bg-primary px-4 text-sm font-medium text-primary-foreground">
            <Plus className="size-4" /> Log
          </span>
          <Avatar name="Mika Tanaka" image={null} size="sm" />
        </div>
      </div>
    </header>
  );
}

/** Matches the real (app)/layout.tsx main content container exactly (mx-auto max-w-[1200px] px-4 pt-8 pb-10). */
export function PreviewMain({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto w-full max-w-[1200px] px-4 pt-8 pb-10">{children}</main>;
}
