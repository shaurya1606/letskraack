import Link from "next/link";
import { blogPosts, containerClass } from "../../lib/_constants/landing-data";

export function BlogSection() {
  return (
    <section id="insights" className="py-24 md:py-28">
      <div className={`${containerClass} space-y-12`}>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold text-white/90 md:text-4xl">Insights & playbooks</h2>
          <p className="mx-auto max-w-2xl text-base text-white/60">
            Actionable essays, teardown videos, and frameworks to keep your prep sharp.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="flex h-full flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/8 p-6">
              <div className="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                {post.date}
              </div>
              <h3 className="text-lg font-semibold text-white">{post.title}</h3>
              <p className="text-sm text-white/60">{post.excerpt}</p>
              <Link href={post.href} className="mt-auto text-sm font-semibold text-[#82aaff] hover:text-white" aria-label="Read article">
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
