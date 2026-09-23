import "server-only";
import { getSiteUrl } from "@/lib/site";
import { FETCH_TIMEOUT_MS, ImportError } from "./types";

/**
 * The one way URL importers touch the network. Every URL here is derived from user
 * input, so the importer's fixed host allowlist is the SSRF control: https only, exact
 * hostname match, redirects followed by hand and re-checked hop by hop, a byte cap on
 * the body and a per-host concurrency cap so a burst of users can't hammer a small
 * site. There is intentionally no "fetch any URL" path.
 */

export type ExpectedBody = "html" | "xml" | "json";

export interface SafeFetchOptions {
  /** Exact hostnames this request (and every redirect hop) may reach. */
  allowedHosts: readonly string[];
  accept?: ExpectedBody;
  /** Default: 3 MB for html/xml, 1 MB for json. */
  maxBytes?: number;
  headers?: Record<string, string>;
}

export interface SafeFetchResult {
  text: string;
  /** Where the body actually came from, after redirects. */
  url: URL;
  contentType: string;
}

const MAX_REDIRECTS = 3;
const MAX_PER_HOST = 2;

const ACCEPT_HEADER: Record<ExpectedBody, string> = {
  html: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.5",
  xml: "application/rss+xml,application/atom+xml,application/xml,text/xml;q=0.9,*/*;q=0.5",
  json: "application/json",
};

const CONTENT_TYPE_OK: Record<ExpectedBody, RegExp> = {
  html: /text\/html|application\/xhtml\+xml/i,
  xml: /xml/i,
  json: /json/i,
};

export function userAgent(): string {
  return `immersionlog/1.0 (+${getSiteUrl()}/)`;
}

// --- Per-host semaphore -----------------------------------------------------------

const inFlight = new Map<string, number>();
const waiters = new Map<string, (() => void)[]>();

async function acquire(host: string): Promise<void> {
  const n = inFlight.get(host) ?? 0;
  if (n < MAX_PER_HOST) {
    inFlight.set(host, n + 1);
    return;
  }
  await new Promise<void>((resolve) => {
    const queue = waiters.get(host) ?? [];
    queue.push(resolve);
    waiters.set(host, queue);
  });
  // The releaser handed its slot straight to us; the count is already right.
}

function release(host: string): void {
  const queue = waiters.get(host);
  const next = queue?.shift();
  if (next) {
    next();
    return;
  }
  if (queue && queue.length === 0) waiters.delete(host);
  const n = (inFlight.get(host) ?? 1) - 1;
  if (n <= 0) inFlight.delete(host);
  else inFlight.set(host, n);
}

// --- Fetching ---------------------------------------------------------------------

/** Throws unless `url` is https on one of `allowedHosts`. */
export function assertAllowed(url: URL, allowedHosts: readonly string[]): void {
  if (url.protocol !== "https:") throw new ImportError("blocked_host", `protocol ${url.protocol}`);
  if (url.username || url.password) throw new ImportError("blocked_host", "credentials in url");
  if (url.port && url.port !== "443") throw new ImportError("blocked_host", `port ${url.port}`);
  if (!allowedHosts.includes(url.hostname.toLowerCase())) throw new ImportError("blocked_host", url.hostname);
}

async function readCapped(res: Response, maxBytes: number): Promise<Uint8Array> {
  const declared = Number(res.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > maxBytes) {
    await res.body?.cancel();
    throw new ImportError("too_large", declared);
  }
  if (!res.body) return new Uint8Array();
  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > maxBytes) {
      await reader.cancel();
      throw new ImportError("too_large", total);
    }
    chunks.push(value);
  }
  const out = new Uint8Array(total);
  let offset = 0;
  for (const c of chunks) {
    out.set(c, offset);
    offset += c.byteLength;
  }
  return out;
}

function decode(bytes: Uint8Array, contentType: string): string {
  const charset = /charset=["']?([\w-]+)/i.exec(contentType)?.[1];
  try {
    return new TextDecoder(charset ?? "utf-8").decode(bytes);
  } catch {
    // Unknown label: fall back rather than fail the import.
    return new TextDecoder("utf-8").decode(bytes);
  }
}

export async function safeFetchText(input: string | URL, opts: SafeFetchOptions): Promise<SafeFetchResult> {
  const accept = opts.accept ?? "html";
  const maxBytes = opts.maxBytes ?? (accept === "json" ? 1024 * 1024 : 3 * 1024 * 1024);
  const signal = AbortSignal.timeout(FETCH_TIMEOUT_MS);
  let url = new URL(input);

  try {
    for (let hop = 0; ; hop++) {
      assertAllowed(url, opts.allowedHosts);
      const host = url.hostname.toLowerCase();
      await acquire(host);
      let res: Response;
      let body: Uint8Array | null = null;
      try {
        res = await fetch(url, {
          redirect: "manual",
          signal,
          headers: {
            "User-Agent": userAgent(),
            "Accept-Language": "ja,en;q=0.8",
            Accept: ACCEPT_HEADER[accept],
            ...opts.headers,
          },
        });
        if (res.status >= 200 && res.status < 300) body = await readCapped(res, maxBytes);
        else await res.body?.cancel();
      } finally {
        release(host);
      }

      if (res.status >= 300 && res.status < 400) {
        const location = res.headers.get("location");
        if (!location || hop >= MAX_REDIRECTS) throw new ImportError("upstream_status", res.status);
        // Relative Locations resolve against the current hop; the next loop iteration
        // re-validates the result before anything is sent to it.
        url = new URL(location, url);
        continue;
      }
      if (!body) throw new ImportError(res.status === 404 || res.status === 410 ? "not_found" : "upstream_status", res.status);

      const contentType = res.headers.get("content-type") ?? "";
      if (!CONTENT_TYPE_OK[accept].test(contentType)) throw new ImportError("upstream_type", contentType || "none");
      return { text: decode(body, contentType), url, contentType };
    }
  } catch (err) {
    if (err instanceof ImportError) throw err;
    if (err instanceof Error && (err.name === "TimeoutError" || err.name === "AbortError")) {
      throw new ImportError("timeout", url.hostname);
    }
    throw new ImportError("upstream_status", err instanceof Error ? err.message : String(err));
  }
}

export async function safeFetchJson<T>(input: string | URL, opts: Omit<SafeFetchOptions, "accept">): Promise<T> {
  const { text } = await safeFetchText(input, { ...opts, accept: "json" });
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new ImportError("parse", "invalid json");
  }
}

/** For tests: the semaphore's view of a host. */
export function _inFlight(host: string): number {
  return inFlight.get(host) ?? 0;
}
