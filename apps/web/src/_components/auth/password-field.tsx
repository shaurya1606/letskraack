import { useState } from "react";

import type { PasswordRule } from "../../lib/_types/auth";

import { FormField, type FormFieldProps } from "./form-field";
import { PasswordStrengthMeter } from "./password-strength-meter";

type PasswordFieldProps = Omit<FormFieldProps, "type"> & {
  rules?: PasswordRule[];
  showStrength?: boolean;
};

export function PasswordField({ rules = [], showStrength = false, ...props }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="space-y-4">
      <FormField
        {...props}
        type={visible ? "text" : "password"}
        trailingSlot={
          <button
            type="button"
            onClick={() => setVisible((prev) => !prev)}
            className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/60 transition hover:text-white"
            aria-pressed={visible}
            aria-label={visible ? "Hide password" : "Show password"}
          >
            {visible ? "Hide" : "Show"}
          </button>
        }
      />
      {showStrength && rules.length > 0 && <PasswordStrengthMeter value={String(props.value ?? "")} rules={rules} />}
    </div>
  );
}
