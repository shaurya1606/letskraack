import type { LeaderboardSnapshot } from "@/lib/_types/dashboard";

import { DashboardCard } from "./dashboard-card";

type LeaderboardCardProps = {
  data: LeaderboardSnapshot;
};

export function LeaderboardCard({ data }: LeaderboardCardProps) {
  return (
    <DashboardCard
      title="Community snapshot"
      subtitle={`You are ranked #${data.youRank} in ${data.scope}`}
      headerAction={
        <button
          type="button"
          className="rounded-full border border-white/14 px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          View leaderboard
        </button>
      }
    >
      <div className="space-y-5">
        <ul className="grid gap-3">
          {data.peers.map((peer) => (
            <li key={peer.id} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] p-3">
              <div className="flex items-center gap-3">
                <img
                  src={peer.avatarUrl}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-white">#{peer.rank} {peer.name}</p>
                  <p className="text-xs text-white/60">{peer.delta >= 0 ? `+${peer.delta}` : peer.delta} vs last week</p>
                </div>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/14 px-3 py-1 text-xs text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Challenge
              </button>
            </li>
          ))}
        </ul>
        <div>
          <p className="text-sm font-semibold text-white/80">Recent activity</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {data.activity.map((item) => (
              <li key={item.id} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                <p>{item.message}</p>
                <time dateTime={item.timestamp} className="mt-1 block text-xs text-white/50">
                  {new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
                    Math.round((new Date(item.timestamp).getTime() - Date.now()) / (1000 * 60)),
                    "minute",
                  )}
                </time>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardCard>
  );
}
