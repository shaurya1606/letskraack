import type { RoadmapCurrent } from "@/lib/_types/dashboard";

import { DashboardCard } from "./dashboard-card";

type CurrentFocusCardProps = {
  data: RoadmapCurrent;
};

export function CurrentFocusCard({ data }: CurrentFocusCardProps) {
  const durations = [15, 30, 60];

  return (
    <DashboardCard
      title="Current focus"
      subtitle="Stay immersed in your active roadmap step"
      headerAction={
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-full border border-white/14 px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Mark complete
          </button>
          <button
            type="button"
            className="rounded-full bg-[#6366f1] px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(99,102,241,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(99,102,241,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Resume
          </button>
        </div>
      }
    >
      <div className="space-y-5">
        <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-white">{data.title}</h3>
              <p className="text-sm text-white/60">{data.description}</p>
            </div>
            <span className="rounded-full border border-white/16 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70">
              {data.estTimeMinutes} min
            </span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className="font-medium text-white/80">Snooze:</span>
            {durations.map((minutes) => (
              <button
                key={minutes}
                type="button"
                className="rounded-full border border-white/12 px-3 py-1 transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {minutes === 60 ? "Tomorrow" : `${minutes} min`}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white/80">Up next</p>
          <ol className="mt-3 space-y-3">
            {data.nextSteps.map((step, index) => (
              <li
                key={step.id}
                className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-3 text-sm text-white/70 transition hover:border-white/16 hover:bg-white/[0.05]"
              >
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/80">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-white">{step.title}</p>
                  <p>{step.description}</p>
                  <p className="text-xs text-white/50">~{step.estTimeMinutes} min</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </DashboardCard>
  );
}
