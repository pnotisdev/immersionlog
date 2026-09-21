"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Section heading plus a horizontally-scrolling row, as one unit: swipe on touch, drag
 * or the header's arrow buttons with a mouse, arrow keys when focused.
 *
 * The arrows live in the header, next to the title — never floating over the artwork.
 * Circular chevrons overlaid on a half-cut poster were one of the strongest "template"
 * tells on the site (redesign.md §8.3); they only ever render once there is somewhere
 * to scroll to, and a drag is swallowed before it can turn into a click on a poster.
 */
export function Rail({
  title,
  action,
  label = title,
  children,
  className,
  /** Extra padding so the first/last tile isn't flush with the screen edge on phones. */
  edgeToEdge = true,
}: {
  title: string;
  action?: ReactNode;
  /** Accessible label for the scroller, if it should differ from the visible title. */
  label?: string;
  children: ReactNode;
  className?: string;
  edgeToEdge?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    for (const child of el.children) ro.observe(child);
    return () => {
      el.removeEventListener("scroll", sync);
      ro.disconnect();
    };
  }, [sync]);

  function page(direction: -1 | 1) {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.round(el.clientWidth * 0.85), behavior: "smooth" });
  }

  // Mouse drag. Touch keeps the browser's own momentum scrolling, which feels better.
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = ref.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (!drag.current.moved && Math.abs(dx) < 4) return;
    if (!drag.current.moved) {
      drag.current.moved = true;
      setDragging(true);
    }
    el.scrollLeft = drag.current.startLeft - dx;
  }

  function endDrag() {
    if (!drag.current.active) return;
    drag.current.active = false;
    setDragging(false);
  }

  // A drag that ends over a poster must not open it.
  function onClickCapture(e: React.MouseEvent) {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  }

  const scrollable = !atStart || !atEnd;
  // Fewer than 3 items: a left-aligned row, not a scroller with arrows that have
  // nothing to scroll to (redesign.md §7).
  const isScroller = Children.count(children) >= 3;

  return (
    <section className={className}>
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h2 className="section-title">{title}</h2>
        <div className="flex shrink-0 items-center gap-3">
          {action}
          {isScroller && scrollable && (
            <div className="flex items-center gap-0.5">
              <ArrowButton side="left" onClick={() => page(-1)} disabled={atStart} />
              <ArrowButton side="right" onClick={() => page(1)} disabled={atEnd} />
            </div>
          )}
        </div>
      </div>

      {!isScroller ? (
        <div className="flex flex-wrap gap-5">{children}</div>
      ) : (
      <div className="relative">
        <div
          ref={ref}
          role="group"
          aria-label={label}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
          className={cn(
            "no-scrollbar flex snap-x gap-5 overflow-x-auto pb-1 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 [&>*]:snap-start",
            edgeToEdge && "-mx-4 px-4 sm:mx-0 sm:px-0",
            dragging ? "cursor-grabbing snap-none select-none" : "snap-mandatory",
          )}
        >
          {children}
        </div>

        {/* Edge hints: the content keeps going. */}
        <Fade side="left" visible={!atStart} />
        <Fade side="right" visible={!atEnd} />
      </div>
      )}
    </section>
  );
}

/** Masks the poster area only — never the title/meta text below it — so a truncated
 * row reads as "more content", not a rendering bug (redesign.md §4.6). */
function Fade({ side, visible }: { side: "left" | "right"; visible: boolean }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-0 z-10 hidden h-[198px] w-8 transition-opacity duration-200 sm:block",
        side === "left" ? "left-0 bg-gradient-to-r from-background" : "right-0 bg-gradient-to-l from-background",
        visible ? "opacity-100" : "opacity-0",
      )}
    />
  );
}

function ArrowButton({
  side,
  onClick,
  disabled,
}: {
  side: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      tabIndex={-1}
      aria-label={side === "left" ? "Scroll left" : "Scroll right"}
      className="flex size-7 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
    >
      <Icon className="size-4" />
    </button>
  );
}
