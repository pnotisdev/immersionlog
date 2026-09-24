// Scoped to the signed-in app on purpose. At the root, this Suspense boundary wrapped
// every public page too, so the 200 and the shell were sent before a page could
// redirect or 404: search engines saw soft redirects and soft 404s.
export default function Loading() {
  return (
    <div className="flex min-h-[50svh] items-center justify-center px-4">
      <div className="size-6 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-foreground" aria-hidden />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
