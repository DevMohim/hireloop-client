
import Link from "next/link";
import { SocialButtons } from "@/components/auth/SocialButtons";
import { Card } from "@/components/ui/card";
import SignUpForm from "@/components/Form/SignUpForm";






export default function SignUpPage() {
  
  return (
    <Card className="gap-0 rounded-3xl border-0 bg-white/[0.035] p-6 text-white shadow-[0_40px_80px_-50px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.07)] ring-1 ring-white/10 backdrop-blur-xl sm:p-8">
      <div>
        <h1 className="text-[26px] leading-tight font-semibold tracking-[-0.02em] text-white">
          Create your account
        </h1>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-neutral-400">
          Join thousands of professionals finding their next opportunity.
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

      <SignUpForm />

      <p className="mt-6 border-t border-white/6 pt-5 text-center text-[13px] text-neutral-500">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="rounded-sm font-semibold text-[#adadff] transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#8b8bf8]/60 focus-visible:outline-none"
        >
          Sign in
        </Link>
      </p>
    </Card>
  );
}

export function generateMetadata () {
  return {
    title: 'Create an account | HireLoop',
    description : 'Create an account in HireLoop website'
  }
}