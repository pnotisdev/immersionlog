import { requireUser } from "@/lib/session";
import { getLibraryPicks } from "@/lib/view-models";
import { PageHeader } from "@/components/layout/page-header";
import { NewLogForm } from "@/components/sessions/new-log-form";

export const metadata = { title: "Log immersion" };

export default async function NewLogPage() {
  const user = await requireUser();
  const picks = await getLibraryPicks(user.id);
  return (
    <div>
      <PageHeader title="Log" />
      <NewLogForm entries={picks} tz={user.timezone ?? "UTC"} />
    </div>
  );
}
