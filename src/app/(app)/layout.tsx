import { Footer } from "@/components/layout/footer";
import { MobileTabs, Nav } from "@/components/layout/nav";
import { requireUser } from "@/lib/session";
import { AdultCoversPref } from "@/components/media/adult-covers-pref";

export default async function AppLayout({ children }: LayoutProps<"/">) {
  const user = await requireUser();
  const navUser = { id: user.id, name: user.name, email: user.email, image: user.image ?? null, username: user.username ?? null };
  const showAdult = user.showAdultCovers === true;
  return (
    <>
      <AdultCoversPref show={showAdult} />
      <Nav user={navUser} />
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
