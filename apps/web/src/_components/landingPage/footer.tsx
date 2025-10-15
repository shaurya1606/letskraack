import Link from "next/link";
import { containerClass } from "../../lib/_constants/landing-data";
import { LogoMark } from "./shared/logo-mark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-16">
      <div className={`${containerClass} grid gap-10 md:grid-cols-5`}>
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span className="text-sm font-semibold tracking-[0.12em] text-white/80">LetsKraack</span>
          </div>
          <p className="mt-6 max-w-xs text-sm text-white/60">
            The placement operating system engineered for ambitious engineering students across India.
          </p>
          <p className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} LetsKraack. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Product</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>
              <Link href="#features" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="hover:text-white">
                Roadmap
              </Link>
            </li>
            <li>
              <Link href="#cta" className="hover:text-white">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Resources</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>
              <Link href="#insights" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Community
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>
              <Link href="#" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${containerClass} mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-white/40 md:flex-row md:justify-between`}>
        <p>We’ll only send roadmap updates. You can unsubscribe anytime.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white/70">
            Terms
          </Link>
          <Link href="#" className="hover:text-white/70">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white/70">
            Cookie settings
          </Link>
        </div>
      </div>
    </footer>
  );
}
