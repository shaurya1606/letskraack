import { useMemo, useState } from "react";

import { authCardMeta } from "../../lib/_constants/auth-data";

import { AuthCard } from "./auth-card";
import { ForgotPasswordForm } from "./forms/forgot-password-form";
import { SignInForm } from "./forms/sign-in-form";
import { SignUpForm } from "./forms/sign-up-form";
import { InlineMessage } from "./inline-message";
import type { IconBadgeVariant } from "./icon-badge";

const backgroundShapes = [
  "before:content-[''] before:absolute before:inset-x-0 before:top-[-40vh] before:h-[60vh] before:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_60%)]",
  "after:content-[''] after:absolute after:bottom-[-20vh] after:right-[10%] after:h-[40vh] after:w-[40vh] after:rounded-full after:bg-[rgba(59,130,246,0.12)] after:blur-3xl",
];

type FlowState = "signin" | "signup" | "forgot" | "check-email" | "signin-success";

export function AuthScreen() {
  const [flow, setFlow] = useState<FlowState>("signin");

  const meta = useMemo(() => {
    switch (flow) {
      case "signup":
        return authCardMeta.signup;
      case "forgot":
        return authCardMeta.forgot;
      case "check-email":
        return authCardMeta.checkEmail;
      case "signin-success":
        return { ...authCardMeta.signin, title: "You’re in!", subtitle: "Redirecting to your workspace." };
      case "signin":
      default:
        return authCardMeta.signin;
    }
  }, [flow]);

  const message = flow === "signin-success"
    ? (<InlineMessage tone="success">Welcome back! We’re syncing your dashboard — this shouldn’t take long.</InlineMessage>)
    : undefined;

  const footerCopy = (
    <p>
      Protected by industry-standard security. By continuing you agree to our use of cookies to keep you signed in.
    </p>
  );

  const renderBody = () => {
    switch (flow) {
      case "signup":
        return (
          <SignUpForm
            onNavigate={() => setFlow("signin")}
            onSubmitSuccess={() => setFlow("check-email")}
          />
        );
      case "forgot":
        return <ForgotPasswordForm onNavigate={() => setFlow("signin")} />;
      case "check-email":
        return (
          <div className="flex flex-col gap-6">
            <InlineMessage tone="info">
              <p>We sent a verification email. Open the link to activate your account.</p>
              <p className="text-xs text-white/60">Didn’t get it? Check spam or request another link.</p>
            </InlineMessage>
            <button
              type="button"
              onClick={() => setFlow("signin")}
              className="rounded-full border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:text-white"
            >
              Back to sign in
            </button>
          </div>
        );
      case "signin-success":
        return (
          <div className="space-y-6 text-center">
            <p className="text-sm text-white/70">Signed in successfully. Opening your dashboard…</p>
            <p className="text-sm text-white/60">If you’re not redirected automatically, head to the placements dashboard.</p>
            <button
              type="button"
              className="rounded-full bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)]"
            >
              Go now
            </button>
          </div>
        );
      case "signin":
      default:
        return (
          <SignInForm
            onNavigate={(next) => setFlow(next)}
            onSubmitSuccess={() => {
              setFlow("signin-success");
            }}
          />
        );
    }
  };

  return (
    <div
      className={`relative flex min-h-screen flex-col items-center justify-center bg-[linear-gradient(160deg,#0f172a,#111827_55%,#1f2937)] px-6 py-20 text-white ${
        backgroundShapes.join(" ")
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_60%)] opacity-80" aria-hidden="true" />
      <div className="w-full max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.5em] text-white/40">LetsKraack Auth</p>
        </div>
        <div className="flex flex-col items-center">
          <AuthCard
            key={flow}
            icon={meta.icon as IconBadgeVariant}
            title={meta.title}
            subtitle={meta.subtitle}
            message={message}
            footer={footerCopy}
          >
            {renderBody()}
          </AuthCard>
        </div>
      </div>
    </div>
  );
}
