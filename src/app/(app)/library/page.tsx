import Link from "next/link";
import { Compass } from "lucide-react";
import { ENTRY_STATUSES, MEDIA_TYPES, type EntryStatus, type MediaType } from "@/db/schema";
import { getLibrary } from "@/lib/queries";
import { requireUser } from "@/lib/session";
import { getLibraryPicks } from "@/lib/view-models";
import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { AddMediaDialog } from "@/components/library/add-media-dialog";
import { LibraryBrowser } from "@/components/library/library-browser";

export const metadata = { title: "Library" };

export default async function LibraryPage(props: PageProps<"/library">) {
  const user = await requireUser();
  const sp = await props.searchParams;
  const statusParam = str(sp.status);
  const typeParam = str(sp.type);
  const status = (ENTRY_STATUSES as readonly string[]).includes(statusParam ?? "") ? (statusParam as EntryStatus) : undefined;
  const type = (MEDIA_TYPES as readonly string[]).includes(typeParam ?? "") ? (typeParam as MediaType) : undefined;

  const [total, entries] = await Promise.all([
    getLibrary(user.id).then((rows) => rows.length),
    getLibraryPicks(user.id),
  ]);
  const tz = user.timezone ?? "UTC";

  return (
    <div>
      <PageHeader
        title="Library"
        description={`${total} title${total === 1 ? "" : "s"} tracked`}
        actions={
          <>
            <Button render={<Link href="/discover" />} nativeButton={false} variant="outline">
              <Compass /> Discover
            </Button>
            <AddMediaDialog />
          </>
        }
      />

      <LibraryBrowser
        userId={user.id}
        basePath="/library"
        status={status}
        type={type}
        quickLog={{ entries, tz }}
        emptyState={
          <EmptyState
            title="Your library is empty."
            action={
              <Button render={<Link href="/discover" />} nativeButton={false} variant="ghost" size="sm">
                <Compass /> Browse popular titles
              </Button>
            }
          />
        }
      />
    </div>
  );
}

function str(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}
