'use client';

import { useEffect, useRef, useState } from "react";
import { leaderboard } from "../../lib/_constants/landing-data";
import { useBodyScrollLock } from "../../lib/_hooks/useBodyScrollLock";
import { useTrapFocus } from "../../lib/_hooks/useTrapFocus";
import { PrimaryButton } from "./shared/primary-button";

export function FloatingLeaderboard() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useTrapFocus(open, panelRef);
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 text-sm text-white/80 sm:flex">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur transition hover:scale-105"
        aria-expanded={open}
        aria-controls="floating-leaderboard"
        aria-label="Open hall of fame"
      >
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#f59e0b]" aria-hidden="true" />
        Hall of Fame
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-end">
          <div className="absolute inset-0 bg-black/70 backdrop-blur" onClick={() => setOpen(false)} aria-hidden="true" />
          <div
            ref={panelRef}
            id="floating-leaderboard"
            className="relative flex h-[92vh] w-full max-w-md flex-col overflow-y-auto rounded-t-3xl border border-white/10 bg-[rgba(15,15,15,0.96)] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:h-auto sm:max-h-[90vh] sm:rounded-3xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="leaderboard-title"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 id="leaderboard-title" className="text-lg font-semibold text-white">
                  Hall of Fame
                </h2>
                <p className="text-xs text-white/50">Top performers this month</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
                aria-label="Close leaderboard"
              >
                ×
              </button>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/70">
              <button type="button" className="rounded-full bg-[#3b82f6] px-3 py-1 text-white">
                Last Month
              </button>
              <button type="button" className="rounded-full px-3 py-1 text-white/60 hover:text-white">
                All Time
              </button>
            </div>
            <ul className="mt-6 space-y-4">
              {leaderboard.map((entry, index) => (
                <li key={entry.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white/60">#{index + 1}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{entry.name}</p>
                      <p className="text-xs text-white/50">{entry.college}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[#fbbf24]">{entry.score}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Climb the leaderboard</p>
              <p className="text-xs text-white/60">
                Earn points for streaks, mocks, and projects. Top 10 unlock mentor feedback credits.
              </p>
              <PrimaryButton href="#">Join the leaderboard</PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
