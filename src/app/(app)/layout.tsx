import { Footer } from "@/components/layout/footer";
import { MobileTabs, Nav } from "@/components/layout/nav";
import { requireUser } from "@/lib/session";

export default async function AppLayout({ children }: LayoutProps<"/">) {
  const user = await requireUser();
  const navUser = { id: user.id, name: user.name, email: user.email, image: user.image ?? null, username: user.username ?? null };
  return (
    <>
      <Nav user={navUser} />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 pt-8 pb-10">{children}</main>
      {/* Bottom padding clears the mobile tab bar. */}
      <Footer className="pb-28 md:pb-0" homeHref="/dashboard" />
      <MobileTabs />
    </>
  );
}
