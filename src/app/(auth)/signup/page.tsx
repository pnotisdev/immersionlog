import { Suspense } from "react";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata = {
  title: "Create a free account",
  description: "Start tracking your Japanese immersion: hours, characters read, streaks and goals across anime, manga, VNs, books and more.",
  alternates: { canonical: "/signup" },
};

export default function SignupPage() {
  return (
    <Suspense>
      <AuthForm mode="signup" />
    </Suspense>
  );
}
