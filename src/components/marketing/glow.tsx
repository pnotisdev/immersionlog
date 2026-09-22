import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * The grainy vermillion light from the Photoshop mockup: drawn around whatever box this
 * is given (it fills its positioned parent), with film grain over it. Used twice on the
 * landing page, behind the hero screenshot and rising from under the footer lockup.
 *
 * Two layers, and neither may be wrapped in anything that starts a stacking context:
 * the grain blends with the page underneath it (see .glow-grain in globals.css), and a
 * stacking context around it would leave it blending with nothing. Both sit at z-10,
 * so the light falls over the headline and the cover art the way it does in the
 * mockup; whatever it lights from behind needs z-20 or more.
 */
export function Glow({ className, delay }: { className?: string; delay?: string }) {
  return (
    <div
      aria-hidden
      // Fades in with the hero screenshot after the same delay, so the light does not
      // hang around an empty box before there is anything in it.
      data-glow-enter={delay === undefined ? undefined : ""}
      style={delay === undefined ? undefined : ({ "--d": delay } as CSSProperties)}
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <div className="glow-light absolute inset-0 z-10" />
      <div className="glow-grain" />
    </div>
  );
}
