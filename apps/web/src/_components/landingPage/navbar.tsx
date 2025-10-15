'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { containerClass, navLinks } from "../../lib/_constants/landing-data";
import { useBodyScrollLock } from "../../lib/_hooks/useBodyScrollLock";
import { useTrapFocus } from "../../lib/_hooks/useTrapFocus";
import { LogoMark } from "./shared/logo-mark";
import { PrimaryButton } from "./shared/primary-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useTrapFocus(mobileOpen, mobileMenuRef);
  useBodyScrollLock(mobileOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? 'bg-[rgba(15,15,15,0.88)] backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.45)]'
          : 'bg-transparent'
      }`}
    >
      <div className={`${containerClass} flex items-center justify-between py-4`}>
        <div className="flex items-center gap-3">
          <Link href="#hero" className="flex items-center gap-3" aria-label="LetsKraack home">
            <LogoMark />
            <span className="text-sm font-semibold tracking-[0.12em] text-white/80">LetsKraack</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-10 text-sm font-medium text-white/70 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#login"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white"
          >
            Log in
          </Link>
          <PrimaryButton href="#cta">Start Preparing</PrimaryButton>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-6 bg-current transition ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-current transition ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-current transition ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } lg:hidden`}
      >
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur" aria-hidden={!mobileOpen}></div>
        <div className="fixed inset-y-0 right-0 z-50 w-[min(320px,80vw)] bg-[rgba(15,15,15,0.97)] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.6)]">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="text-sm font-semibold tracking-[0.12em] text-white/80">LetsKraack</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
              aria-label="Close navigation"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-col gap-5 text-base font-medium text-white/80" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-transparent px-3 py-2 hover:border-white/10 hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="#login"
              className="rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <PrimaryButton href="#cta" onClick={() => setMobileOpen(false)}>
              Start Preparing
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
}
