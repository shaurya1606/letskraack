import type { InputHTMLAttributes, ReactNode } from "react";

type CheckboxProps = {
  label: ReactNode;
  id: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({ label, id, className, ...props }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={`group inline-flex cursor-pointer items-center gap-3 text-sm text-white/70 ${className ?? ""}`.trim()}
    >
      <span className="relative">
        <input
          id={id}
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <span className="flex h-5 w-5 items-center justify-center rounded-lg border border-white/20 bg-white/5 transition peer-checked:border-[#3b82f6] peer-checked:bg-[#3b82f6]/80">
          <span className="hidden h-3 w-3 rotate-45 border-b-2 border-r-2 border-white peer-checked:inline-block" aria-hidden="true" />
        </span>
      </span>
      <span>{label}</span>
    </label>
  );
}
