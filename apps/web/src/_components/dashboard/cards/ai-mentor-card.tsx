import type { AiRecommendation } from "@/lib/_types/dashboard";

import { DashboardCard } from "./dashboard-card";

type AiMentorCardProps = {
  suggestions: AiRecommendation[];
};

function formatConfidence(confidence: number) {
  return `${Math.round(confidence * 100)}% sure`;
}

export function AiMentorCard({ suggestions }: AiMentorCardProps) {
  return (
    <DashboardCard
      title="PrepMate"
      subtitle="Personalized nudges to keep momentum"
      headerAction={
        <button
          type="button"
          className="rounded-full border border-white/14 px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Ask mentor
        </button>
      }
    >
      <ul className="space-y-3">
        {suggestions.map((item) => (
          <li key={item.id}>
            <article className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-white/16 hover:bg-white/[0.06]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{item.reason}</p>
                </div>
                <span className="rounded-full border border-white/12 px-3 py-1 text-xs font-semibold text-white/70">
                  {formatConfidence(item.confidence)}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.actions.map((action) => (
                  <button
                    key={action.id}
                    type="button"
                    className="rounded-full border border-white/14 px-3 py-1 text-sm text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}
