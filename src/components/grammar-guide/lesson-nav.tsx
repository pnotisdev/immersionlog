"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PARTS } from "@/lib/grammar-guide";
import { cn } from "@/lib/utils";

/**
 * The course's table of contents, one part open at a time so 60-odd lessons don't fill
 * the screen: the part you're reading is open, the others are a line each. A sticky
 * sidebar from lg up, a collapsible list above the lesson on smaller screens. Client-side
 * to know which lesson is open; it imports only titles, so the lesson text stays on the
 * server.
 */

/** The lesson number each part starts at. */
const STARTS = PARTS.map((_, i) => PARTS.slice(0, i).reduce((sum, p) => sum + p.lessons.length, 0) + 1);

function Parts({ activePart }: { activePart: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(activePart);

  return (
    <div className="grid gap-1 text-sm">
      {PARTS.map((part, p) => {
        const first = STARTS[p];
        const expanded = open === part.id;
        // "Part 3 · Joining ideas" reads as "3" and "Joining ideas" in the list.
        const [label, title] = part.title.split(" · ");
        return (
          <div key={part.id}>
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? "" : part.id)}
              className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left transition-colors hover:bg-muted"
            >
              <span className="w-5 shrink-0 text-right text-meta text-dim tabular-nums">{label.replace("Part ", "")}</span>
              <span className="grow font-medium">{title ?? part.title}</span>
              <span className="text-meta text-dim tabular-nums">{part.lessons.length}</span>
              <ChevronDown className={cn("size-3.5 shrink-0 text-dim transition-transform", expanded && "rotate-180")} aria-hidden />
            </button>
            {expanded && (
              <ol className="mt-0.5 mb-2 ml-[1.625rem] grid gap-0.5 border-l border-border">
                {part.lessons.map((l, i) => {
                  const href = `/grammar-guide/${l.slug}`;
                  const active = pathname === href;
                  return (
                    <li key={l.slug}>
                      <Link
                        href={href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "-ml-px flex gap-2 border-l py-1 pr-2 pl-3 transition-colors",
                          active
                            ? "border-primary font-medium text-foreground"
                            : "border-transparent text-muted-foreground hover:border-foreground hover:text-foreground",
                        )}
                      >
                        <span className="w-5 shrink-0 text-meta text-dim tabular-nums">{first + i}</span>
                        <span>{l.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function LessonNav({ variant }: { variant: "sidebar" | "mobile" }) {
  const pathname = usePathname();
  const current = PARTS.find((p) => p.lessons.some((l) => pathname === `/grammar-guide/${l.slug}`));
  // Keyed so that moving to a lesson in another part opens that part.
  const parts = <Parts key={current?.id ?? "none"} activePart={current?.id ?? PARTS[0].id} />;

  // The course index already lists every lesson, so it needs no second list beside it.
  if (pathname === "/grammar-guide") return null;

  if (variant === "sidebar") {
    return (
      <nav aria-label="Grammar course" className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1 pb-6">
        <Link href="/grammar-guide" className={cn("mb-2 block px-2 text-sm font-semibold", pathname === "/grammar-guide" && "text-primary")}>
          Grammar course
        </Link>
        {parts}
      </nav>
    );
  }

  const lesson = current?.lessons.find((l) => pathname === `/grammar-guide/${l.slug}`);
  return (
    <details className="group rounded-lg border border-border bg-surface">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm [&::-webkit-details-marker]:hidden">
        <span className="min-w-0">
          <span className="text-dim">Grammar course · </span>
          <span className="font-medium">{lesson?.title ?? "All lessons"}</span>
        </span>
        <ChevronDown className="size-4 shrink-0 text-dim transition-transform group-open:rotate-180" aria-hidden />
      </summary>
      <div className="border-t border-border px-2 py-2">{parts}</div>
    </details>
  );
}
