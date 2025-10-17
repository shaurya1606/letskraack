import type { ReactNode } from "react";

import { DashboardNavbar } from "./navbar/dashboard-navbar";
import { DashboardSidebar } from "./sidebar/dashboard-sidebar";

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_55%),linear-gradient(160deg,#050815,#0c1224_55%,#111827)] text-white">
      <DashboardNavbar />
      <div className="mx-auto flex w-full max-w-[120rem] gap-8 px-6 pb-16 pt-6 lg:pt-10">
        <DashboardSidebar />
        <main className="w-full flex-1 space-y-8" role="main">
          {children}
        </main>
      </div>
    </div>
  );
}
