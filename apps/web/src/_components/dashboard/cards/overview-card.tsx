import type { ProgressSummary } from "@/lib/_types/dashboard";

import { DashboardCard } from "./dashboard-card";

type OverviewCardProps = {
  data: ProgressSummary;
};

export function OverviewCard({ data }: OverviewCardProps) {
  return (
    <DashboardCard
      title="Progress overview"
      subtitle={`XP ${data.xp.toLocaleString()} • ${data.streakDays} day streak • Weekly goal ${data.weeklyGoalPercent}%`}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="grid gap-4 sm:grid-cols-2">
          {data.tracks.map((track) => (
            <button
              key={track.id}
              type="button"
              className="group flex flex-col gap-2 rounded-2xl border border-white/8 bg-white/[0.04] p-4 text-left transition hover:border-white/18 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={`${track.name} progress ${track.percent}% currently on ${track.currentModule}`}
            >
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>{track.name}</span>
                <span>{track.accuracy}% accuracy</span>
              </div>
              <div className="text-xl font-semibold text-white">{track.percent}%</div>
              <p className="text-sm text-white/60">Current module: {track.currentModule}</p>
              <div className="mt-2 h-2 rounded-full bg-white/10">
                <span
                  className="block h-full rounded-full bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#8b5cf6] transition"
                  style={{ width: `${track.percent}%` }}
                />
              </div>
            </button>
          ))}
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
            <p className="text-sm font-semibold text-white/80">Weekly stats</p>
            <dl className="mt-3 grid gap-3">
              {data.weeklyStats.map((stat) => (
                <div key={stat.id} className="flex items-center justify-between text-sm text-white/70">
                  <dt>{stat.label}</dt>
                  <dd className="font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-2xl border border-white/8 bg-[#38bdf8]/10 p-4 text-sm text-white/80">
            Nice — {data.streakDays} day streak. Keep the momentum with a 20-minute focus block today.
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
