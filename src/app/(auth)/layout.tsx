import Link from "next/link";
import { Suspense } from "react";
import { AuthVisual } from "@/components/auth/auth-visual";
import { Footer } from "@/components/layout/footer";
import { Wordmark } from "@/components/layout/mark";

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-svh flex-col">
      <div className="grid flex-1 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center px-4 py-12">
          <Link href="/" className="mb-8">
            <Wordmark markSize={22} textClassName="text-2xl font-semibold" />
          </Link>
          <div className="w-full max-w-sm">{children}</div>
        </div>
        {/* The panel reads live community numbers; the form must never wait on them. */}
        <Suspense fallback={<div className="hidden bg-black lg:block" />}>
          <AuthVisual />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
