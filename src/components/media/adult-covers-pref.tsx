"use client";

import { useEffect } from "react";

/**
 * Mirrors the viewer's "Show adult covers" setting onto <html data-adult-covers>, so
 * the blur rule in globals.css also lifts inside dialogs and menus (they render in
 * portals outside the layout wrapper that carries the same attribute for first paint).
 */
export function AdultCoversPref({ show }: { show: boolean }) {
  useEffect(() => {
    const root = document.documentElement;
    if (show) root.dataset.adultCovers = "show";
    else delete root.dataset.adultCovers;
    return () => {
      delete root.dataset.adultCovers;
    };
  }, [show]);
  return null;
}
