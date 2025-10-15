'use client';

import { useRef } from "react";
import { containerClass, testimonials } from "../../lib/_constants/landing-data";

export function TestimonialsSection() {
  const listRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: 'next' | 'prev') => {
    const node = listRef.current;
    if (!node) {
      return;
    }
    const offset = direction === 'next' ? node.offsetWidth : -node.offsetWidth;
    node.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className={`${containerClass} space-y-14`}>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90 md:text-4xl">Real offers. Real outcomes.</h2>
          <p className="max-w-2xl text-base text-white/60">
            Trusted by students across 200+ campuses. Every quote is tied to verified placement data.
          </p>
        </div>
        <div className="relative">
          <div
            ref={listRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="snap-center min-w-[280px] max-w-sm flex-1 rounded-[1.75rem] border border-white/10 bg-white/10 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.38)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b82f6]/20 text-sm font-semibold text-[#3b82f6]">
                    {testimonial.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-white/50">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-white/70">“{testimonial.quote}”</p>
                <p className="mt-6 text-xs text-white/40">{testimonial.date}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollBy('prev')}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:-translate-y-1"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy('next')}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:-translate-y-1"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
