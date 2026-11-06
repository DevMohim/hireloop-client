"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { cn } from "cn";

import logo from "@/assest/images/logo.png";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authClient, useSession } from "@/lib/auth-client";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import ShowMenu from "../shared/ShowMenu";

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
] as const;

function BrandLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="HireLoop home"
      className={cn(
        "flex shrink-0 items-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b8bf8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1b1b1b]",
        className,
      )}
    >
      <Image
        src={logo}
        alt=""
        aria-hidden="true"
        priority
        className="h-7 w-auto sm:h-7.5"
      />
    </Link>
  );
}

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const handleSignOut = async () => {
    const data = await authClient.signOut();
    if (data) {
      router.refresh();
      router.push("/sign-in");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1b1b1b]">
      <div className="mx-auto w-full max-w-360 px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <div className="flex h-14 items-center justify-between gap-4 rounded-2xl bg-[linear-gradient(90deg,#181818_0%,#1c1c1c_55%,#262626_100%)] px-4 ring-1 ring-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_30px_-15px_rgba(0,0,0,0.9)] sm:px-5 lg:h-15 lg:px-6">
          <BrandLogo />

          {/* Desktop navigation */}
          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            <nav
              aria-label="Main navigation"
              className="flex items-center gap-1 lg:gap-2"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-2.5 py-2 text-[13px] font-medium whitespace-nowrap text-neutral-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b8bf8] lg:px-3 lg:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <span aria-hidden="true" className="h-5 w-px bg-white/15" />

            {user ? (
              <>
              <ShowMenu user={user}/>
                
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="rounded-lg px-1.5 py-2 text-[13px] font-medium whitespace-nowrap text-[#8b8bf8] transition-colors hover:text-[#adadff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b8bf8] lg:px-2 lg:text-sm"
                >
                  Sign In
                </Link>

                <Link
                  href="/sign-up"
                  className="inline-flex h-9 items-center justify-center rounded-[10px] bg-[#5b5bd6] px-4 text-[13px] font-semibold whitespace-nowrap text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_6px_18px_-6px_rgba(91,91,214,0.7)] transition-colors hover:bg-[#6a6ae4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#adadff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1b1b] lg:h-10 lg:px-5 lg:text-sm"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile / tablet actions */}
          <div className="flex items-center gap-2 md:hidden">
            {user ? (
              <>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                  <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                </Avatar>
                <Sheet>
                  <SheetTrigger
                    render={
                      <button
                        type="button"
                        aria-label="Open navigation menu"
                        className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-neutral-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b8bf8]"
                      />
                    }
                  >
                    <MenuIcon className="size-5" />
                  </SheetTrigger>

                  <SheetContent
                    side="right"
                    showCloseButton={false}
                    className="w-[86vw] max-w-sm gap-0 border-l border-white/10 bg-[#141414] p-0 text-white data-[side=right]:w-[86vw]"
                  >
                    <SheetHeader className="flex-row items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                      <SheetTitle className="sr-only">
                        Navigation menu
                      </SheetTitle>
                      <BrandLogo />
                      <SheetClose
                        render={
                          <button
                            type="button"
                            aria-label="Close navigation menu"
                            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b8bf8]"
                          />
                        }
                      >
                        <XIcon className="size-5" />
                      </SheetClose>
                    </SheetHeader>

                    <nav
                      aria-label="Mobile navigation"
                      className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
                    >
                      {navLinks.map((link) => (
                        <SheetClose
                          key={link.href}
                          render={
                            <Link
                              href={link.href}
                              className="flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-medium text-neutral-200 transition-colors hover:bg-white/6 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b8bf8]"
                            />
                          }
                        >
                          {link.label}
                          <span aria-hidden="true" className="text-neutral-500">
                            &rarr;
                          </span>
                        </SheetClose>
                      ))}
                    </nav>

                    <SheetFooter className="flex-col gap-2.5 border-t border-white/10 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                      {user ? (
                        <>
                          <SheetClose
                            render={
                              <Button
                                onClick={handleSignOut}
                                variant="destructive"
                                className="inline-flex h-10 w-full items-center justify-center rounded-[10px] border border-white/15 text-sm font-semibold text-white transition-colors hover:border-white/25  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b8bf8] cursor-pointer"
                              />
                            }
                          >
                            Sign Out
                          </SheetClose>
                        </>
                      ) : (
                        <>
                          <SheetClose
                            render={
                              <Link
                                href="/sign-in"
                                className="inline-flex h-10 w-full items-center justify-center rounded-[10px] border border-white/15 text-sm font-semibold text-[#8b8bf8] transition-colors hover:border-white/25 hover:text-[#adadff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b8bf8]"
                              />
                            }
                          >
                            Sign In
                          </SheetClose>

                          <SheetClose
                            render={
                              <Link
                                href="/sign-up"
                                className="inline-flex h-10 w-full items-center justify-center rounded-[10px] bg-[#5b5bd6] text-sm font-semibold text-white transition-colors hover:bg-[#6a6ae4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#adadff]"
                              />
                            }
                          >
                            Get Started
                          </SheetClose>
                        </>
                      )}
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </>
            ) : (
              <>
                <Link
                  href="/sign-up"
                  className="hidden h-9 items-center justify-center rounded-[10px] bg-[#5b5bd6] px-3.5 text-[13px] font-semibold whitespace-nowrap text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_6px_18px_-6px_rgba(91,91,214,0.7)] transition-colors hover:bg-[#6a6ae4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#adadff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1b1b] sm:inline-flex"
                >
                  Get Started
                </Link>

                <Sheet>
                  <SheetTrigger
                    render={
                      <button
                        type="button"
                        aria-label="Open navigation menu"
                        className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-neutral-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b8bf8]"
                      />
                    }
                  >
                    <MenuIcon className="size-5" />
                  </SheetTrigger>

                  <SheetContent
                    side="right"
                    showCloseButton={false}
                    className="w-[86vw] max-w-sm gap-0 border-l border-white/10 bg-[#141414] p-0 text-white data-[side=right]:w-[86vw]"
                  >
                    <SheetHeader className="flex-row items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                      <SheetTitle className="sr-only">
                        Navigation menu
                      </SheetTitle>
                      <BrandLogo />
                      <SheetClose
                        render={
                          <button
                            type="button"
                            aria-label="Close navigation menu"
                            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-neutral-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b8bf8]"
                          />
                        }
                      >
                        <XIcon className="size-5" />
                      </SheetClose>
                    </SheetHeader>

                    <nav
                      aria-label="Mobile navigation"
                      className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
                    >
                      {navLinks.map((link) => (
                        <SheetClose
                          key={link.href}
                          render={
                            <Link
                              href={link.href}
                              className="flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-medium text-neutral-200 transition-colors hover:bg-white/6 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b8bf8]"
                            />
                          }
                        >
                          {link.label}
                          <span aria-hidden="true" className="text-neutral-500">
                            &rarr;
                          </span>
                        </SheetClose>
                      ))}
                    </nav>

                    <SheetFooter className="flex-col gap-2.5 border-t border-white/10 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                      <SheetClose
                        render={
                          <Link
                            href="/sign-in"
                            className="inline-flex h-10 w-full items-center justify-center rounded-[10px] border border-white/15 text-sm font-semibold text-[#8b8bf8] transition-colors hover:border-white/25 hover:text-[#adadff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b8bf8]"
                          />
                        }
                      >
                        Sign In
                      </SheetClose>

                      <SheetClose
                        render={
                          <Link
                            href="/sign-up"
                            className="inline-flex h-10 w-full items-center justify-center rounded-[10px] bg-[#5b5bd6] text-sm font-semibold text-white transition-colors hover:bg-[#6a6ae4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#adadff]"
                          />
                        }
                      >
                        Get Started
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
