import type { ReactNode } from "react";

type DashboardCardProps = {
  title?: string;
  subtitle?: string;
  headerAction?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function DashboardCard({ title, subtitle, headerAction, children, className }: DashboardCardProps) {
  return (
    <section
      className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(9,13,28,0.45)] backdrop-blur-xl transition hover:border-white/16 focus-within:border-white/16 ${className ?? ""}`}
    >
      {(title || subtitle || headerAction) && (
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            {title && <h2 className="text-lg font-semibold text-white">{title}</h2>}
            {subtitle && <p className="text-sm text-white/60">{subtitle}</p>}
          </div>
          {headerAction && <div className="flex items-center gap-2">{headerAction}</div>}
        </header>
      )}
      <div>{children}</div>
    </section>
  );
}
