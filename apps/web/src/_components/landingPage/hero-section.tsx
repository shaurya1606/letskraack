'use client';

import { useEffect, useRef, useState } from "react";
import { containerClass, heroStats } from "../../lib/_constants/landing-data";
import { PrimaryButton } from "./shared/primary-button";
import { SecondaryButton } from "./shared/secondary-button";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (isPlaying) {
      void video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#2563eb]/35 via-[#3b82f6]/15 to-transparent blur-3xl" />
        <div className="absolute bottom-[-240px] left-16 h-[420px] w-[420px] rounded-full bg-[#3b82f6]/10 blur-3xl" />
      </div>
      <div className={`${containerClass} flex min-h-screen flex-col items-center justify-center pb-32 pt-40 text-center md:pb-40`}>
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          Placement & Internship Prep
        </span>
        <div className="max-w-3xl space-y-5">
          <h1 className="text-3xl font-semibold leading-[1.15] text-white sm:text-4xl lg:text-[3.2rem]">
            Land Your Dream Tech Job. Learn What Colleges Don&apos;t Teach.
          </h1>
          <p className="text-base text-white/70 sm:text-lg">
            LetsKraack is the placement operating system for ambitious engineers. Follow tailored roadmaps, ace mock interviews, and track every milestone until you sign the offer.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="#cta">Start Preparing</PrimaryButton>
          <SecondaryButton href="#roadmap">View Roadmap</SecondaryButton>
        </div>
        <figure className="mt-12 w-full max-w-3xl">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="rounded-[1.2rem] border border-white/10 bg-black/70 p-4">
              <video
                ref={videoRef}
                className="aspect-video w-full rounded-[1rem] border border-white/10 object-cover"
                aria-label="30 second demo of the dashboard"
                playsInline
                loop
                muted
                preload="metadata"
                poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                controls={false}
              >
                <source src="https://cdn.coverr.co/videos/coverr-students-studying-together-5734/1080p.mp4" type="video/mp4" />
                <p className="p-6 text-sm text-white/70">
                  Watch a quick tour of the dashboard.
                </p>
              </video>
              <div className="absolute bottom-6 right-8 flex gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs text-white/70">
                <button
                  type="button"
                  onClick={() => setIsPlaying((prev) => !prev)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-white"
                  aria-pressed={isPlaying}
                  aria-label={isPlaying ? 'Pause demo video' : 'Play demo video'}
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-[#3b82f6]" aria-hidden="true" />
                  {isPlaying ? 'Playing' : 'Paused'}
                </button>
              </div>
            </div>
          </div>
          <figcaption className="mt-4 text-sm text-white/50">
            See how it works in 30 seconds.
          </figcaption>
        </figure>
        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-6 rounded-3xl border border-white/5 bg-white/5 p-6 text-left backdrop-blur md:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-2">
              <span className="text-2xl font-semibold text-white md:text-3xl">{stat.value}</span>
              <span className="text-sm text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
