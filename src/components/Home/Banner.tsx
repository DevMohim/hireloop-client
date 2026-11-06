import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Building2,
  MapPin,
  Search,
  Sparkles,
  ThumbsUp,
  Users,
} from "lucide-react";

// folder-এর নাম সত্যিই "assest" হলে এটাই থাকবে, নইলে "@/assets/..." করুন
import globe from "@/assest/images/globe.png";

const trendingSearches = [
  "Product Designer",
  "UX Designer",
  "Engineering",
  "Product Manager",
] as const;

const stats = [
  { value: "50K", label: "Active Jobs", icon: BriefcaseBusiness },
  { value: "12K", label: "Companies", icon: Building2 },
  { value: "2M", label: "Job Seekers", icon: Users },
  { value: "97%", label: "Satisfaction Rate", icon: ThumbsUp },
] as const;

const Banner = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#050507] text-white"
    >
      {/* Layer 1: ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1b1b1b_0%,#141418_32%,#09090d_68%,#050507_100%)]" />
        <div className="absolute top-[14%] left-1/2 h-136 w-232 -translate-x-1/2 rounded-full bg-[#5b5bd6]/20 blur-[140px]" />
        <div className="absolute top-[48%] left-1/2 h-152 w-280 -translate-x-1/2 rounded-full bg-[#4f4fbe]/15 blur-[150px]" />
        <div className="absolute top-[44%] left-[12%] size-104 rounded-full bg-[#7c6cff]/10 blur-[120px]" />
        <div className="absolute top-[38%] right-[8%] size-96 rounded-full bg-[#ff7a00]/5 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.04),transparent_45%)]" />
      </div>

      {/* Layer 2: globe artwork (glow-এর ওপরে, content-এর নিচে) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-[75%]"
      >
        <Image
          src={globe}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-[50%_43%] opacity-90 mask-[linear-gradient(to_bottom,transparent_0%,black_30%,black_100%)]"
        />
        {/* নিচের দিকে page-এর সাথে blend */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_55%,rgba(5,5,7,0.5)_80%,#050507_100%)]" />
      </div>

      {/* Layer 3: content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-12 pb-10 text-center sm:px-6 sm:pt-16 sm:pb-12 lg:px-8 lg:pt-20 lg:pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 backdrop-blur-md">
          <span
            aria-hidden="true"
            className="grid size-4 place-items-center rounded-lg bg-[#ff7a00]/15 text-[#ffab5e]"
          >
            <Sparkles className="size-2.5" />
          </span>
          <span className="text-[10px] font-semibold tracking-[0.12em] text-neutral-400 uppercase">
            <span className="text-[#ffb066]">10,000+</span> new jobs this month
          </span>
        </div>

        <h1
          id="hero-heading"
          className="mx-auto mt-5 max-w-4xl text-4xl leading-[1.06] font-semibold tracking-[-0.035em] text-balance text-white sm:text-5xl lg:text-[3.5rem]"
        >
          Find Your Dream Job Today
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-balance text-neutral-400 sm:mt-5 sm:text-[15px] lg:text-base">
          HireLoop connects top talent with world-class companies. Explore
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search */}
        <form
          action="/jobs"
          method="get"
          className="mx-auto mt-7 w-full max-w-3xl rounded-2xl border border-white/9 bg-[#141417]/90 p-2 text-left shadow-[0_28px_70px_-35px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-colors focus-within:border-white/20 sm:mt-8"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-0">
            <div className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl px-3 py-2.5 transition-colors focus-within:bg-white/4 sm:py-1.5">
              <Search
                aria-hidden="true"
                className="size-4 shrink-0 text-neutral-500"
              />
              <label htmlFor="job-search" className="sr-only">
                Job title or company
              </label>
              <input
                id="job-search"
                name="q"
                type="text"
                placeholder="Job title or company"
                autoComplete="off"
                className="h-8 w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
              />
            </div>

            <span
              aria-hidden="true"
              className="mx-3 h-px bg-white/6 sm:mx-2 sm:h-8 sm:w-px sm:bg-white/10"
            />

            <div className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl px-3 py-2.5 transition-colors focus-within:bg-white/4 sm:py-1.5">
              <MapPin
                aria-hidden="true"
                className="size-4 shrink-0 text-neutral-500"
              />
              <label htmlFor="location-search" className="sr-only">
                Location or remote
              </label>
              <input
                id="location-search"
                name="location"
                type="text"
                placeholder="Location or Remote"
                autoComplete="off"
                className="h-8 w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
              />
            </div>

            <button
              type="submit"
              aria-label="Search jobs"
              className="mt-1 inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#5b5bd6] text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_10px_24px_-10px_rgba(91,91,214,0.9)] transition-colors hover:bg-[#6a6ae4] focus-visible:ring-2 focus-visible:ring-[#adadff]/70 focus-visible:outline-none sm:mt-0 sm:ml-1 sm:size-11 sm:w-11 sm:shrink-0 sm:px-0"
            >
              <Search aria-hidden="true" className="size-4" />
              <span className="sm:hidden">Search jobs</span>
            </button>
          </div>
        </form>

        {/* Trending */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="text-[11px] text-neutral-500 sm:text-xs">
            Trending:
          </span>
          {trendingSearches.map((term) => (
            <Link
              key={term}
              href={`/jobs?q=${encodeURIComponent(term)}`}
              className="rounded-full border border-white/8 bg-white/[0.035] px-3 py-1 text-[11px] font-medium text-neutral-400 transition-colors hover:border-white/15 hover:bg-white/[0.07] hover:text-white focus-visible:ring-2 focus-visible:ring-[#8b8bf8]/60 focus-visible:outline-none sm:text-xs"
            >
              {term}
            </Link>
          ))}
        </div>

        {/* Tagline: এখন normal flow-এ, absolute নয় */}
        <p className="mx-auto mt-16 max-w-md text-sm leading-relaxed font-medium text-balance text-neutral-200/90 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] sm:mt-24 sm:max-w-lg sm:text-base lg:mt-32 lg:text-lg">
          Helping over 2 million job seekers find their dream positions.
        </p>

        {/* Stats */}
        <ul className="mt-8 grid grid-cols-2 gap-3 text-left sm:gap-4 lg:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <li
              key={label}
              className="relative overflow-hidden rounded-xl border border-white/8 bg-[#0d0d11]/85 p-4 shadow-[0_24px_60px_-35px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md sm:p-5"
            >
              <span
                aria-hidden="true"
                className="absolute -top-8 -right-8 size-20 rounded-full bg-[#5b5bd6]/10 blur-2xl"
              />
              <Icon
                aria-hidden="true"
                className="relative size-4 text-neutral-400 sm:size-4.5"
              />
              <p className="relative mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {value}
              </p>
              <p className="relative mt-1 text-[11px] font-medium text-neutral-500 sm:text-xs">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Banner;
