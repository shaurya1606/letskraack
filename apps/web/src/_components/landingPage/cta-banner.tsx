import Link from "next/link";
import { containerClass } from "../../lib/_constants/landing-data";
import { PrimaryButton } from "./shared/primary-button";

export function CtaBanner() {
  return (
    <section id="cta" className="py-24">
      <div className={containerClass}>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#3b82f6]/40 bg-gradient-to-br from-[#1d4ed8] via-[#3b82f6] to-[#1d4ed8] p-10 text-center shadow-[0_50px_140px_rgba(59,130,246,0.5)]">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-white/25 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-black/20 blur-3xl" aria-hidden="true" />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Join India&apos;s Smartest Prep Community</h2>
            <p className="text-base text-white/80">
              Learn, practice, and get hired — the smarter way. Try it free for 14 days, cancel anytime.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href="#">Start Free</PrimaryButton>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/20"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
