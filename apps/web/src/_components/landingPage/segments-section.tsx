'use client';

import { useMemo, useState } from "react";
import { containerClass, segments } from "../../lib/_constants/landing-data";

export function SegmentsSection() {
  const [active, setActive] = useState(segments[0].name);
  const activeSegment = useMemo(
    () => segments.find((segment) => segment.name === active) ?? segments[0],
    [active]
  );

  return (
    <section id="built-for-you" className="py-24 md:py-28">
      <div className={`${containerClass} space-y-12`}>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90 md:text-4xl">Built for wherever you are in the journey</h2>
          <p className="mx-auto max-w-2xl text-base text-white/60">
            Switch personas to see how LetsKraack adapts to your timeline, goals, and batch needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {segments.map((segment) => (
            <button
              key={segment.name}
              type="button"
              onClick={() => setActive(segment.name)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                active === segment.name
                  ? 'bg-[#3b82f6] text-white shadow-[0_18px_50px_rgba(59,130,246,0.35)]'
                  : 'border border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:text-white'
              }`}
              aria-pressed={active === segment.name}
            >
              {segment.name}
            </button>
          ))}
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">{activeSegment.caption}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{activeSegment.name}</h3>
            </div>
            <ul className="grid gap-4 text-sm text-white/70 md:w-1/2">
              {activeSegment.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#3b82f6]" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
