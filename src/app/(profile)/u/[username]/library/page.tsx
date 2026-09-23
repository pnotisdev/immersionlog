import Link from "next/link";
import { notFound } from "next/navigation";
import { ENTRY_STATUSES, MEDIA_TYPES, type EntryStatus, type MediaType } from "@/db/schema";
import { dayKey } from "@/lib/dates";
import { getPublicUser } from "@/lib/ranking-queries";
import { getSession } from "@/lib/session";
import { USERNAME_RE } from "@/lib/username";
import { getLibraryPicks } from "@/lib/view-models";
import { EmptyState } from "@/components/layout/empty-state";
import { ProfileTabs } from "@/components/community/profile-tabs";
import { Avatar } from "@/components/ranking/avatar";
import { LibraryBrowser } from "@/components/library/library-browser";

export async function generateMetadata(props: PageProps<"/u/[username]/library">) {
  const { username } = await props.params;
  const u = USERNAME_RE.test(username) ? await getPublicUser(username) : null;
  return { title: u ? `${u.name}'s library` : "Library" };
}

export default async function UserLibraryPage(props: PageProps<"/u/[username]/library">) {
  const session = await getSession();
  const viewer = session?.user ?? null;
  const { username } = await props.params;
  if (!USERNAME_RE.test(username)) notFound();
  const u = await getPublicUser(username);
  if (!u) notFound();

  const sp = await props.searchParams;
  const statusParam = str(sp.status);
  const typeParam = str(sp.type);
  const status = (ENTRY_STATUSES as readonly string[]).includes(statusParam ?? "") ? (statusParam as EntryStatus) : undefined;
  const type = (MEDIA_TYPES as readonly string[]).includes(typeParam ?? "") ? (typeParam as MediaType) : undefined;

  const isSelf = viewer != null && u.id === viewer.id;
  const firstName = u.name.split(" ")[0];
  const entries = isSelf && viewer ? await getLibraryPicks(viewer.id) : null;

  return (
    <div>
      {/* Same identity row and tabs as the profile, so Library reads as one of its views
          rather than a separate page you need a back link out of. */}
      <header className="mb-6">
        <Link href={`/u/${u.username}`} className="group inline-flex items-center gap-3">
          <Avatar name={u.name} image={u.image} size="md" />
          <span className="min-w-0">
            <span className="block text-h2 font-semibold group-hover:underline">{isSelf ? "Your library" : `${firstName}'s library`}</span>
            <span className="block text-meta text-dim">
              {u.name} · @{u.username}
            </span>
          </span>
        </Link>
        <ProfileTabs username={u.username!} active="library" year={dayKey(new Date(), u.timezone).slice(0, 4)} />
      </header>

      <LibraryBrowser
        userId={u.id}
        basePath={`/u/${u.username}/library`}
        status={status}
        type={type}
        quickLog={entries ? { entries, tz: viewer?.timezone ?? "UTC" } : undefined}
        emptyState={
          <EmptyState title={isSelf ? "Your library is empty." : `${firstName} hasn't added anything yet.`} />
        }
      />
    </div>
  );
}

function str(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}
