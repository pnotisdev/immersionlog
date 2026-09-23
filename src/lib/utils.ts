import { createCn } from "cn/config";

/**
 * clsx + tailwind-merge, taught this app's type scale (globals.css `--text-*`). Without
 * it the merger has never heard of `text-micro`/`text-h1`/…, files them as colors, and
 * silently drops one of `text-micro text-muted-foreground` — so a label could lose its
 * size (or its color) depending on class order.
 */
export const cn = createCn({
  extend: { classGroups: { "font-size": [{ text: ["display", "h1", "h2", "h3", "body", "meta", "micro"] }] } },
});
