import type { MediaType } from "@/db/schema";
import { getSiteUrl } from "./site";

/**
 * JSON-LD for search engines. `<` is escaped so a title like "</script>" can't end the
 * tag early (the payload is data we got from third-party sources).
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function absoluteUrl(path: string): string {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

/** schema.org type closest to each medium. */
export const SCHEMA_TYPE: Record<MediaType, string> = {
  anime: "TVSeries",
  series: "TVSeries",
  movie: "Movie",
  manga: "Book",
  light_novel: "Book",
  book: "Book",
  graded_reader: "Book",
  visual_novel: "VideoGame",
  game: "VideoGame",
  podcast: "PodcastSeries",
  youtube: "CreativeWork",
  drama_cd: "CreativeWork",
  news: "CreativeWork",
  other: "CreativeWork",
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}

/** Site-wide identity, on the landing page. */
export function siteJsonLd() {
  const url = getSiteUrl();
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "immersionlog",
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "immersionlog",
      url,
      logo: `${url}/icon`,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "immersionlog",
      url,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Any",
      description:
        "A tracker for Japanese immersion: time anime, manga, visual novels, books, YouTube and podcasts, and see your hours, characters read, streaks and goals.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      inLanguage: "en",
    },
  ];
}
