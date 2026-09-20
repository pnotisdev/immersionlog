import Link from "next/link";
import { Compass, Library } from "lucide-react";
import { ENTRY_STATUSES, MEDIA_TYPES, type EntryStatus, type MediaType } from "@/db/schema";
import { getLibrary } from "@/lib/queries";
import { requireUser } from "@/lib/session";
import { getLibraryPicks } from "@/lib/view-models";
import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
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
            <Link
              href="/discover"
              className="inline-flex h-8 items-center gap-1.5 rounded-full border px-3.5 text-sm transition-colors hover:bg-muted"
            >
              <Compass className="size-4" /> Discover
            </Link>
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
            icon={Library}
            title="Your library is empty."
            description="Add an anime, a VN, a book: anything you're consuming in Japanese."
            action={
              <Link
                href="/discover"
                className="inline-flex h-8 items-center gap-1.5 rounded-full bg-primary px-3.5 text-sm font-medium text-primary-foreground"
              >
                <Compass className="size-4" /> Browse popular titles
              </Link>
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
