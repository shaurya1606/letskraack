import Link from "next/link";
import type { ReactNode } from "react";

type SecondaryButtonProps = {
  href: string;
  children: ReactNode;
};

export function SecondaryButton({ href, children }: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition duration-200 hover:-translate-y-1 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40"
      aria-label="View roadmap"
    >
      {children}
    </Link>
  );
}
