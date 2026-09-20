import { cn } from "@/lib/utils";

/** Initials fallback avatar; uses the image when the user has one. */
export function Avatar({ name, image, size = "md", className }: { name: string; image: string | null; size?: "sm" | "md" | "lg" | "xl"; className?: string }) {
  const dim = { sm: "size-8 text-xs", md: "size-10 text-sm", lg: "size-16 text-xl", xl: "size-24 text-3xl" }[size];
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
  return image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={image} alt="" className={cn("shrink-0 rounded-full object-cover", dim, className)} />
  ) : (
    <div className={cn("flex shrink-0 items-center justify-center rounded-full bg-muted font-medium text-muted-foreground", dim, className)} aria-hidden>
      {initials || "?"}
    </div>
  );
}
