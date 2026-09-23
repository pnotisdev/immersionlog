import { TabLinks } from "@/components/layout/tab-links";

/**
 * A profile's three views — overview, library, this year's report — as one tab row,
 * shared by /u/[username] and /u/[username]/library. They used to be three outline
 * buttons crammed into the header beside Follow and Copy link, which on a phone ran
 * off the edge of the screen.
 */
export function ProfileTabs({
  username,
  active,
  year,
  libraryCount,
}: {
  username: string;
  active: "overview" | "library";
  year: string;
  libraryCount?: number;
}) {
  const base = `/u/${username}`;
  const tabs = [
    { href: base, label: "Overview" },
    { href: `${base}/library`, label: "Library", count: libraryCount },
    { href: `${base}/report/${year}`, label: `${year} report` },
  ];
  return <TabLinks tabs={tabs} active={active === "overview" ? base : `${base}/library`} className="mt-5 mb-0" />;
}
