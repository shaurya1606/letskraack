'use client';

import { useRouter } from "next/navigation";

import { AuthCard } from "@/_components/auth/auth-card";
import { SignUpForm } from "@/_components/auth/forms/sign-up-form";
import type { IconBadgeVariant } from "@/_components/auth/icon-badge";
import { authCardMeta } from "@/lib/_constants/auth-data";

const footerCopy = (
  <p>By signing up you consent to secure session handling and important product updates.</p>
);

export default function SignUpPage() {
  const router = useRouter();

  return (
    <AuthCard
      icon={authCardMeta.signup.icon as IconBadgeVariant}
      title={authCardMeta.signup.title}
      subtitle={authCardMeta.signup.subtitle}
      footer={footerCopy}
    >
      <SignUpForm
        onNavigate={() => router.push("/auth/signin")}
        onSubmitSuccess={({ email }) => {
          const search = email ? `?email=${encodeURIComponent(email)}` : "";
          router.push(`/auth/check-email${search}`);
        }}
      />
    </AuthCard>
  );
}
