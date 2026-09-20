import { Users } from "lucide-react";
import { presetRange } from "@/lib/dates";
import { listMembers } from "@/lib/social-queries";
import { requireUser } from "@/lib/session";
import { EmptyState } from "@/components/layout/empty-state";
import { PageHeader } from "@/components/layout/page-header";
import { TabLinks } from "@/components/layout/tab-links";
import { CommunityTabs } from "@/components/community/community-tabs";
import { MemberCard } from "@/components/community/member-card";

export const metadata = { title: "Members" };

export default async function MembersPage(props: PageProps<"/members">) {
  const user = await requireUser();
  const tz = user.timezone ?? "UTC";
  const sp = await props.searchParams;
  const sort = str(sp.sort) === "new" ? "new" : "active";
  const q = (str(sp.q) ?? "").trim();

  const month = presetRange("month", tz, new Date());
  const members = await listMembers(user.id, { since: month.from, sort, q: q || undefined });

  const href = (s: string) => {
    const p = new URLSearchParams();
    if (s !== "active") p.set("sort", s);
    if (q) p.set("q", q);
    const qs = p.toString();
    return `/members${qs ? `?${qs}` : ""}`;
  };

  return (
    <div>
      <PageHeader title="Members" />
      <CommunityTabs active="/members" />

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <TabLinks
          tabs={[
            { href: href("active"), label: "Active this month" },
            { href: href("new"), label: "Newest" },
          ]}
          active={href(sort)}
          variant="pill"
        />
        <form method="get" action="/members" className="flex gap-2">
          {sort !== "active" && <input type="hidden" name="sort" value={sort} />}
          <input
            name="q"
            defaultValue={q}
            placeholder="Search members…"
            aria-label="Search members"
            className="h-8 w-48 rounded-full border bg-transparent px-3.5 text-sm outline-none focus-visible:border-ring"
          />
        </form>
      </div>

      {members.length === 0 ? (
        <EmptyState icon={Users} title={q ? `Nobody matches "${q}".` : "No public profiles yet."} />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <MemberCard key={m.userId} member={m} viewerId={user.id} />
          ))}
        </div>
      )}
    </div>
  );
}

function str(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}
