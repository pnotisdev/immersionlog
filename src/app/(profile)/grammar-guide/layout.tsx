import { LessonNav } from "@/components/grammar-guide/lesson-nav";

/** The grammar course: the lesson, and the course's table of contents beside it. */
export default function GrammarGuideLayout({ children }: LayoutProps<"/grammar-guide">) {
  return (
    <div className="mx-auto grid max-w-[1080px] gap-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-14">
      <div className="min-w-0">
        <div className="mb-8 lg:hidden">
          <LessonNav variant="mobile" />
        </div>
        {children}
      </div>
      <aside className="hidden lg:block">
        <LessonNav variant="sidebar" />
      </aside>
    </div>
  );
}
