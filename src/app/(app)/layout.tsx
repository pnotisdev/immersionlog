import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { MobileTabs, Nav } from "@/components/layout/nav";
import { MEDIA_TYPE_META } from "@/lib/media";
import { getActiveTimer } from "@/lib/queries";
import { requireUser } from "@/lib/session";
import { AdultCoversPref } from "@/components/media/adult-covers-pref";

// Signed-in app pages: redirected for anonymous visitors (src/proxy.ts); never indexed.
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function AppLayout({ children }: LayoutProps<"/">) {
  const user = await requireUser();
  const navUser = { id: user.id, name: user.name, email: user.email, image: user.image ?? null, username: user.username ?? null };
  const showAdult = user.showAdultCovers === true;
  const t = await getActiveTimer(user.id);
  const timer = t
    ? {
        startedAt: t.startedAt.toISOString(),
        pausedAt: t.pausedAt?.toISOString() ?? null,
        pausedSeconds: t.pausedSeconds,
        what: t.mediaItem?.title ?? t.label ?? MEDIA_TYPE_META[t.mediaType].label,
      }
    : null;
  return (
    <>
      <AdultCoversPref show={showAdult} />
      <Nav user={navUser} timer={timer} />
      {/* The attribute lifts the adult-cover blur on first paint (globals.css). */}
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 pt-8 pb-10" data-adult-covers={showAdult ? "show" : undefined}>
        {children}
      </main>
      {/* Bottom padding clears the mobile tab bar. */}
      <Footer className="pb-28 md:pb-0" homeHref="/dashboard" />
      <MobileTabs />
    </>
  );
}
