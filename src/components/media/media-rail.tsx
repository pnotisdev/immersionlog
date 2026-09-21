import Link from "next/link";
import type { ReactNode } from "react";
import type { MediaType } from "@/db/schema";
import { cn } from "@/lib/utils";
import { Poster } from "./poster";
import { Rail } from "./scroll-rail";

export interface RailItem {
  mediaItemId: string;
  title: string;
  coverUrl: string | null;
  type: MediaType;
  meta?: string;
}

/** Section heading + horizontally scrollable poster rail for items already in the database. */
export function MediaRail({
  items,
  title,
  label,
  action,
  className,
}: {
  items: RailItem[];
  title: string;
  /** Accessible label for the scroller, if it should differ from the visible title. */
  label?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <Rail title={title} label={label} action={action} className={className}>
      {items.map((item) => (
        <Link key={item.mediaItemId} href={`/media/${item.mediaItemId}`} className="group w-[132px] shrink-0">
          <Poster src={item.coverUrl} title={item.title} type={item.type} sizes="132px" />
          <p className="mt-1.5 line-clamp-2 h-10 text-h3 leading-snug font-semibold group-hover:text-primary">
            {item.title}
          </p>
          {item.meta && <p className="truncate text-meta text-dim">{item.meta}</p>}
        </Link>
      ))}
    </Rail>
  );
}

/** Same tiles, laid out as a wrapping grid — for pages where everything should be visible. */
export function MediaGrid({ items, className }: { items: RailItem[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-3 gap-x-3 gap-y-4 sm:grid-cols-4 lg:grid-cols-6", className)}>
      {items.map((item) => (
        <Link key={item.mediaItemId} href={`/media/${item.mediaItemId}`} className="group">
          <Poster src={item.coverUrl} title={item.title} type={item.type} sizes="(max-width: 640px) 33vw, 160px" />
          <p className="mt-1.5 line-clamp-2 h-10 text-h3 leading-snug font-semibold group-hover:text-primary">
            {item.title}
          </p>
          {item.meta && <p className="truncate text-meta text-dim">{item.meta}</p>}
        </Link>
      ))}
    </div>
  );
}
