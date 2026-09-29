import { NextResponse, type NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// Optimistic auth redirect based on cookie presence only (no DB hit).
// Real authorization happens in requireUser() on the server.
const PUBLIC_AUTH_PAGES = ["/login", "/signup"];

/**
 * The signed-in app (src/app/(app)/). Only these redirect a visitor without a session;
 * everything else (landing, auth, legal, profiles, public title pages, icons, 404s) is
 * served as is. A real 307 here matters for search engines: without it these pages
 * answered 200 with a client-side meta refresh, which crawlers treat as soft redirects.
 */
const PRIVATE_PREFIXES = [
  "/dashboard",
  "/library",
  "/discover",
  "/community",
  "/ranking",
  "/clubs",
  "/members",
  "/log",
  "/goals",
  "/settings",
  "/stats",
  "/texthooker",
  "/write",
  "/admin",
  "/grammar/learn",
  "/grammar/review",
  "/kanji",
];

/** Private only as themselves: /grammar is the signed-in dashboard, /grammar/n5 and its points are public. */
const PRIVATE_EXACT = ["/grammar"];

export function isPrivate(pathname: string): boolean {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return PRIVATE_EXACT.includes(path) || PRIVATE_PREFIXES.some((p) => path === p || path.startsWith(`${p}/`));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = Boolean(getSessionCookie(request));

  // Signed-in users never see the marketing page or the auth forms.
  if (pathname === "/" || PUBLIC_AUTH_PAGES.includes(pathname)) {
    if (hasSession) return NextResponse.redirect(new URL("/dashboard", request.url));
    return NextResponse.next();
  }

  // A shared app link to a title opens its public page instead of a login wall.
  const media = /^\/media\/([0-9a-f-]{36})\/?$/i.exec(pathname);
  if (media && !hasSession) {
    return NextResponse.redirect(new URL(`/titles/${media[1]}`, request.url));
  }

  if (!hasSession && isPrivate(pathname)) {
    const login = new URL("/login", request.url);
    login.searchParams.set("next", pathname);
    return NextResponse.redirect(login);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Everything except API routes, Next internals, and files with an extension. The
    // backslash is doubled on purpose: in a plain string "\." is just ".", which turned
    // the last alternative into "any two characters" and skipped every real page.
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
