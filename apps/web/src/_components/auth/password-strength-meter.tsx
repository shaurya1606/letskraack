import { useMemo } from "react";

import type { PasswordRule, PasswordStrengthLevel } from "../../lib/_types/auth";

const levelMap: Record<PasswordStrengthLevel, { label: string; color: string; width: string }> = {
  "very-weak": { label: "Very weak", color: "bg-[#f87171]", width: "w-1/5" },
  weak: { label: "Weak", color: "bg-[#fb7185]", width: "w-2/5" },
  acceptable: { label: "Acceptable", color: "bg-[#fbbf24]", width: "w-3/5" },
  strong: { label: "Strong", color: "bg-[#34d399]", width: "w-4/5" },
  excellent: { label: "Excellent", color: "bg-[#22d3ee]", width: "w-full" },
};

function getStrengthLevel(value: string, rules: PasswordRule[]): PasswordStrengthLevel {
  const passedCount = rules.reduce((acc, rule) => (rule.test(value) ? acc + 1 : acc), 0);

  if (!value) return "very-weak";
  if (passedCount <= 1) return "weak";
  if (passedCount === 2) return "acceptable";
  if (passedCount === 3) return "strong";
  return "excellent";
}

type PasswordStrengthMeterProps = {
  value: string;
  rules: PasswordRule[];
};

export function PasswordStrengthMeter({ value, rules }: PasswordStrengthMeterProps) {
  const level = useMemo(() => getStrengthLevel(value, rules), [value, rules]);
  const { label, color, width } = levelMap[level];

  return (
    <div className="space-y-3" aria-live="polite">
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full origin-left scale-x-100 rounded-full ${color} transition-all duration-200 ${
            value ? width : "w-0"
          }`}
        />
      </div>
      <div className="flex items-center justify-between text-xs text-white/50">
        <span className="font-medium text-white/70">{label}</span>
        <span>{value ? "Keep it unique and memorable." : "Start typing to measure strength."}</span>
      </div>
      <ul className="space-y-1 text-xs text-white/40">
        {rules.map((rule) => {
          const passes = rule.test(value);
          return (
            <li key={rule.id} className="flex items-center gap-2">
              <span
                className={`inline-flex h-2 w-2 rounded-full ${passes ? "bg-[#34d399]" : "bg-white/20"}`}
                aria-hidden="true"
              />
              <span className={passes ? "text-white/70" : undefined}>{rule.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
