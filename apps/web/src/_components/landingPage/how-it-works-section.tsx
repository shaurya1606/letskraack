import { containerClass, steps } from "../../lib/_constants/landing-data";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-28">
      <div className={`${containerClass} space-y-12`}>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90 md:text-4xl">How LetsKraack moves you forward</h2>
          <p className="mx-auto max-w-2xl text-base text-white/60">
            A simple, repeatable journey that keeps momentum high and procrastination low.
          </p>
        </div>
        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-y-0 left-0 hidden w-1 bg-gradient-to-b from-[#3b82f6]/50 via-transparent to-[#3b82f6]/50 md:block" aria-hidden="true" />
          <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <li key={step.title} className="relative flex flex-col gap-4 rounded-[1.5rem] border border-white/5 bg-white/[0.06] p-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3b82f6]/20 text-sm font-semibold text-[#3b82f6]">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-sm text-white/60">{step.description}</p>
                {index < steps.length - 1 && (
                  <span
                    className="absolute bottom-6 right-6 h-px w-12 origin-left scale-x-0 bg-[#3b82f6]/40 transition duration-500 ease-out md:bottom-auto md:left-1/2 md:top-full md:h-12 md:w-px md:translate-y-6 md:origin-top"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
