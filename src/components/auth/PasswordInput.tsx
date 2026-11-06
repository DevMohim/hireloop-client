"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import {
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

function PasswordInput({
  className,
  id,
  disabled,
  ...props
}: React.ComponentProps<typeof InputGroupInput>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <InputGroupInput
        id={id}
        type={showPassword ? "text" : "password"}
        disabled={disabled}
        className={className}
        {...props}
      />
      <InputGroupAddon align="inline-end" className="pr-1">
        <InputGroupButton
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={showPassword ? "Hide password" : "Show password"}
          aria-controls={typeof id === "string" ? id : undefined}
          aria-pressed={showPassword}
          disabled={disabled}
          onClick={() => setShowPassword((visible) => !visible)}
          className="text-neutral-500 hover:bg-[#1A1A1D]
           hover:text-white focus-visible:ring-[#8b8bf8]/40"
        >
          {showPassword ? (
            <EyeOff className="size-4" />
          ) : (
            <Eye className="size-4" />
          )}
        </InputGroupButton>
      </InputGroupAddon>
    </>
  );
}

export { PasswordInput };
