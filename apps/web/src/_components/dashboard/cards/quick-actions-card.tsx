import Link from "next/link";

import type { QuickAction } from "@/lib/_types/dashboard";

import { DashboardCard } from "./dashboard-card";

type QuickActionsCardProps = {
  actions: QuickAction[];
};

export function QuickActionsCard({ actions }: QuickActionsCardProps) {
  return (
    <DashboardCard title="Quick actions" subtitle="Jump back in when you have a moment">
      <ul className="grid gap-3">
        {actions.map((action) => (
          <li key={action.id}>
            <Link
              href={action.href}
              className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.07]"
            >
              <div>
                <p className="text-sm font-semibold text-white">{action.label}</p>
                <p className="text-xs text-white/60">{action.description}</p>
              </div>
              {action.hotkey && (
                <span className="rounded-full border border-white/12 px-3 py-1 text-xs font-semibold text-white/60">
                  {action.hotkey}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}
