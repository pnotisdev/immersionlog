"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { PARTS } from "@/lib/grammar-guide";
import { cn } from "@/lib/utils";

/**
 * The course's table of contents: every lesson by part. A sticky sidebar from lg up, a
 * collapsible list above the lesson on smaller screens. Client-side to know which
 * lesson is open; it imports only titles, so the lesson text stays on the server.
 */
export function LessonNav({ variant }: { variant: "sidebar" | "mobile" }) {
  const pathname = usePathname();
  let n = 0;

  const list = (
    <div className="grid gap-5 text-sm">
      {PARTS.map((part) => (
        <div key={part.id}>
          <p className="section-label mb-1.5 px-2">{part.title}</p>
          <ol className="grid gap-0.5">
            {part.lessons.map((l) => {
              n++;
              const href = `/grammar-guide/${l.slug}`;
              const active = pathname === href;
              return (
                <li key={l.slug}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex gap-2.5 rounded-sm px-2 py-1.5 transition-colors",
                      active ? "bg-accent-tint font-medium text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <span className="w-5 shrink-0 text-right tabular-nums text-dim">{n}</span>
                    <span>{l.title}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );

  if (variant === "sidebar") {
    return (
      <nav aria-label="Grammar course" className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
        <Link href="/grammar-guide" className={cn("mb-3 block px-2 text-sm font-semibold", pathname === "/grammar-guide" && "text-primary")}>
          Grammar course
        </Link>
        {list}
      </nav>
    );
  }

  return (
    <details className="group rounded-lg border border-border bg-surface">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium">
        Grammar course: all lessons
        <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden />
      </summary>
      <div className="border-t border-border px-2 py-3">{list}</div>
    </details>
  );
}
