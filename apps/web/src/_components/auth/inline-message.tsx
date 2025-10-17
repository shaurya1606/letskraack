import type { ReactNode } from "react";

type InlineMessageProps = {
  tone: "success" | "error" | "info";
  children: ReactNode;
};

const toneStyles: Record<InlineMessageProps["tone"], { bg: string; border: string; icon: string }> = {
  success: {
    bg: "bg-[#047857]/15",
    border: "border-[#10b981]/40",
    icon: "✅",
  },
  error: {
    bg: "bg-[#fee2e2]/10",
    border: "border-[#f87171]/40",
    icon: "⚠️",
  },
  info: {
    bg: "bg-[#2563eb]/15",
    border: "border-[#60a5fa]/40",
    icon: "💡",
  },
};

export function InlineMessage({ tone, children }: InlineMessageProps) {
  const { bg, border, icon } = toneStyles[tone];
  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm text-white/80 shadow-[0_12px_32px_rgba(15,23,42,0.25)] ${bg} ${border}`}
      role="status"
      aria-live={tone === "error" ? "assertive" : "polite"}
    >
      <span aria-hidden="true">{icon}</span>
      <div className="space-y-1 text-left">{children}</div>
    </div>
  );
}
