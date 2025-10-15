'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import { containerClass, roadmapTracks } from "../../lib/_constants/landing-data";

export function RoadmapSection() {
  const [active, setActive] = useState(roadmapTracks[0].name);

  const activeTrack = useMemo(
    () => roadmapTracks.find((track) => track.name === active) ?? roadmapTracks[0],
    [active]
  );

  return (
    <section id="roadmap" className="py-24 md:py-28">
      <div className={`${containerClass} space-y-12`}>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90 md:text-4xl">Roadmaps engineered for every year</h2>
          <p className="mx-auto max-w-2xl text-base text-white/60">
            Switch between yearly tracks to see the milestones, weekly pace, and outcomes that keep you interview-ready.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {roadmapTracks.map((track) => (
            <button
              key={track.name}
              type="button"
              onClick={() => setActive(track.name)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                active === track.name
                  ? 'bg-[#3b82f6] text-white shadow-[0_18px_50px_rgba(59,130,246,0.35)]'
                  : 'border border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:text-white'
              }`}
              aria-pressed={active === track.name}
            >
              {track.name}
            </button>
          ))}
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
          <div className="grid gap-6 md:grid-cols-3">
            {activeTrack.modules.map((module) => (
              <article key={module.title} className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
                <span className="inline-flex w-fit rounded-full bg-[#3b82f6]/20 px-3 py-1 text-xs font-semibold text-[#3b82f6]">
                  {module.duration}
                </span>
                <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                <p className="text-sm text-white/60">{module.summary}</p>
                <Link href="#" className="mt-auto text-sm font-semibold text-[#82aaff] hover:text-white" aria-label="View module">
                  View sample →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
