import { FormEvent, useState } from "react";

import { passwordRules, privacyLink, socialProviders, termsLink } from "../../../lib/_constants/auth-data";

import { Checkbox } from "../checkbox";
import { FormField } from "../form-field";
import { InlineMessage } from "../inline-message";
import { PasswordField } from "../password-field";
import { SocialButton } from "../social-button";

export type SignUpFormProps = {
  onNavigate: (flow: "signin") => void;
  onSubmitSuccess?: (payload: { email: string }) => void;
};

export function SignUpForm({ onNavigate, onSubmitSuccess }: SignUpFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    if (!email.includes("@")) {
      setError("Email looks malformed — check for typos.");
      return false;
    }
    const unmetRule = passwordRules.find((rule) => !rule.test(password));
    if (unmetRule) {
      setError(`Password needs work: ${unmetRule.label}.`);
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords don’t match. Try again.");
      return false;
    }
    if (!termsAccepted) {
      setError("Please agree to the Terms and Privacy before continuing.");
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
      onSubmitSuccess?.({ email });
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {error && <InlineMessage tone="error">{error}</InlineMessage>}
      <FormField
        id="sign-up-email"
        label="Email"
        type="email"
        inputMode="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={email && !email.includes("@") ? "Use a valid email address." : undefined}
      />
      <PasswordField
        id="sign-up-password"
        label="Password"
        autoComplete="new-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        showStrength
        rules={passwordRules}
      />
      <PasswordField
        id="sign-up-confirm-password"
        label="Confirm password"
        autoComplete="new-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        error={confirmPassword && confirmPassword !== password ? "Passwords must match." : undefined}
      />
      <FormField
        id="sign-up-referral"
        label="Invite or referral code"
        placeholder="Optional"
        value={referralCode}
        onChange={(event) => setReferralCode(event.target.value)}
        hint="Have a code from your campus TPC or friend? Drop it here."
      />
      <Checkbox
        id="terms"
        label={
          <span>
            I agree to the{' '}
            <a href={termsLink} className="text-white hover:underline" target="_blank" rel="noreferrer">
              Terms
            </a>
            {' '}and{' '}
            <a href={privacyLink} className="text-white hover:underline" target="_blank" rel="noreferrer">
              Privacy
            </a>
          </span>
        }
        checked={termsAccepted}
        onChange={(event) => setTermsAccepted(event.target.checked)}
      />
      <button
        type="submit"
        disabled={pending}
        className={`rounded-full bg-[#3b82f6] py-3 text-sm font-semibold text-white transition ${
          pending ? "opacity-60" : "hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)]"
        }`}
      >
        {pending ? "Creating account…" : "Create account"}
      </button>
      <div className="relative py-2 text-center text-xs text-white/40">
        <span className="relative z-10 bg-[rgba(15,15,15,0.85)] px-3">or start faster</span>
        <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/10" aria-hidden="true" />
      </div>
      <div className="grid gap-3">
        {socialProviders.map((provider) => (
          <SocialButton key={provider} provider={provider} />
        ))}
      </div>
      <div className="text-center text-sm text-white/60">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => onNavigate("signin")}
          className="font-semibold text-white hover:underline"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
