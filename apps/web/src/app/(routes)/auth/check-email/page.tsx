'use client';

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { AuthCard } from "@/_components/auth/auth-card";
import { InlineMessage } from "@/_components/auth/inline-message";
import type { IconBadgeVariant } from "@/_components/auth/icon-badge";
import { ResendTimer } from "@/_components/auth/resend-timer";
import { authCardMeta } from "@/lib/_constants/auth-data";

const footerCopy = (
  <p>Still waiting? Resend the verification email or contact support.</p>
);

function CheckEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [resendCounter, setResendCounter] = useState(0);
  const email = searchParams.get("email");

  return (
    <AuthCard
      icon={authCardMeta.checkEmail.icon as IconBadgeVariant}
      title={authCardMeta.checkEmail.title}
      subtitle={authCardMeta.checkEmail.subtitle}
      message={
        <InlineMessage tone="info">
          <p>We sent a verification email. Open the link to activate your account.</p>
          {email ? (
            <p className="text-xs text-white/60">
              Sent to <span className="font-semibold text-white">{email}</span>. Make sure to check spam folders too.
            </p>
          ) : null}
        </InlineMessage>
      }
      footer={footerCopy}
    >
      <div className="flex flex-col gap-6">
        <ResendTimer
          key={resendCounter}
          seconds={30}
          onResend={() => setResendCounter((count) => count + 1)}
        />
        <button
          type="button"
          onClick={() => router.push("/auth/signin")}
          className="rounded-full border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:text-white"
        >
          Back to sign in
        </button>
      </div>
    </AuthCard>
  );
}

export default function CheckEmailPage() {
  return (
    <Suspense fallback={null}>
      <CheckEmailContent />
    </Suspense>
  );
}
