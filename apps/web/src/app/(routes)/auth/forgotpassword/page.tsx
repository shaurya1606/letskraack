'use client';

import { useRouter } from "next/navigation";

import { AuthCard } from "@/_components/auth/auth-card";
import { ForgotPasswordForm } from "@/_components/auth/forms/forgot-password-form";
import type { IconBadgeVariant } from "@/_components/auth/icon-badge";
import { authCardMeta } from "@/lib/_constants/auth-data";

const footerCopy = (
  <p>We’ll only send password reset emails — no spam, promise.</p>
);

export default function ForgotPasswordPage() {
  const router = useRouter();
  const meta = authCardMeta.forgot;

  return (
    <AuthCard
      icon={meta.icon as IconBadgeVariant}
      title={meta.title}
      subtitle={meta.subtitle}
      footer={footerCopy}
    >
      <ForgotPasswordForm onNavigate={() => router.push("/auth/signin")} />
    </AuthCard>
  );
}
