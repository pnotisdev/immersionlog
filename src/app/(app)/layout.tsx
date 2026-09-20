import { MobileTabs, Nav } from "@/components/layout/nav";
import { requireUser } from "@/lib/session";

export default async function AppLayout({ children }: LayoutProps<"/">) {
  const user = await requireUser();
  const navUser = { id: user.id, name: user.name, email: user.email, image: user.image ?? null, username: user.username ?? null };
  return (
    <>
      <Nav user={navUser} />
      {/* Bottom padding clears the mobile tab bar. */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-8 pb-28 sm:pt-10 md:pb-12">{children}</main>
      <MobileTabs />
    </>
  );
}
