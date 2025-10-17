import type { AnalyticsSnapshot } from "@/lib/_types/dashboard";

import { DashboardCard } from "./dashboard-card";

function formatDateLabel(iso: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date(iso));
}

type AnalyticsCardProps = {
  data: AnalyticsSnapshot;
};

export function AnalyticsCard({ data }: AnalyticsCardProps) {
  return (
    <DashboardCard
      title="Analytics"
      subtitle={`Last ${data.range}`}
      headerAction={
        <div className="flex gap-2">
          {["7d", "30d", "90d"].map((range) => (
            <button
              key={range}
              type="button"
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                data.range === range
                  ? "border-white/20 bg-white/[0.08] text-white"
                  : "border-white/12 text-white/70 hover:border-white/24 hover:text-white"
              }`}
              aria-pressed={data.range === range}
            >
              {range}
            </button>
          ))}
        </div>
      }
    >
      <div className="space-y-6 text-sm text-white/70">
        <section>
          <h3 className="text-sm font-semibold text-white/80">Study time</h3>
          <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {data.studyTimeSeries.map((point) => (
              <div key={point.date} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3 text-center">
                <dt className="text-xs text-white/50">{formatDateLabel(point.date)}</dt>
                <dd className="mt-2 text-lg font-semibold text-white">{point.minutes}m</dd>
              </div>
            ))}
          </dl>
        </section>
        <section>
          <h3 className="text-sm font-semibold text-white/80">Topic accuracy</h3>
          <ul className="mt-3 space-y-3">
            {data.topicAccuracy.map((topic) => (
              <li key={topic.topic} className="flex flex-col gap-2 rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                <div className="flex items-center justify-between text-sm">
                  <span>{topic.topic}</span>
                  <span className="font-semibold text-white">{topic.percent}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-[#34d399] to-[#10b981]"
                    style={{ width: `${topic.percent}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-sm font-semibold text-white/80">Time per problem</h3>
          <ul className="mt-3 space-y-2">
            {data.timePerProblem.map((topic) => (
              <li key={topic.topic} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                <span>{topic.topic}</span>
                <span className="font-semibold text-white">{topic.minutes} min</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </DashboardCard>
  );
}
