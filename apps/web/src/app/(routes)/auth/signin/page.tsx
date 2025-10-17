'use client';

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { AuthCard } from "@/_components/auth/auth-card";
import { SignInForm } from "@/_components/auth/forms/sign-in-form";
import { InlineMessage } from "@/_components/auth/inline-message";
import type { IconBadgeVariant } from "@/_components/auth/icon-badge";
import { authCardMeta } from "@/lib/_constants/auth-data";

const footerCopy = (
  <p>Protected by industry-standard security. Continuing keeps you signed in with secure cookies.</p>
);

type ViewState = "form" | "success";

export default function SignInPage() {
  const router = useRouter();
  const [view, setView] = useState<ViewState>("form");

  const meta = useMemo(() => {
    if (view === "success") {
      return {
        ...authCardMeta.signin,
        title: "You’re in!",
        subtitle: "Redirecting to your workspace.",
      };
    }
    return authCardMeta.signin;
  }, [view]);

  return (
    <AuthCard
      icon={meta.icon as IconBadgeVariant}
      title={meta.title}
      subtitle={meta.subtitle}
      message={
        view === "success" ? (
          <InlineMessage tone="success">
            Welcome back! We’re syncing your dashboard — this shouldn’t take long.
          </InlineMessage>
        ) : undefined
      }
      footer={footerCopy}
    >
      {view === "success" ? (
        <div className="space-y-6 text-center">
          <p className="text-sm text-white/70">Signed in successfully. Opening your dashboard…</p>
          <p className="text-sm text-white/60">
            If you’re not redirected automatically, head to the placements dashboard.
          </p>
          <button
            type="button"
            className="rounded-full bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)]"
          >
            Go now
          </button>
        </div>
      ) : (
        <SignInForm
          onNavigate={(next) => {
            if (next === "signup") {
              router.push("/auth/signup");
            } else {
              router.push("/auth/forgotpassword");
            }
          }}
          onSubmitSuccess={() => setView("success")}
        />
      )}
    </AuthCard>
  );
}
