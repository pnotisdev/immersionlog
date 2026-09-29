import type { MetadataRoute } from "next";
import { LAST_UPDATED as PRIVACY_UPDATED } from "@/app/(legal)/privacy/page";
import { LAST_UPDATED as TERMS_UPDATED } from "@/app/(legal)/terms/page";
import { GUIDE_CHAPTERS, GUIDE_UPDATED, guidePath } from "@/lib/guide";
import { getSiteUrl } from "@/lib/site";
import { listPublicTitles, titlePath } from "@/lib/titles";

// Regenerated at most hourly; crawlers don't need it fresher than that.
export const revalidate = 3600;

/**
 * Indexable pages only. The signed-in app is redirected for anonymous visitors and
 * noindexed; profiles and reports are shareable but noindexed (see their metadata);
 * /login and the password-reset pages are noindex utility pages. Titles are the ones
 * listPublicTitles considers worth a search result (public activity or Jiten stats).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();
  const titles = await listPublicTitles({ limit: 45_000 });
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...GUIDE_CHAPTERS.map((c) => ({
      url: `${base}${guidePath(c.slug)}`,
      lastModified: new Date(GUIDE_UPDATED),
      changeFrequency: "monthly" as const,
      priority: c.slug ? 0.8 : 0.9,
    })),
    ...["/tools", "/tools/kana", "/tools/conjugation", "/tools/reading-speed"].map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/titles`, lastModified: titles[0]?.updatedAt ?? new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/signup`, changeFrequency: "monthly", priority: 0.6 },
    ...titles.map((t) => ({
      url: `${base}${titlePath(t)}`,
      lastModified: t.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    { url: `${base}/terms`, lastModified: TERMS_UPDATED, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/privacy`, lastModified: PRIVACY_UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];
}
