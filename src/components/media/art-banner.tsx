import Image from "next/image";
import type { ReactNode } from "react";
import type { ProfileBanner } from "@/lib/banner";
import { cn } from "@/lib/utils";
import { isGoogleBooksImage } from "./poster";

/**
 * A profile header image, in one of three looks depending on what the art is
 * (see ProfileBanner in src/lib/banner.ts):
 *
 * - wide art (an upload, an AniList banner): shown as is, crisp, edge to edge;
 * - a portrait cover: shown whole and crisp in the middle, letterboxed by a blurred wash
 *   of its own colours. Cropping a 2:3 cover to a 5:1 strip gave a pixelated band of
 *   somebody's shoulder, which read as broken;
 * - nothing yet: a quiet accent gradient.
 *
 * No fade into the page background. That scrim was built for a full-bleed header; inside
 * a framed, rounded box it turned the bottom half into mud. Only a light shade at the
 * bottom remains, so the avatar that overlaps it keeps its edge.
 */
export function ArtBanner({
  banner,
  className,
  children,
  priority = false,
}: {
  banner: ProfileBanner;
  className?: string;
  /** Preload the image — for the one banner at the top of a page, not a grid of them. */
  priority?: boolean;
  /** Overlaid controls, e.g. an "Edit banner" link on your own profile. */
  children?: ReactNode;
}) {
  const { url, wide } = banner;
  // Uploads are already a fixed-size WebP from our own route, and Google Books covers
  // break under the optimizer (see poster.tsx); neither goes through /_next/image.
  const unoptimized = url != null && (url.startsWith("/api/") || isGoogleBooksImage(url));

  return (
    <div className={cn("relative h-36 overflow-hidden rounded-lg bg-surface-2 sm:h-56", className)}>
      {url && wide && (
        <Image
          src={url}
          alt=""
          fill
          sizes="(min-width: 1200px) 1168px, 100vw"
          unoptimized={unoptimized}
          className="object-cover"
          priority={priority}
        />
      )}
      {url && !wide && (
        <>
          <Image
            src={url}
            alt=""
            fill
            sizes="240px"
            unoptimized={unoptimized}
            className="scale-125 object-cover blur-2xl saturate-150"
            priority={priority}
          />
          <div className="absolute inset-0 bg-black/20" />
          {/* The cover itself, crisp, letterboxed in its own colours. */}
          <div className="absolute inset-y-3 left-1/2 aspect-[2/3] -translate-x-1/2 overflow-hidden rounded-md shadow-2xl ring-1 ring-white/15 sm:inset-y-4">
            <Image src={url} alt="" fill sizes="160px" unoptimized={unoptimized} className="object-cover" priority={priority} />
          </div>
        </>
      )}
      {!url && <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-surface-2 to-surface-2" />}

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/35 to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/10 ring-inset" />
      {children}
    </div>
  );
}
