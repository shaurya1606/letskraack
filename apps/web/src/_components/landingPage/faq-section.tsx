import { containerClass, faqItems } from "../../lib/_constants/landing-data";

export function FaqSection() {
  return (
    <section id="faq" className="py-20">
      <div className={`${containerClass} space-y-10`}>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90">Answers for quick decisions</h2>
          <p className="mx-auto max-w-2xl text-base text-white/60">
            Still curious? Here are the top questions from students and training & placement cells.
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6">
              <summary className="cursor-pointer list-none text-left text-lg font-semibold text-white">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-sm font-normal text-white/50 group-open:hidden">+</span>
                  <span className="hidden text-sm font-normal text-white/50 group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-4 text-sm text-white/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
