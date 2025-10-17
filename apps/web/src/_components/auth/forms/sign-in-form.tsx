import { FormEvent, useMemo, useState } from "react";

import { authCardMeta, socialProviders } from "../../../lib/_constants/auth-data";

import { Checkbox } from "../checkbox";
import { FormField } from "../form-field";
import { InlineMessage } from "../inline-message";
import { PasswordField } from "../password-field";
import { SocialButton } from "../social-button";

export type SignInFormProps = {
  onNavigate: (flow: "signup" | "forgot") => void;
  onSubmitSuccess?: () => void;
};

export function SignInForm({ onNavigate, onSubmitSuccess }: SignInFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);

  const helperText = useMemo(() => {
    if (!error) return authCardMeta.signin.subtitle;
    return error;
  }, [error]);

  const validate = () => {
    if (!email.includes("@")) {
      setError("Email looks malformed — check for typos.");
      return false;
    }
    if (password.length < 6) {
      setError("Password needs at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!validate()) {
      return;
    }

    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      if (password !== "letskraack") {
        setAttempts((prev) => prev + 1);
        if (attempts >= 2) {
          setError("We couldn’t sign you in. Double-check your email and password or reset your password.");
        } else {
          setError("Incorrect email or password. Try again or reset your password.");
        }
        return;
      }

      onSubmitSuccess?.();
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {error && <InlineMessage tone="error">{helperText}</InlineMessage>}
      <FormField
        id="sign-in-email"
        label="Email"
        type="email"
        inputMode="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={email && !email.includes("@") ? "Use a valid email address." : undefined}
      />
      <PasswordField
        id="sign-in-password"
        label="Password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        hint="Use the secure password you created."
      />
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/70">
        <Checkbox
          id="remember-me"
          label="Remember me"
          checked={remember}
          onChange={(event) => setRemember(event.target.checked)}
        />
        <button
          type="button"
          onClick={() => onNavigate("forgot")}
          className="text-white/70 underline-offset-4 transition hover:text-white hover:underline"
        >
          Forgot password?
        </button>
      </div>
      <button
        type="submit"
        disabled={pending}
        className={`rounded-full bg-[#3b82f6] py-3 text-sm font-semibold text-white transition ${
          pending ? "opacity-60" : "hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)]"
        }`}
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
      <div className="relative py-2 text-center text-xs text-white/40">
        <span className="relative z-10 bg-[rgba(15,15,15,0.85)] px-3">or continue with</span>
        <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/10" aria-hidden="true" />
      </div>
      <div className="grid gap-3">
        {socialProviders.map((provider) => (
          <SocialButton key={provider} provider={provider} />
        ))}
      </div>
      <div className="text-center text-sm text-white/60">
        New here?{" "}
        <button
          type="button"
          onClick={() => onNavigate("signup")}
          className="font-semibold text-white hover:underline"
        >
          Create an account
        </button>
      </div>
    </form>
  );
}
