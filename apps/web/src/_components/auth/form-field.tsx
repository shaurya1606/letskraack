import type { InputHTMLAttributes, ReactNode } from "react";

export type FormFieldProps = {
  label: string;
  id: string;
  hint?: string;
  error?: string;
  leadingSlot?: ReactNode;
  trailingSlot?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export function FormField({
  label,
  id,
  hint,
  error,
  leadingSlot,
  trailingSlot,
  className,
  type = "text",
  ...props
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-white/70">
        {label}
      </label>
      <div
        className={[
          "group flex items-center gap-2 rounded-2xl border px-3 py-2 transition focus-within:border-[#3b82f6] focus-within:shadow-[0_0_0_2px_rgba(59,130,246,0.35)]",
          error ? "border-[#f87171]/80" : "border-white/10 bg-white/5",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {leadingSlot && <span className="text-white/50">{leadingSlot}</span>}
        <input
          id={id}
          type={type}
          className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          {...props}
        />
        {trailingSlot && <span className="text-white/60">{trailingSlot}</span>}
      </div>
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-white/40">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="flex items-center gap-2 text-xs text-[#fda4af]">
          <span aria-hidden="true">⚠️</span>
          {error}
        </p>
      )}
    </div>
  );
}
