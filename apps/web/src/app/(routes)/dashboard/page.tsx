import { DashboardContent } from "@/_components/dashboard/dashboard-content";
import { DashboardShell } from "@/_components/dashboard/dashboard-shell";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardContent />
    </DashboardShell>
  );
}
