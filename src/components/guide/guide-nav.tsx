"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { GUIDE_CHAPTERS, guidePath } from "@/lib/guide";
import { cn } from "@/lib/utils";

/**
 * The guide's table of contents: every chapter, with the current one's sections listed
 * under it. A sticky sidebar from lg up; a collapsible list above the chapter on smaller
 * screens. Client-side only to know which chapter is open.
 */
export function GuideNav({ variant }: { variant: "sidebar" | "mobile" }) {
  const pathname = usePathname();
  const current = GUIDE_CHAPTERS.find((c) => guidePath(c.slug) === pathname) ?? GUIDE_CHAPTERS[0];

  const list = (
    <ol className="grid gap-0.5 text-sm">
      {GUIDE_CHAPTERS.map((c, i) => {
        const active = c === current;
        return (
          <li key={c.slug}>
            <Link
              href={guidePath(c.slug)}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex gap-2.5 rounded-sm px-2 py-1.5 transition-colors",
                active ? "bg-accent-tint font-medium text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <span className="w-4 shrink-0 text-right tabular-nums text-dim">{i === 0 ? "·" : i}</span>
              <span>{c.nav}</span>
            </Link>
            {active && variant === "sidebar" && c.sections.length > 0 && (
              <ol className="my-1 ml-[1.625rem] grid gap-0.5 border-l border-border">
                {c.sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l border-transparent py-0.5 pl-3 text-[0.8125rem] text-muted-foreground hover:border-foreground hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            )}
          </li>
        );
      })}
    </ol>
  );

  if (variant === "mobile") {
    return (
      <details className="group rounded-lg border border-border bg-surface lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm [&::-webkit-details-marker]:hidden">
          <span>
            <span className="text-dim">Learning guide · </span>
            <span className="font-medium">{current.nav}</span>
          </span>
          <ChevronDown className="size-4 text-dim transition-transform group-open:rotate-180" />
        </summary>
        <div className="border-t border-border px-2 py-2">{list}</div>
      </details>
    );
  }

  return (
    <nav aria-label="Learning guide" className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-6">
      <p className="section-label mb-3 px-2">Learning guide</p>
      {list}
    </nav>
  );
}
