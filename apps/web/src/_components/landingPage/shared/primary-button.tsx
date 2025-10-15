import Link from "next/link";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
};

export function PrimaryButton({ href, children, onClick }: PrimaryButtonProps) {
  const baseClass =
    'inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(59,130,246,0.35)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(59,130,246,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3b82f6]';

  if (href) {
    return (
      <Link href={href} className={baseClass} onClick={onClick} aria-label="Start preparing">
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
}
