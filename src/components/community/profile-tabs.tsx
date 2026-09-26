import { TabLinks } from "@/components/layout/tab-links";

/**
 * A profile's views — overview, library, journal posts, this year's report — as one tab
 * row, shared by /u/[username] and its library and posts pages. They used to be three outline
 * buttons crammed into the header beside Follow and Copy link, which on a phone ran
 * off the edge of the screen.
 */
export function ProfileTabs({
  username,
  active,
  year,
  libraryCount,
  postCount,
}: {
  username: string;
  active: "overview" | "library" | "posts";
  year: string;
  libraryCount?: number;
  postCount?: number;
}) {
  const base = `/u/${username}`;
  const tabs = [
    { href: base, label: "Overview" },
    { href: `${base}/library`, label: "Library", count: libraryCount },
    { href: `${base}/posts`, label: "Posts", count: postCount || undefined },
    { href: `${base}/report/${year}`, label: `${year} report` },
  ];
  return <TabLinks tabs={tabs} active={active === "overview" ? base : `${base}/${active}`} className="mt-5 mb-0" />;
}
