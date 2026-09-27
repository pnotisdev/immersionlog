import { GuideNav } from "@/components/guide/guide-nav";

/** Every guide chapter: the chapter, and the guide's table of contents beside it. */
export default function GuideLayout({ children }: LayoutProps<"/guide">) {
  return (
    <div className="mx-auto grid max-w-[1080px] gap-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-14">
      <div className="min-w-0">
        <div className="mb-8 lg:hidden">
          <GuideNav variant="mobile" />
        </div>
        {children}
      </div>
      <aside className="hidden lg:block">
        <GuideNav variant="sidebar" />
      </aside>
    </div>
  );
}
