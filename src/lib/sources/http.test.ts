import { afterEach, describe, expect, it, vi } from "vitest";
import { _inFlight, safeFetchText } from "./http";

const html = (body = "<html></html>", headers: Record<string, string> = {}) =>
  new Response(body, { status: 200, headers: { "content-type": "text/html; charset=utf-8", ...headers } });
const redirect = (location: string, status = 302) => new Response(null, { status, headers: { location } });

afterEach(() => vi.unstubAllGlobals());

function stubFetch(handler: (url: string) => Response | Promise<Response>) {
  const calls: string[] = [];
  vi.stubGlobal(
    "fetch",
    vi.fn(async (input: URL | string, init?: RequestInit) => {
      expect(init?.redirect).toBe("manual");
      calls.push(String(input));
      return handler(String(input));
    }),
  );
  return calls;
}

describe("safeFetchText", () => {
  it("follows redirects that stay on the allowlist, re-checking every hop", async () => {
    const calls = stubFetch((u) => (u.includes("www.") ? redirect("https://example.jp/final") : html("ok")));
    const res = await safeFetchText("https://www.example.jp/start", { allowedHosts: ["www.example.jp", "example.jp"] });
    expect(res.text).toBe("ok");
    expect(res.url.toString()).toBe("https://example.jp/final");
    expect(calls).toEqual(["https://www.example.jp/start", "https://example.jp/final"]);
  });

  it("refuses a redirect to a host that isn't allowed, without requesting it", async () => {
    const calls = stubFetch(() => redirect("https://169.254.169.254/latest/meta-data/"));
    await expect(safeFetchText("https://example.jp/", { allowedHosts: ["example.jp"] })).rejects.toMatchObject({ code: "blocked_host" });
    expect(calls).toHaveLength(1);
  });

  it("refuses a redirect down to http", async () => {
    stubFetch(() => redirect("http://example.jp/"));
    await expect(safeFetchText("https://example.jp/", { allowedHosts: ["example.jp"] })).rejects.toMatchObject({ code: "blocked_host" });
  });

  it("resolves relative Locations against the current hop", async () => {
    const calls = stubFetch((u) => (u.endsWith("/a") ? redirect("/b") : html("b")));
    await safeFetchText("https://example.jp/a", { allowedHosts: ["example.jp"] });
    expect(calls[1]).toBe("https://example.jp/b");
  });

  it("gives up after 3 redirects", async () => {
    const calls = stubFetch(() => redirect("https://example.jp/loop"));
    await expect(safeFetchText("https://example.jp/", { allowedHosts: ["example.jp"] })).rejects.toMatchObject({ code: "upstream_status" });
    expect(calls).toHaveLength(4);
  });

  it("rejects non-https and unlisted hosts up front", async () => {
    const calls = stubFetch(() => html());
    await expect(safeFetchText("http://example.jp/", { allowedHosts: ["example.jp"] })).rejects.toMatchObject({ code: "blocked_host" });
    await expect(safeFetchText("https://other.jp/", { allowedHosts: ["example.jp"] })).rejects.toMatchObject({ code: "blocked_host" });
    expect(calls).toHaveLength(0);
  });

  it("caps the body size, declared or streamed", async () => {
    stubFetch(() => html("x".repeat(2048)));
    await expect(safeFetchText("https://example.jp/", { allowedHosts: ["example.jp"], maxBytes: 1024 })).rejects.toMatchObject({ code: "too_large" });
    stubFetch(() => html("x", { "content-length": "999999999" }));
    await expect(safeFetchText("https://example.jp/", { allowedHosts: ["example.jp"] })).rejects.toMatchObject({ code: "too_large" });
  });

  it("checks the content type and maps statuses", async () => {
    stubFetch(() => new Response("{}", { status: 200, headers: { "content-type": "application/json" } }));
    await expect(safeFetchText("https://example.jp/", { allowedHosts: ["example.jp"] })).rejects.toMatchObject({ code: "upstream_type" });
    stubFetch(() => new Response("gone", { status: 404 }));
    await expect(safeFetchText("https://example.jp/", { allowedHosts: ["example.jp"] })).rejects.toMatchObject({ code: "not_found" });
    stubFetch(() => new Response("no", { status: 403 }));
    await expect(safeFetchText("https://example.jp/", { allowedHosts: ["example.jp"] })).rejects.toMatchObject({ code: "upstream_status", detail: 403 });
  });

  it("sends a truthful UA and Accept-Language", async () => {
    let headers: Record<string, string> = {};
    vi.stubGlobal(
      "fetch",
      vi.fn(async (_u: URL, init?: RequestInit) => {
        headers = init?.headers as Record<string, string>;
        return html();
      }),
    );
    await safeFetchText("https://example.jp/", { allowedHosts: ["example.jp"] });
    expect(headers["User-Agent"]).toMatch(/^immersionlog\/1\.0 \(\+https?:\/\//);
    expect(headers["User-Agent"]).not.toMatch(/Googlebot/i);
    expect(headers["Accept-Language"]).toBe("ja,en;q=0.8");
  });

  it("allows at most 2 concurrent requests per host", async () => {
    let peak = 0;
    const release: (() => void)[] = [];
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => {
        peak = Math.max(peak, _inFlight("slow.jp"));
        await new Promise<void>((r) => release.push(r));
        return html();
      }),
    );
    const all = Promise.all([1, 2, 3, 4].map(() => safeFetchText("https://slow.jp/", { allowedHosts: ["slow.jp"] })));
    for (let i = 0; i < 4; i++) {
      await vi.waitFor(() => expect(release.length).toBeGreaterThan(i));
      expect(_inFlight("slow.jp")).toBeLessThanOrEqual(2);
      release[i]();
    }
    await all;
    expect(peak).toBeLessThanOrEqual(2);
    expect(_inFlight("slow.jp")).toBe(0);
  });
});
