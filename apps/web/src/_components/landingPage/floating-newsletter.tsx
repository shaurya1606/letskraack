'use client';

import { FormEvent, useEffect, useRef, useState } from "react";
import { useTrapFocus } from "../../lib/_hooks/useTrapFocus";

export function FloatingNewsletter() {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useTrapFocus(expanded, formRef);

  useEffect(() => {
    if (!expanded) {
      setStatus('idle');
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpanded(false);
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => document.removeEventListener('keydown', handleKey);
  }, [expanded]);

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const handleClick = (event: PointerEvent) => {
      const container = containerRef.current;

      if (!container) {
        return;
      }

      if (!container.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    document.addEventListener('pointerdown', handleClick);

    return () => document.removeEventListener('pointerdown', handleClick);
  }, [expanded]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('newsletter-email');

    if (typeof email === 'string' && email.includes('@')) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 left-6 z-50 hidden max-w-xs flex-col gap-3 text-sm text-white/80 sm:flex"
    >
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className={`flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur transition ${
          expanded ? 'scale-105 text-white' : 'opacity-90 hover:opacity-100'
        }`}
        aria-expanded={expanded}
        aria-controls="floating-newsletter"
        aria-label="Toggle newsletter signup"
      >
        <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-[#10b981]" aria-hidden="true" />
        Updates
      </button>
      {expanded && (
        <form
          ref={formRef}
          id="floating-newsletter"
          className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-[rgba(15,15,15,0.96)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
          onSubmit={onSubmit}
        >
          <div className="flex items-start justify-between gap-3">
            <label htmlFor="newsletter-email" className="text-xs uppercase tracking-[0.4em] text-white/50">
              Newsletter
            </label>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/10"
              aria-label="Close newsletter"
            >
              ×
            </button>
          </div>
          <input
            id="newsletter-email"
            name="newsletter-email"
            type="email"
            required
            className="rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus-visible:border-[#3b82f6]"
            placeholder="you@example.com"
            aria-describedby="newsletter-help"
          />
          <div className="flex items-center justify-between">
            <span id="newsletter-help" className="text-xs text-white/40">
              Get roadmap drops & features. 2–3 emails/month.
            </span>
            <button type="submit" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#3b82f6] text-white">
              →
            </button>
          </div>
          <div className="text-xs text-white/40">We respect your inbox — unsubscribe anytime.</div>
          <div role="status" aria-live="polite" className="text-xs text-[#10b981]">
            {status === 'success' && 'Thanks — check your inbox.'}
            {status === 'error' && 'Enter a valid email to continue.'}
          </div>
        </form>
      )}
    </div>
  );
}
