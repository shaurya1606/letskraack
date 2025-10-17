import { FormEvent, useState } from "react";

import { InlineMessage } from "../inline-message";
import { FormField } from "../form-field";
import { ResendTimer } from "../resend-timer";

export type ForgotPasswordFormProps = {
  onNavigate: (flow: "signin") => void;
};

export function ForgotPasswordForm({ onNavigate }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      return;
    }
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex flex-col gap-6">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <InlineMessage tone="info">
            Enter the email you use for LetsKraack. If an account exists, we’ll send reset instructions.
          </InlineMessage>
          <FormField
            id="forgot-email"
            label="Email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={email && !email.includes("@") ? "Use a valid email address." : undefined}
          />
          <button
            type="submit"
            disabled={pending || !email.includes("@")}
            className={`rounded-full bg-[#3b82f6] py-3 text-sm font-semibold text-white transition ${
              pending ? "opacity-60" : "hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)]"
            }`}
          >
            {pending ? "Sending…" : "Send reset link"}
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <InlineMessage tone="success">
            <p>Email sent — check your inbox. Didn’t get it? We can resend after the timer.</p>
            <p className="text-xs text-white/60">Should arrive in under 2 minutes.</p>
          </InlineMessage>
          <ResendTimer seconds={30} onResend={() => setSubmitted(true)} />
          <button
            type="button"
            onClick={() => onNavigate("signin")}
            className="rounded-full border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:text-white"
          >
            Back to sign in
          </button>
        </div>
      )}
      {!submitted && (
        <button
          type="button"
          onClick={() => onNavigate("signin")}
          className="text-center text-sm text-white/70 underline-offset-4 transition hover:text-white hover:underline"
        >
          Never mind, take me back
        </button>
      )}
    </div>
  );
}
