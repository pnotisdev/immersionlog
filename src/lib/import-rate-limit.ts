import "server-only";
import { createRateLimiter } from "@/lib/rate-limit";

// Paste-a-link imports scrape third-party HTML, which costs the upstream site (and us)
// far more than an API search, so the cap is much lower than /api/search's 20/10s.
// Per user id, per process (see src/lib/rate-limit.ts).
export const importRateLimit = createRateLimiter({ limit: 10, windowMs: 60_000 });

// The Jiten link picker searches and drills into sub-decks through Jiten's JSON API:
// cheaper than scraping, and a picker session is several calls in a row.
export const jitenRateLimit = createRateLimiter({ limit: 30, windowMs: 60_000 });
