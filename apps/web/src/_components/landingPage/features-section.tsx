import Link from "next/link";
import { containerClass, features } from "../../lib/_constants/landing-data";

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-28">
      <div className={`${containerClass} space-y-14`}>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90 md:text-4xl">Everything you need to go from student to offer</h2>
          <p className="max-w-2xl text-base text-white/60">
            Every module, playbook, and interaction is designed to keep you focused on the single goal: ship proof of skill and crack your interviews.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)] transition duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="absolute -right-16 -top-20 h-40 w-40 rounded-full bg-[#3b82f6]/20 blur-2xl transition duration-300 group-hover:scale-125" aria-hidden="true" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b82f6]/20 text-[#3b82f6]">
                <span className="text-lg" aria-hidden="true">
                  ●
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-white/70">{feature.description}</p>
              <Link
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#82aaff] transition group-hover:text-white"
                aria-label={feature.cta}
              >
                {feature.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
