import type { TaskItem } from "@/lib/_types/dashboard";

import { DashboardCard } from "./dashboard-card";

type UpcomingTasksCardProps = {
  tasks: TaskItem[];
};

const typeLabels: Record<TaskItem["type"], string> = {
  quiz: "Quiz",
  interview: "Mock interview",
  assignment: "Assignment",
  project: "Project",
};

const typeAccent: Record<TaskItem["type"], string> = {
  quiz: "bg-[#38bdf8]",
  interview: "bg-[#f472b6]",
  assignment: "bg-[#22c55e]",
  project: "bg-[#f97316]",
};

function formatDueDate(dueAt: string) {
  return new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    weekday: "short",
  }).format(new Date(dueAt));
}

export function UpcomingTasksCard({ tasks }: UpcomingTasksCardProps) {
  return (
    <DashboardCard
      title="Upcoming timeline"
      subtitle="Stay ahead of commitments"
      headerAction={
        <button
          type="button"
          className="rounded-full border border-white/14 px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Add task
        </button>
      }
    >
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id}>
            <article
              className="flex flex-col gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-white/16 hover:bg-white/[0.06] focus-within:border-white/16"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className={`h-10 w-1.5 rounded-full ${typeAccent[task.type]}`} aria-hidden="true" />
                  <div>
                    <h3 className="text-base font-semibold text-white">{task.title}</h3>
                    <p className="text-xs text-white/50">{typeLabels[task.type]}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end text-sm text-white/70">
                  <span>{formatDueDate(task.dueAt)}</span>
                  <span>{task.durationMinutes} min</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="rounded-full border border-white/14 px-3 py-1 transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Mark done
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-white/14 px-3 py-1 transition hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Snooze
                  </button>
                </div>
                {task.isDueSoon && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#facc15]/40 bg-[#facc15]/10 px-3 py-1 text-xs font-semibold text-[#facc15]">
                    <span className="h-2 w-2 rounded-full bg-[#facc15]" aria-hidden="true" />
                    Due soon
                  </span>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}
