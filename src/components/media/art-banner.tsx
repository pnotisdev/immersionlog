import Image from "next/image";
import { cn } from "@/lib/utils";
import { isGoogleBooksImage } from "./poster";

/**
 * A header built from the art someone actually spends time on: the cover of their
 * single most-immersed title, dimmed into the page. Falls back to a quiet gradient
 * for new accounts. One image only — a strip of several covers butted together
 * produces a hard seam at every boundary (redesign.md §8.1).
 */
export function ArtBanner({
  image,
  className,
  height = "h-36 sm:h-48",
}: {
  image?: string | null;
  className?: string;
  height?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-b-2xl bg-secondary", height, className)}>
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          unoptimized={isGoogleBooksImage(image)}
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-secondary" />
      )}

      {/* Two scrims: one to calm the art, one to hand off to the page background. */}
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background from-10% via-background/70 via-55% to-background/5" />
    </div>
  );
}
