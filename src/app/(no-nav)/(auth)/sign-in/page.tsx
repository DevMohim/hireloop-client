
import Link from "next/link";
import { SocialButtons } from "@/components/auth/SocialButtons";
import { Card } from "@/components/ui/card";
import SignInForm from "@/components/Form/SignInForm";

export function generateMetadata() {
  return {
    title : "Log in to your account",
    description : "Log in your account for explore more"
  }
}

export default function SignInPage() {

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

      <SignInForm />

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
