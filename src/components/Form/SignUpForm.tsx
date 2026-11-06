"use client";
import React, { FormEvent } from "react";
import { Button } from "../ui/button";
import {
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  ShieldCheck,
  User,
  Lock,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { AuthField } from "../auth/AuthField";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Checkbox } from "../ui/checkbox";
const roleOptionClass =
  "flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg text-[13px] font-medium text-neutral-400 transition-colors hover:text-neutral-200 peer-checked:bg-[#5b5bd6] peer-checked:text-white peer-checked:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_20px_-10px_rgba(91,91,214,0.9)] peer-focus-visible:ring-2 peer-focus-visible:ring-[#adadff]/70 peer-focus-visible:outline-none";
const SignUpForm = () => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      image?: string;
    };

    const { data, error } = await signUp.email({
      ...userData,
    });
    if (!error) {
      router.refresh();
      router.push("/sign-in");
    }
    console.log(data);
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <fieldset className="space-y-2">
        <legend className="text-[13px] font-medium text-neutral-300">
          Account type
        </legend>

        {/* role */}
        <div className="grid grid-cols-3 gap-1 rounded-xl border border-white/10 bg-white/3 p-1">
          <label>
            <input
              type="radio"
              name="role"
              value="candidate"
              defaultChecked
              className="peer sr-only"
            />
            <span className={roleOptionClass}>
              <UserRound className="hidden size-3.5 sm:block" />
              Candidate
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="employer"
              className="peer sr-only"
            />
            <span className={roleOptionClass}>
              <BriefcaseBusiness className="hidden size-3.5 sm:block" />
              Employer
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="admin"
              className="peer sr-only"
            />
            <span className={roleOptionClass}>
              <ShieldCheck className="hidden size-3.5 sm:block" />
              Admin
            </span>
          </label>
        </div>
      </fieldset>

      <AuthField
        id="name"
        name="name"
        type="text"
        label="Full name"
        icon={User}
        placeholder="Jordan Ellis"
        autoComplete="name"
        required
      />

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
        placeholder="Create a password"
        autoComplete="new-password"
        minLength={8}
        hint="Use at least 8 characters, including a number and a symbol."
        required
      />

      <label className="flex cursor-pointer items-start gap-2.5 text-[12.5px] leading-relaxed text-neutral-400 select-none">
        <Checkbox
          id="terms"
          name="terms"
          required
          className="mt-0.5 border-white/20 bg-white/3 data-checked:border-[#5b5bd6] data-checked:bg-[#5b5bd6] data-checked:text-white"
        />
        <span>
          I agree to HireLoop&apos;s{" "}
          <Link
            href="/terms"
            className="rounded-sm font-medium text-neutral-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#8b8bf8]/60 focus-visible:outline-none"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="rounded-sm font-medium text-neutral-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#8b8bf8]/60 focus-visible:outline-none"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <Button
        type="submit"
        className="mt-1 h-11 w-full rounded-xl bg-[#5b5bd6] text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_16px_32px_-14px_rgba(91,91,214,0.9)] transition-colors hover:bg-[#6a6ae4] focus-visible:ring-[#adadff]/50 cursor-pointer"
      >
        Create account
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
};

export default SignUpForm;
