import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Banknote,
  Zap,
} from "lucide-react";

import logo from "@/assest/images/logo.png";

const highlights = [
  {
    icon: BadgeCheck,
    title: "Verified companies",
    description: "Every employer is reviewed before a role goes live.",
  },
  {
    icon: Banknote,
    title: "Salary transparency",
    description: "Pay ranges are shown up front — no guessing games.",
  },
  {
    icon: Zap,
    title: "Apply in minutes",
    description: "One profile, one click, and you are in the loop.",
  },
] as const;

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-svh overflow-hidden bg-[#0a0a0c] text-white">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-40 size-144 rounded-full bg-[#5b5bd6]/25 blur-[140px]" />
        <div className="absolute left-[30%] -bottom-56 size-128 rounded-full bg-[#8b8bf8]/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]]" />
      </div>

      <div className="relative mx-auto flex min-h-svh w-full max-w-[100rem] flex-col lg:grid lg:grid-cols-[1.05fr_1fr]">
        {/* Brand panel (desktop only) */}
        <aside className="relative hidden flex-col gap-14 overflow-hidden border-r border-white/6 px-10 py-10 lg:flex xl:px-16 ">
          <Link
            href="/"
            aria-label="HireLoop home"
            className="w-fit rounded-md transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#8b8bf8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0a0c] focus-visible:outline-none"
          >
            <Image src={logo} alt="HireLoop" priority className="h-8 w-auto" />
          </Link>

          <div className="max-w-120 py-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-neutral-300 uppercase">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              12,400+ roles open now
            </span>

            <h1 className="mt-6 text-[2.6rem] leading-[1.08] font-semibold tracking-[-0.03em] text-balance xl:text-5xl">
              Find work that{" "}
              <span className="bg-[linear-gradient(90deg,#c7c7ff_0%,#8b8bf8_55%,#6a6ae4_100%)] bg-clip-text text-transparent">
                fits your life.
              </span>
            </h1>

            <p className="mt-5 max-w-108 text-[15px] leading-relaxed text-neutral-400">
              HireLoop connects ambitious people with teams building what is
              next — with transparent pay and a hiring process that respects
              your time.
            </p>

            <ul className="mt-9 space-y-5">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3.5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/8 bg-white/4 text-[#adadff]">
                    <item.icon className="size-4" />
                  </span>
                  <div className="pt-0.5">
                    <p className="text-[13.5px] font-medium text-white">
                      {item.title}
                    </p>
                    <p className="mt-0.5 max-w-88 text-[12.5px] leading-relaxed text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Form panel */}
        <main className="relative flex min-h-svh flex-col px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              aria-label="HireLoop home"
              className="w-fit rounded-md transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#8b8bf8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0a0c] focus-visible:outline-none lg:hidden"
            >
              <Image
                src={logo}
                alt="HireLoop"
                priority
                className="h-7 w-auto"
              />
            </Link>

            <Link
              href="/"
              className="ml-auto inline-flex items-center gap-1.5 rounded-md text-[12px] font-medium text-neutral-500 transition-colors hover:text-neutral-200 focus-visible:ring-2 focus-visible:ring-[#8b8bf8] focus-visible:outline-none"
            >
              <ArrowLeft className="size-3.5" />
              Back to home
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center py-8 lg:py-10">
            <div className="w-full max-w-106">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
