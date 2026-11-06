"use client";
import Link from "next/link";
import { ArrowRight, Lock, Mail } from "lucide-react";

import { AuthField } from "@/components/auth/AuthField";
import { SocialButtons } from "@/components/auth/SocialButtons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FormEvent } from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


export default function SignInPage() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await signIn.email({
      ...userData,
      rememberMe: true,
      callbackURL: "/",
    });
    if (!error) {
      router.refresh();
    }
    console.log("sign in form", data, error);
  };
  return (
    <Card className="gap-0 rounded-3xl border-0 bg-white/[0.035] p-6 text-white shadow-[0_40px_80px_-50px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.07)] ring-1 ring-white/10 backdrop-blur-xl sm:p-8">
      <div>
        <h1 className="text-[26px] leading-tight font-semibold tracking-[-0.02em] text-white">
          Welcome back
        </h1>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-neutral-400">
          Sign in to pick up where you left off — new roles are waiting.
        </p>
      </div>

      <div className="mt-6">
        <SocialButtons />
      </div>

      <div className="my-6 flex items-center gap-3">
        <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
        <span className="text-[10.5px] font-medium tracking-[0.12em] text-neutral-500 uppercase">
          or with email
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <AuthField
          id="email"
          name="email"
          type="email"
          label="Email address"
          icon={Mail}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />

        <AuthField
          id="password"
          name="password"
          type="password"
          label="Password"
          icon={Lock}
          placeholder="Enter your password"
          autoComplete="new-password"
          required
          action={
            <Link
              href="/forgot-password"
              className="rounded-sm text-[12px] font-medium text-[#8b8bf8] transition-colors hover:text-[#adadff] focus-visible:ring-2 focus-visible:ring-[#8b8bf8]/60 focus-visible:outline-none"
            >
              Forgot password?
            </Link>
          }
        />

        <label className="flex w-fit cursor-pointer items-center gap-2.5 text-[13px] text-neutral-400 select-none">
          <Checkbox
            id="remember"
            name="remember"
            className="border-white/20 bg-white/3 data-checked:border-[#5b5bd6] data-checked:bg-[#5b5bd6] data-checked:text-white"
          />
          Keep me signed in
        </label>

        <Button
          type="submit"
          className="mt-1 h-11 w-full rounded-xl bg-[#5b5bd6] text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_16px_32px_-14px_rgba(91,91,214,0.9)] transition-colors hover:bg-[#6a6ae4] focus-visible:ring-[#adadff]/50 cursor-pointer"
        >
          Sign in
          <ArrowRight className="size-4" />
        </Button>
      </form>

      <p className="mt-6 border-t border-white/6 pt-5 text-center text-[13px] text-neutral-500">
        New to HireLoop?{" "}
        <Link
          href="/sign-up"
          className="rounded-sm font-semibold text-[#adadff] transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#8b8bf8]/60 focus-visible:outline-none"
        >
          Create an account
        </Link>
      </p>
    </Card>
  );
}
