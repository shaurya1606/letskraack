"use client";

import { useMemo, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: string;
  badge?: string;
  progress?: number;
};

type NavGroup = {
  id: string;
  label: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    id: "core",
    label: "Core",
    items: [
      { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: "🏠" },
      { id: "roadmaps", label: "Roadmaps", href: "/roadmaps", icon: "🛣" },
      { id: "practice", label: "Practice", href: "/practice", icon: "🧠", badge: "+3" },
    ],
  },
  {
    id: "assessment",
    label: "Assessment",
    items: [
      { id: "quizzes", label: "Quizzes", href: "/quizzes", icon: "📝" },
      { id: "mock-interviews", label: "Mock interviews", href: "/mock-interviews", icon: "🎤" },
      { id: "tests", label: "Tests", href: "/tests", icon: "📊" },
    ],
  },
  {
    id: "community",
    label: "Community",
    items: [
      { id: "leaderboards", label: "Leaderboards", href: "/leaderboards", icon: "🏆" },
      { id: "groups", label: "Study groups", href: "/groups", icon: "👥" },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    items: [
      { id: "resources", label: "Resources", href: "/resources", icon: "📚" },
      { id: "settings", label: "Settings", href: "/settings", icon: "⚙" },
    ],
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setCollapsed] = useState(false);

  const currentId = useMemo(() => {
    const flattened = navGroups.flatMap((group) => group.items);
    return flattened.find((item) => pathname?.startsWith(item.href))?.id ?? "dashboard";
  }, [pathname]);

  return (
    <aside
      className={`sticky top-24 hidden min-h-[calc(100vh-6rem)] border-r border-white/5 transition-[width] duration-200 lg:block ${
        isCollapsed ? "w-20" : "w-64"
      }`}
      aria-label="Main navigation"
    >
      <div className="flex h-full flex-col gap-6 px-4 py-6">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/60 transition hover:border-white/24 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => setCollapsed((value) => !value)}
        >
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
        <nav className="flex-1 space-y-6" role="navigation">
          {navGroups.map((group) => (
            <div key={group.id}>
              {!isCollapsed && (
                <p className="px-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">{group.label}</p>
              )}
              <ul className="mt-3 space-y-1">
                {group.items.map((item) => {
                  const isActive = item.id === currentId;
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className={`group flex items-center gap-3 rounded-2xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/[0.05] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                          isActive ? "bg-white/[0.08] text-white" : ""
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span aria-hidden="true" className="text-lg">
                          {item.icon}
                        </span>
                        {!isCollapsed && (
                          <span className="flex-1 truncate">{item.label}</span>
                        )}
                        {!isCollapsed && item.badge && (
                          <span className="rounded-full border border-white/12 px-2 py-0.5 text-[11px] font-semibold text-white/60">
                            {item.badge}
                          </span>
                        )}
                        {!isCollapsed && typeof item.progress === "number" && (
                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 text-xs text-white/70">
                            {item.progress}%
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/60">
          <p className="font-semibold text-white/80">Need a break?</p>
          <p className="mt-2">Use Shift+? to open the shortcuts overlay any time.</p>
        </div>
      </div>
    </aside>
  );
}
