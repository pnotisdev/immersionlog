import { ImageResponse } from "next/og";
import { formatDuration, formatNumber } from "@/lib/format";
import { MEDIA_TYPE_META } from "@/lib/media";
import { getPublicTitle, getTitleStats, isAdult, jitenOf, parseTitleParam } from "@/lib/titles";

export const alt = "Title on immersionlog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const RAMP = ["#893A24", "#AE4529", "#D85531", "#E57A5D", "#EBAA98"];

/**
 * Satori's built-in font has no Japanese glyphs, so native titles would render as
 * boxes. Google Fonts serves a subset of just the characters we need (`text=`), as TTF
 * when no browser User-Agent is sent. Any failure falls back to rendering without it.
 */
async function japaneseFont(text: string): Promise<ArrayBuffer | null> {
  if (!/[^\u0000-\u024f]/.test(text)) return null;
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&text=${encodeURIComponent(text)}`,
      { signal: AbortSignal.timeout(4000) },
    ).then((r) => r.text());
    const url = /src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/.exec(css)?.[1];
    if (!url) return null;
    return await fetch(url, { signal: AbortSignal.timeout(4000) }).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

/** Fetch the cover up front so a dead image URL drops the cover instead of the whole card. */
async function inlineImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
    const type = res.headers.get("content-type") ?? "";
    if (!res.ok || !type.startsWith("image/")) return null;
    return `data:${type};base64,${Buffer.from(await res.arrayBuffer()).toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const id = parseTitleParam(slug);
  const item = id ? await getPublicTitle(id) : null;
  const stats = item ? await getTitleStats(item.id) : null;
  const jiten = item ? jitenOf(item) : null;

  const lines = item
    ? [
        jiten?.characterCount ? `${formatNumber(jiten.characterCount)} characters` : null,
        stats && stats.learners > 0 ? `${stats.learners} ${stats.learners === 1 ? "learner" : "learners"} · ${formatDuration(stats.seconds)} logged` : null,
      ].filter((x): x is string => !!x)
    : [];
  const cover = item && item.coverUrl && !isAdult(item) ? await inlineImage(item.coverUrl) : null;
  // Subset to the native title only: if Latin letters were in it, the subset font would
  // also win for those letters everywhere else and mix weights mid-word.
  const jp = item?.titleNative ? await japaneseFont(item.titleNative) : null;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0B0B0F", padding: 72, gap: 56, alignItems: "center" }}>
        {cover && (
          <img src={cover} alt="" width={320} height={460} style={{ width: 320, height: 460, objectFit: "cover", borderRadius: 16 }} />
        )}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
          {item ? (
            // A real flex column, not a Fragment: Satori lays Fragment children out in a row.
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 28, color: "#E0552E" }}>{MEDIA_TYPE_META[item.type].label} in Japanese</div>
              <div style={{ display: "flex", marginTop: 16, fontSize: item.title.length > 40 ? 52 : 68, fontWeight: 700, color: "#EDEDF2", lineHeight: 1.1, letterSpacing: -1 }}>
                {item.title}
              </div>
              {item.titleNative && jp && (
                <div style={{ display: "flex", marginTop: 14, fontSize: 36, color: "#A0A0AE", fontFamily: "NotoJP" }}>{item.titleNative}</div>
              )}
              <div style={{ display: "flex", flexDirection: "column", marginTop: 36, gap: 10 }}>
                {lines.map((l) => (
                  <div key={l} style={{ display: "flex", fontSize: 30, color: "#D6D6DE" }}>
                    {l}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 56 }}>
            <div style={{ display: "flex", gap: 5 }}>
              {RAMP.map((c) => (
                <div key={c} style={{ display: "flex", width: 18, height: 18, borderRadius: 3, background: c }} />
              ))}
            </div>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#EDEDF2" }}>
              immersion<span style={{ color: "#7A7A88" }}>log</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: jp ? [{ name: "NotoJP", data: jp, weight: 700, style: "normal" }] : undefined },
  );
}
