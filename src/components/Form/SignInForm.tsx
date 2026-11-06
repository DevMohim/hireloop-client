'use client'
import { ArrowRight, Lock, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { AuthField } from '../auth/AuthField';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { signIn } from '@/lib/auth-client';

const SignInForm = () => {
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
   );
};

export default SignInForm;