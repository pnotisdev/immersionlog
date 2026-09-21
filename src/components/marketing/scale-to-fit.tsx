"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders `children` at a fixed desktop width, then scales the whole thing down to
 * fit the available space — the same trick real product screenshots rely on, so a
 * two-column dashboard grid still looks like a two-column dashboard grid on a phone
 * instead of collapsing to its mobile layout. Never scales up past 1:1.
 */
export function ScaleToFit({ width, children }: { width: number; children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    const update = () => {
      const s = Math.min(1, outer.clientWidth / width);
      setScale(s);
      setHeight(inner.scrollHeight * s);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(outer);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div ref={outerRef} style={{ height }} className="relative w-full overflow-hidden">
      <div ref={innerRef} style={{ width, transform: `scale(${scale})`, transformOrigin: "top left", willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
