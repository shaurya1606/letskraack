import type { PasswordRule, SocialProvider } from "../_types/auth";

export const authCardMeta = {
  signin: {
    title: "Welcome back",
    subtitle: "Sign in to pick up where you left off.",
    icon: "lock",
  },
  signup: {
    title: "Create your account",
    subtitle: "Start building — takes a minute.",
    icon: "spark",
  },
  forgot: {
    title: "Need a reset?",
    subtitle: "Enter your email and we’ll send a reset link.",
    icon: "lifebuoy",
  },
  checkEmail: {
    title: "Check your email",
    subtitle: "If an account exists, you’ll get reset instructions shortly.",
    icon: "mail",
  },
  resetSuccess: {
    title: "Password updated",
    subtitle: "You can now sign in with your new password.",
    icon: "shield",
  },
} as const;

export const passwordRules: PasswordRule[] = [
  {
    id: "length",
    label: "At least 8 characters",
    test: (value) => value.length >= 8,
  },
  {
    id: "uppercase",
    label: "Includes an uppercase letter",
    test: (value) => /[A-Z]/.test(value),
  },
  {
    id: "number",
    label: "Includes a number",
    test: (value) => /\d/.test(value),
  },
  {
    id: "symbol",
    label: "Includes a symbol",
    test: (value) => /[^A-Za-z0-9]/.test(value),
  },
];

export const socialProviders: SocialProvider[] = ["google", "github", "linkedin"];

export const termsLink = "#";
export const privacyLink = "#";
