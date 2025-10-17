import { dashboardMockData } from "@/lib/_constants/dashboard-data";

import { AiMentorCard } from "./cards/ai-mentor-card";
import { AnalyticsCard } from "./cards/analytics-card";
import { CurrentFocusCard } from "./cards/current-focus-card";
import { DashboardCard } from "./cards/dashboard-card";
import { LeaderboardCard } from "./cards/leaderboard-card";
import { MotivationCard } from "./cards/motivation-card";
import { NotificationsCard } from "./cards/notifications-card";
import { OverviewCard } from "./cards/overview-card";
import { QuickActionsCard } from "./cards/quick-actions-card";
import { UpcomingTasksCard } from "./cards/upcoming-tasks-card";

export function DashboardContent() {
  const data = dashboardMockData;

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <OverviewCard data={data.summary} />
        <CurrentFocusCard data={data.roadmap} />
      </section>
      <section className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <UpcomingTasksCard tasks={data.tasks} />
        <AiMentorCard suggestions={data.mentor} />
      </section>
      <section className="grid gap-6 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <AnalyticsCard data={data.analytics} />
        <LeaderboardCard data={data.leaderboard} />
      </section>
      <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <QuickActionsCard actions={data.quickActions} />
        <MotivationCard data={data.motivation} />
        <NotificationsCard items={data.notifications} />
      </section>
      <DashboardCard title="Accessibility hints" subtitle="Keyboard and screen reader affordances">
        <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2 xl:grid-cols-3">
          <li className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            <p className="font-semibold text-white">Keyboard shortcuts</p>
            <p className="text-xs text-white/50">Press Shift+? to learn all shortcuts, / to focus search.</p>
          </li>
          <li className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            <p className="font-semibold text-white">aria-live notifications</p>
            <p className="text-xs text-white/50">Announcements land politely, rest can be revisited in the list above.</p>
          </li>
          <li className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            <p className="font-semibold text-white">Color contrast</p>
            <p className="text-xs text-white/50">All badges meet AA contrast with layered backgrounds.</p>
          </li>
        </ul>
      </DashboardCard>
    </div>
  );
}
