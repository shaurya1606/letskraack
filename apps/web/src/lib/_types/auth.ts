export type AuthCardVariant = "signin" | "signup" | "forgot" | "check-email" | "reset";

export type PasswordStrengthLevel = "very-weak" | "weak" | "acceptable" | "strong" | "excellent";

export type PasswordRule = {
  id: string;
  label: string;
  test: (value: string) => boolean;
};

export type SocialProvider = "google" | "github" | "linkedin";
