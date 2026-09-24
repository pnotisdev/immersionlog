import "server-only";
import { getSiteUrl } from "./site";

/*
 * HTML email building blocks. Email clients are not browsers: layout is tables, every
 * style is inline (Gmail drops most <style> rules), and there are no web fonts or
 * remote images, so the logo is the 5x5 heatmap mark drawn with table cells (the same
 * grid as src/components/layout/mark.tsx) and shows up even with images blocked.
 * The one <style> block only adds dark mode for clients that honour it (Apple Mail,
 * iOS); everywhere else the light palette below is what renders.
 *
 * Every function here takes plain text and escapes it; `raw` blocks are the only way
 * to pass HTML through, and they're only ever built from these helpers.
 */

const C = {
  page: "#f4f3f0",
  card: "#ffffff",
  border: "#e7e5e0",
  ink: "#181925",
  text: "#34353f",
  dim: "#7b7c87",
  primary: "#c6491f",
  tint: "#fbeee7",
  tintInk: "#8a3417",
};

// Single quotes only: this goes inside style="…" attributes.
const FONT = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans', 'Noto Sans JP', Helvetica, Arial, sans-serif`;

// Mark colors (fixed brand ramp, see mark.tsx).
const RAMP = ["#893A24", "#AE4529", "#D85531", "#E57A5D", "#EBAA98"];
const EMPTY = "#e2dfd9";
const GRID = [
  [1, 0, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [3, 2, 1, 0, 0],
  [4, 3, 2, 1, 0],
  [5, 4, 3, 2, 1],
];

/** A piece of already-built, already-escaped email HTML. */
export type Html = { __html: string };

export function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

const raw = (html: string): Html => ({ __html: html });

/** Text with **bold** runs, escaped. The only markup body copy gets. */
function inline(s: string): string {
  return escapeHtml(s).replace(/\*\*(.+?)\*\*/g, `<strong class="ink" style="color:${C.ink};font-weight:600;">$1</strong>`);
}

function mark(): string {
  const rows = GRID.map(
    (row) =>
      `<tr>${row
        .map(
          (step) =>
            `<td class="${step === 0 ? "mark-empty" : ""}" width="4" height="4" style="width:4px;height:4px;padding:0;font-size:0;line-height:0;background:${step === 0 ? EMPTY : RAMP[step - 1]};">&nbsp;</td>`,
        )
        .join("")}</tr>`,
  ).join("");
  return `<table role="presentation" cellpadding="0" cellspacing="1" border="0" style="border-collapse:separate;"><tbody>${rows}</tbody></table>`;
}

export function heading(text: string): Html {
  return raw(
    `<h1 class="ink" style="margin:0 0 16px;font-family:${FONT};font-size:22px;line-height:1.3;font-weight:650;letter-spacing:-0.01em;color:${C.ink};">${escapeHtml(text)}</h1>`,
  );
}

export function paragraph(text: string): Html {
  return raw(`<p class="text" style="margin:0 0 16px;font-family:${FONT};font-size:15px;line-height:1.65;color:${C.text};">${inline(text)}</p>`);
}

/** The one call to action. Bulletproof: a padded table cell, so Outlook draws it too. */
export function button(label: string, href: string): Html {
  return raw(`<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 24px;"><tr>
<td bgcolor="${C.primary}" style="border-radius:6px;background:${C.primary};">
<a href="${escapeHtml(href)}" style="display:inline-block;padding:12px 22px;font-family:${FONT};font-size:15px;font-weight:600;line-height:1;color:#ffffff;text-decoration:none;border-radius:6px;">${escapeHtml(label)}</a>
</td></tr></table>`);
}

/** Numbered steps: a small vermillion number, a bold lead-in, then the detail. */
export function steps(items: { title: string; body: string }[]): Html {
  const rows = items
    .map(
      (it, i) => `<tr>
<td valign="top" width="28" style="padding:2px 12px 18px 0;">
<div class="tint" style="width:24px;height:24px;border-radius:6px;background:${C.tint};color:${C.tintInk};font-family:${FONT};font-size:13px;font-weight:700;line-height:24px;text-align:center;">${i + 1}</div>
</td>
<td valign="top" style="padding:0 0 18px;font-family:${FONT};font-size:15px;line-height:1.6;color:${C.text};" class="text">
<strong class="ink" style="color:${C.ink};font-weight:600;">${escapeHtml(it.title)}</strong><br>${inline(it.body)}
</td></tr>`,
    )
    .join("");
  return raw(`<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:4px 0 8px;">${rows}</table>`);
}

/** A few headline numbers side by side (weekly recap). */
export function stats(items: { label: string; value: string }[]): Html {
  const cells = items
    .map(
      (s) => `<td valign="top" style="padding:14px 16px;border:1px solid ${C.border};border-radius:8px;" class="card-inner">
<div class="dim" style="font-family:${FONT};font-size:12px;line-height:1.4;color:${C.dim};text-transform:uppercase;letter-spacing:0.06em;">${escapeHtml(s.label)}</div>
<div class="ink" style="font-family:${FONT};font-size:24px;line-height:1.3;font-weight:650;color:${C.ink};">${escapeHtml(s.value)}</div>
</td>`,
    )
    .join(`<td width="10" style="font-size:0;">&nbsp;</td>`);
  return raw(`<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 20px;"><tr>${cells}</tr></table>`);
}

/** Label/value rows, e.g. top titles with their time. */
export function rows(items: { label: string; value: string }[], title?: string): Html {
  const head = title
    ? `<p class="dim" style="margin:0 0 6px;font-family:${FONT};font-size:12px;color:${C.dim};text-transform:uppercase;letter-spacing:0.06em;">${escapeHtml(title)}</p>`
    : "";
  const body = items
    .map(
      (r) => `<tr>
<td class="text" style="padding:9px 0;border-top:1px solid ${C.border};font-family:${FONT};font-size:15px;line-height:1.4;color:${C.text};">${escapeHtml(r.label)}</td>
<td class="ink" align="right" style="padding:9px 0 9px 12px;border-top:1px solid ${C.border};font-family:${FONT};font-size:15px;line-height:1.4;color:${C.ink};font-weight:600;white-space:nowrap;">${escapeHtml(r.value)}</td>
</tr>`,
    )
    .join("");
  return raw(`${head}<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 20px;">${body}</table>`);
}

/** Small print under the main content, e.g. "this link expires in an hour". */
export function note(text: string): Html {
  return raw(`<p class="dim" style="margin:0 0 12px;font-family:${FONT};font-size:13px;line-height:1.6;color:${C.dim};">${inline(text)}</p>`);
}

/** A raw link on its own line, for clients that mangle buttons. */
export function fallbackLink(href: string): Html {
  return raw(
    `<p class="dim" style="margin:0 0 12px;font-family:${FONT};font-size:13px;line-height:1.6;color:${C.dim};word-break:break-all;">Or open this link: <a href="${escapeHtml(href)}" style="color:${C.primary};">${escapeHtml(href)}</a></p>`,
  );
}

export function signature(name: string, role: string): Html {
  return raw(`<p class="text" style="margin:8px 0 0;font-family:${FONT};font-size:15px;line-height:1.5;color:${C.text};">${escapeHtml(name)}<br><span class="dim" style="font-size:13px;color:${C.dim};">${escapeHtml(role)}</span></p>`);
}

export interface EmailOptions {
  /** Inbox preview line; hidden in the body. */
  preheader: string;
  body: Html[];
  /** Why they got it. Transactional mails say so; notifications add an unsubscribe link. */
  reason: string;
  unsubscribeUrl?: string;
}

export function renderEmail({ preheader, body, reason, unsubscribeUrl }: EmailOptions): string {
  const site = getSiteUrl();
  const footer = [
    escapeHtml(reason),
    unsubscribeUrl ? `<a href="${escapeHtml(unsubscribeUrl)}" style="color:${C.dim};text-decoration:underline;">Unsubscribe</a>` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>immersionlog</title>
<style>
  @media (prefers-color-scheme: dark) {
    .page { background: #0b0b0f !important; }
    .card { background: #15151b !important; border-color: #26262f !important; }
    .card-inner { border-color: #26262f !important; }
    .ink { color: #ededf2 !important; }
    .text { color: #c9c9d3 !important; }
    .dim { color: #8b8b97 !important; }
    .tint { background: #3a1d12 !important; color: #f0a585 !important; }
    .mark-empty { background: #2a2a33 !important; }
  }
  @media (max-width: 600px) {
    .card-pad { padding: 28px 22px !important; }
  }
</style>
</head>
<body class="page" style="margin:0;padding:0;background:${C.page};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">${escapeHtml(preheader)}${"&nbsp;&zwnj;".repeat(40)}</div>
<table role="presentation" class="page" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.page};">
<tr><td align="center" style="padding:32px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">
<tr><td style="padding:0 4px 18px;">
<a href="${escapeHtml(site)}" style="text-decoration:none;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
<td valign="middle" style="padding-right:9px;">${mark()}</td>
<td valign="middle" class="ink" style="font-family:${FONT};font-size:16px;font-weight:650;letter-spacing:-0.01em;color:${C.ink};">immersionlog</td>
</tr></table>
</a>
</td></tr>
<tr><td class="card card-pad" style="background:${C.card};border:1px solid ${C.border};border-radius:10px;padding:36px 36px 28px;">
${body.map((b) => b.__html).join("\n")}
</td></tr>
<tr><td class="dim" style="padding:18px 4px 0;font-family:${FONT};font-size:12px;line-height:1.6;color:${C.dim};">
${footer}<br>
<a href="${escapeHtml(site)}" style="color:${C.dim};text-decoration:none;">${escapeHtml(site.replace(/^https?:\/\//, ""))}</a>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}
