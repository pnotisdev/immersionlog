import type { ReactNode } from "react";

/** Page title block. Actions sit beside it on desktop and wrap underneath on phones. */
export function PageHeader({
  title,
  description,
  eyebrow,
  actions,
}: {
  title: string;
  description?: ReactNode;
  eyebrow?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
      <div className="flex min-w-0 flex-wrap items-baseline gap-x-2.5 gap-y-1">
        {eyebrow && <span className="section-label">{eyebrow}</span>}
        <h1 className="text-h1 font-semibold text-foreground">{title}</h1>
        {description && <p className="text-meta text-dim">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

/** Section heading with an optional link on the right ("All goals", "See ranking"). */
export function SectionHeader({
  title,
  action,
  className,
}: {
  title: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-3 flex items-baseline justify-between gap-3 ${className ?? ""}`}>
      <h2 className="section-title">{title}</h2>
      {action}
    </div>
  );
}
