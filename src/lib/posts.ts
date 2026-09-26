/**
 * Journal post rules shared by the editor (client), the actions and the pages, so this
 * file must stay environment-agnostic (no `server-only`).
 */

export const MAX_POST_TITLE = 120;
export const MAX_POST_BODY = 40_000;
/** Rejected before any decoding; under next.config serverActions.bodySizeLimit (5mb). */
export const MAX_POST_IMAGE_UPLOAD_BYTES = 4 * 1024 * 1024;
/** Stored images are scaled down to fit this width (never up). */
export const POST_IMAGE_MAX_WIDTH = 1600;
export const POST_IMAGE_CONTENT_TYPE = "image/webp";
/** Per user per rolling 24 hours: images uploaded, posts created. */
export const POST_IMAGES_PER_DAY = 30;
export const POSTS_PER_DAY = 5;
/**
 * Logged immersion needed before image uploads unlock. Text posts are open to everyone;
 * images are what spam accounts come for, and an hour of logging is cheap for a real member.
 */
export const IMAGE_UPLOAD_MIN_SECONDS = 60 * 60;

export function postImageUrl(id: string): string {
  return `/api/post-image/${id}`;
}

/**
 * The only image sources a post may render: images uploaded here. Anything else (a
 * hotlinked image would tell a third party every reader's IP) renders as a plain link.
 */
const POST_IMAGE_SRC = /^\/api\/post-image\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export function isPostImageSrc(src: string | undefined | null): src is string {
  return !!src && POST_IMAGE_SRC.test(src);
}

export function postPath(username: string, slug: string): string {
  return `/u/${username}/posts/${slug}`;
}

/**
 * Pure: a URL slug from a title. ASCII words only; a title with none (日本語だけ) gets
 * an empty string and the caller falls back to a random one.
 */
export function slugifyTitle(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
    .replace(/-+$/, "");
}

/** Pure: Markdown reduced to plain text, for excerpts and meta descriptions. */
export function markdownToText(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    // Raw HTML never renders (PostBody skips it), so it shouldn't show in excerpts either.
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<\/?[a-z][^>]*>/gi, " ")
    // Table delimiter rows and horizontal rules, then the pipes between cells.
    .replace(/^\s*\|?[\s:|-]*-{3,}[\s:|-]*\|?\s*$/gm, " ")
    .replace(/\s*\|\s*/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/^\s{0,3}(#{1,6}|>|[-*+]|\d+\.)\s+/gm, "")
    .replace(/[*_~]{1,3}([^*_~]+)[*_~]{1,3}/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

export function postExcerpt(md: string, max = 220): string {
  const text = markdownToText(md);
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const space = cut.lastIndexOf(" ");
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).trimEnd()}…`;
}

/** The first uploaded image in a post, for its card and link preview. */
export function firstPostImage(md: string): string | null {
  for (const m of md.matchAll(/!\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g)) {
    if (isPostImageSrc(m[1])) return m[1];
  }
  return null;
}

/**
 * Minutes to read. Japanese has no spaces, so words are counted for Latin text and
 * characters (at a learner's ~250/min, not a native's) for everything else.
 */
export function readingMinutes(md: string): number {
  const text = markdownToText(md);
  const latinWords = text.match(/[A-Za-z0-9'’-]+/g)?.length ?? 0;
  const cjk = text.match(/[぀-ヿ㐀-鿿ｦ-ﾟ]/g)?.length ?? 0;
  return Math.max(1, Math.round(latinWords / 220 + cjk / 250));
}
