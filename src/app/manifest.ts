import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "immersionlog",
    short_name: "immersionlog",
    description: "Track every hour of Japanese you consume: anime, manga, visual novels, books, podcasts and more.",
    start_url: "/dashboard",
    display: "standalone",
    background_color: "#0B0B0F",
    // Matches the app's accent (--primary in src/app/globals.css).
    theme_color: "#E0552E",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}
