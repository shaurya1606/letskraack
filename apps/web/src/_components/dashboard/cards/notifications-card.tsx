import Link from "next/link";

import type { ActivityNotification } from "@/lib/_types/dashboard";

import { DashboardCard } from "./dashboard-card";

type NotificationsCardProps = {
  items: ActivityNotification[];
};

function formatRelativeTime(iso: string) {
  const diffMinutes = Math.round((new Date(iso).getTime() - Date.now()) / (1000 * 60));
  return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(diffMinutes, "minute");
}

export function NotificationsCard({ items }: NotificationsCardProps) {
  return (
    <DashboardCard
      title="Notifications"
      subtitle="Latest updates across modules"
      headerAction={
        <button
          type="button"
          className="rounded-full border border-white/14 px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Mark all read
        </button>
      }
    >
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <article className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-white/16 hover:bg-white/[0.06]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-white/60">{item.description}</p>
                </div>
                <time dateTime={item.createdAt} className="text-xs text-white/40">
                  {formatRelativeTime(item.createdAt)}
                </time>
              </div>
              {item.url && (
                <Link
                  href={item.url}
                  className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#38bdf8] transition hover:text-[#0ea5e9]"
                >
                  View detail
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </article>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}
