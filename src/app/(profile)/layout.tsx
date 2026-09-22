import Link from "next/link";
import { getSession } from "@/lib/session";
import { Footer } from "@/components/layout/footer";
import { Wordmark } from "@/components/layout/mark";
import { MobileTabs, Nav } from "@/components/layout/nav";

/**
 * Chrome for /u/[username] — the one part of the app a logged-out visitor can open
 * (see src/app/(app)/layout.tsx's requireUser() for why everything else can't: a
 * profile link is meant to work when dropped in Discord/Reddit/X by someone who has
 * never signed up). getSession() (no redirect) instead of requireUser(), and the real
 * app chrome only appears when there's actually a session to show it for.
 */
export default async function ProfileLayout({ children }: LayoutProps<"/">) {
  const session = await getSession();
  const user = session?.user;
  const navUser = user ? { id: user.id, name: user.name, email: user.email, image: user.image ?? null, username: user.username ?? null } : null;

  return (
    <>
      {navUser ? (
        <Nav user={navUser} />
      ) : (
        <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-[1200px] items-center px-4">
            <Link href="/">
              <Wordmark markSize={18} textClassName="text-lg font-semibold" />
            </Link>
            <div className="ml-auto flex items-center gap-1 sm:gap-2">
              <Link
                href="/login"
                className="rounded-full px-3 py-2.5 text-sm whitespace-nowrap text-muted-foreground hover:text-foreground sm:px-4"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-primary px-3.5 py-2.5 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-opacity hover:opacity-90 sm:px-5"
              >
                Create account
              </Link>
            </div>
          </div>
        </header>
      )}
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 pt-8 pb-10">{children}</main>
      <Footer className={navUser ? "pb-28 md:pb-0" : undefined} homeHref={navUser ? "/dashboard" : "/"} />
      {navUser && <MobileTabs />}
    </>
  );
}
