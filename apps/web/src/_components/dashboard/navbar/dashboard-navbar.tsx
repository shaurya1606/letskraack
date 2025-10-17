"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Link from "next/link";

const searchCategories = ["Problems", "Roadmaps", "People", "Resources"] as const;

export function DashboardNavbar() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [query, setQuery] = useState("");
  const [isSearchOpen, setSearchOpen] = useState(false);

  const focusSearch = useCallback(() => {
    searchRef.current?.focus();
    setSearchOpen(true);
  }, []);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        focusSearch();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [focusSearch]);

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (!searchRef.current) return;
      if (!event.target) return;
      if (searchRef.current.contains(event.target as Node)) return;
      setSearchOpen(false);
    };

    if (isSearchOpen) {
      window.addEventListener("click", handleClickAway);
      return () => window.removeEventListener("click", handleClickAway);
    }
    return undefined;
  }, [isSearchOpen]);

  return (
    <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 border-b border-white/5 bg-[rgba(9,12,25,0.85)] px-6 py-4 backdrop-blur-xl">
      <div className="flex items-center gap-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-sm font-semibold text-white transition hover:scale-105"
        >
          <span className="h-10 w-10 rounded-2xl bg-white/10" aria-hidden="true" />
          LetsKraack OS
        </Link>
        <div className="hidden lg:block text-sm text-white/60">Level 7 • Rising Engineer</div>
      </div>
      <div className="flex flex-1 items-center gap-4 lg:max-w-2xl">
        <div className="relative flex-1">
          <label htmlFor="dashboard-search" className="sr-only">
            Search roadmaps, problems, notes
          </label>
          <input
            id="dashboard-search"
            ref={searchRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setSearchOpen(true)}
            placeholder="Search roadmaps, problems, notes…"
            className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          />
          <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/12 px-2 py-0.5 text-[11px] font-semibold text-white/40 lg:block">
            /
          </div>
          {isSearchOpen && (
            <div
              role="listbox"
              className="absolute left-0 right-0 top-14 grid gap-2 rounded-3xl border border-white/12 bg-[rgba(9,12,25,0.95)] p-4 text-sm text-white/70 shadow-[0_26px_80px_rgba(6,10,24,0.6)]"
            >
              {searchCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="flex items-center justify-between rounded-2xl border border-transparent px-3 py-2 text-left transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:border-white/16 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>{category}</span>
                  <span className="text-xs text-white/40">Press Enter</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          type="button"
          className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-white/70 transition hover:border-white/24 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Weekly summary"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#facc15]" aria-hidden="true" />
          72% goal
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/24 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Notifications"
        >
          <span aria-hidden="true">🔔</span>
          <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#f87171] px-1 text-[11px] font-semibold text-white">
            3
          </span>
        </button>
        <button
          type="button"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-[#38bdf8]/40 bg-[#38bdf8]/10 px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(56,189,248,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Quick create"
        >
          <span aria-hidden="true">＋</span>
          Quick create
        </button>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-transparent bg-white/10 transition hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Profile menu"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-semibold text-white">
            <span>SK</span>
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-[rgba(9,12,25,0.85)] bg-[#22c55e]" aria-hidden="true" />
          </span>
        </button>
      </div>
    </header>
  );
}
