import type { SocialProvider } from "../../lib/_types/auth";

const labelMap: Record<SocialProvider, string> = {
  google: "Continue with Google",
  github: "Continue with GitHub",
  linkedin: "Continue with LinkedIn",
};

const iconMap: Record<SocialProvider, string> = {
  google: "🔍",
  github: "🐙",
  linkedin: "💼",
};

type SocialButtonProps = {
  provider: SocialProvider;
  onClick?: () => void;
};

export function SocialButton({ provider, onClick }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:-translate-y-0.5 hover:text-white"
    >
      <span aria-hidden="true">{iconMap[provider]}</span>
      {labelMap[provider]}
    </button>
  );
}
