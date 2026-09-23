import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't advertise the framework in responses.
  poweredByHeader: false,
  // PGlite ships WASM and postgres.js opens sockets — keep both out of the server bundle.
  serverExternalPackages: ["@electric-sql/pglite", "postgres"],
  experimental: {
    serverActions: {
      // Next's default is 1MB, which silently capped avatar uploads (advertised as 2MB,
      // src/lib/avatar.ts) and would reject most banner photos (4MB, src/lib/banner.ts).
      // Both actions still enforce their own, smaller caps before decoding anything;
      // this leaves headroom over the larger of them for multipart overhead.
      bodySizeLimit: "5mb",
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Safe to set unconditionally: nginx only ever terminates this app over HTTPS
          // (see the port-3001 firewall rule this pairs with — that path never reaches here).
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          // No legitimate reason for this app to be framed by another origin.
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  images: {
    // Restricted to the CDNs this app actually pulls media from (see src/lib/sources/*)
    // plus DiceBear (generated avatars, see scripts/seed-demo.ts). A wildcard hostname here
    // would let anyone proxy arbitrary third-party images through /_next/image.
    remotePatterns: [
      { protocol: "https", hostname: "s4.anilist.co" },
      { protocol: "https", hostname: "t.vndb.org" },
      { protocol: "https", hostname: "image.tmdb.org" },
      { protocol: "https", hostname: "books.google.com" },
      { protocol: "https", hostname: "api.dicebear.com" },
      // Paste-a-link importers (src/lib/sources/*.ts). Each host was checked against real
      // cover URLs on 2026-09-23; importers drop covers on any other host.
      { protocol: "https", hostname: "cdn.jiten.moe" },
      { protocol: "https", hostname: "images.igdb.com" }, // Backloggd
      { protocol: "https", hostname: "m.media-amazon.com" }, // Bookmeter (most covers)
      { protocol: "https", hostname: "img.bookmeter.com" }, // Bookmeter (user-registered books)
      { protocol: "https", hostname: "rimg.bookwalker.jp" },
      { protocol: "https", hostname: "c.bookwalker.jp" },
      { protocol: "https", hostname: "cmoa.akamaized.net" },
      { protocol: "https", hostname: "www.cmoa.jp" },
      { protocol: "https", hostname: "cdn-ak-img.shonenjumpplus.com" },
    ],
  },
};

export default nextConfig;
