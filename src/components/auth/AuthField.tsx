import type { LucideIcon } from "lucide-react";
import { cn } from "cn";

import { PasswordInput } from "@/components/auth/PasswordInput";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

type AuthFieldProps = React.ComponentProps<typeof InputGroupInput> & {
  label: string;
  icon: LucideIcon;
  /** Optional element rendered on the label row, e.g. a "Forgot password?" link. */
  action?: React.ReactNode;
  /** Optional helper text rendered below the input. */
  hint?: React.ReactNode;
};

function AuthField({
  id,
  label,
  icon: Icon,
  action,
  hint,
  className,
  type,
  ...props
}: AuthFieldProps) {
  const inputClassName = cn(
    "h-full pr-3.5 pl-1 text-[15px] text-white placeholder:text-neutral-500 md:text-[15px]",
    className,
  );

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <Label
          htmlFor={id}
          className="text-[13px] font-medium text-neutral-300"
        >
          {label}
        </Label>
        {action}
      </div>

      <InputGroup className="h-11 rounded-xl border-white/10 bg-white/3 transition-[color,box-shadow,border-color] has-[[data-slot=input-group-control]:focus-visible]:border-[#8b8bf8] has-[[data-slot=input-group-control]:focus-visible]:ring-[#8b8bf8]/25">
        <InputGroupAddon className="text-neutral-500 transition-colors group-focus-within/input-group:text-[#adadff]">
          <Icon className="size-4" />
        </InputGroupAddon>
        {type === "password" ? (
          <PasswordInput id={id} className={inputClassName} {...props} />
        ) : (
          <InputGroupInput
            id={id}
            type={type}
            className={inputClassName}
            {...props}
          />
        )}
      </InputGroup>

      {hint ? (
        <p className="text-[11.5px] leading-relaxed text-neutral-500">{hint}</p>
      ) : null}
    </div>
  );
}

export { AuthField };
