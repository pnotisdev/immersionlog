import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

/**
 * Crawling is blocked only where it's pure waste: the signed-in app (anonymous
 * requests get a 307 to /login from src/proxy.ts), token-only pages, and /api. Not
 * blocked, on purpose:
 * - /u/… profiles and reports are noindexed in their metadata instead. A robots.txt
 *   block would stop crawlers from seeing that noindex, and X/Twitter's card fetcher
 *   honours robots.txt, so shared profile links would lose their preview image.
 * - /media/… sends anonymous visitors (and crawlers) to the public /titles/… page.
 *
 * Keep the list in sync with PRIVATE_PREFIXES in src/proxy.ts.
 */
const DISALLOWED_APP_ROUTES = [
  "/dashboard",
  "/library",
  "/discover",
  "/community",
  "/ranking",
  "/clubs",
  "/members",
  "/log",
  "/goals",
  "/settings",
  "/stats",
  "/texthooker",
  "/admin",
];

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [...DISALLOWED_APP_ROUTES, "/forgot-password", "/reset-password", "/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
