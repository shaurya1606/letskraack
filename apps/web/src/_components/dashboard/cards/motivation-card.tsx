import type { MotivationBlurb } from "@/lib/_types/dashboard";

import { DashboardCard } from "./dashboard-card";

type MotivationCardProps = {
  data: MotivationBlurb;
};

export function MotivationCard({ data }: MotivationCardProps) {
  return (
    <DashboardCard title="Daily boost" subtitle="Rotate tips when you need fresh energy">
      <blockquote className="space-y-4 text-sm text-white/70">
        <p className="text-lg font-semibold text-white">“{data.quote}”</p>
        <footer className="text-xs uppercase tracking-[0.2em] text-white/50">{data.author}</footer>
        <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3 text-sm text-white/70">
          Tip: {data.tip}
        </div>
      </blockquote>
    </DashboardCard>
  );
}
