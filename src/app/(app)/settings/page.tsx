import { eq } from "drizzle-orm";
import { db } from "@/db";
import { user as userTable } from "@/db/schema";
import { autoBanner, getBannerChoice, listBannerOptions, resolveBanner } from "@/lib/banner-queries";
import { getTopItems } from "@/lib/queries";
import { requireUser } from "@/lib/session";
import { BannerField } from "@/components/auth/banner-field";
import { CsvExportButtons, DeleteAccountDialog, ExportDataButton } from "@/components/auth/account-actions";
import { SettingsForm } from "@/components/auth/settings-form";
import { PageHeader, SectionHeader } from "@/components/layout/page-header";

export const metadata = { title: "Settings" };

export default async function SettingsPage() {
  const user = await requireUser();
  // profileLinks (and, defensively, bio) aren't part of better-auth's session shape —
  // only additionalFields are — so they're read straight from the row.
  const [row, bannerChoice, bannerOptions, top] = await Promise.all([
    db.query.user.findFirst({
      where: eq(userTable.id, user.id),
      columns: { bio: true, profileLinks: true },
    }),
    getBannerChoice(user.id),
    listBannerOptions(user.id),
    getTopItems(user.id, new Date(0), new Date(), 5),
  ]);
  return (
    <div>
      <PageHeader title="Settings" />

      {/* scroll-mt: the profile's "Edit banner" button links here past the sticky nav. */}
      <section id="banner" className="mb-10 max-w-2xl scroll-mt-24">
        <SectionHeader title="Profile banner" />
        <BannerField current={resolveBanner(user.id, bannerChoice, top)} automatic={autoBanner(top)} options={bannerOptions} />
      </section>
      <SettingsForm
        user={{
          name: user.name,
          email: user.email,
          image: user.image ?? null,
          timezone: user.timezone ?? "UTC",
          publicProfile: user.publicProfile ?? true,
          username: user.username ?? "",
          emailNotifications: user.emailNotifications ?? true,
          showAdultCovers: user.showAdultCovers ?? false,
          bio: row?.bio ?? "",
          profileLinks: row?.profileLinks ?? [],
        }}
      />

      <div className="mt-10 max-w-md">
        <SectionHeader title="Your data" />
        <p className="mb-3 text-sm text-muted-foreground">
          Download everything tied to your account (profile, sessions, library, goals, follows and club activity)
          as one JSON file, or as separate CSVs per category.
        </p>
        <div className="grid gap-2">
          <ExportDataButton />
          <CsvExportButtons />
        </div>
      </div>

      <div className="mt-10 max-w-md">
        <SectionHeader title="Danger zone" />
        <p className="mb-3 text-sm text-muted-foreground">
          Permanently delete your account and everything associated with it. This cannot be undone.
        </p>
        <DeleteAccountDialog />
      </div>
    </div>
  );
}
