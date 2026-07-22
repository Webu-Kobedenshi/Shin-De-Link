import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof ShadcnButton>;

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "rounded-full border border-violet-500/40 bg-violet-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_6px_18px_rgba(91,79,214,0.2)] hover:bg-violet-500 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_rgba(91,79,214,0.26)] dark:bg-violet-500 dark:hover:bg-violet-400",
  destructive:
    "rounded-full border border-rose-200/90 bg-white/60 text-rose-600 hover:bg-rose-50 dark:border-rose-800/50 dark:bg-stone-950/50 dark:text-rose-400 dark:hover:bg-rose-900/20",
  outline:
    "rounded-full border border-white/90 bg-white/72 text-stone-700 shadow-sm backdrop-blur-xl hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-stone-900/70 dark:text-stone-300 dark:hover:bg-stone-800",
  secondary:
    "rounded-full bg-stone-900/[0.06] text-stone-700 hover:bg-stone-900/[0.1] dark:bg-white/10 dark:text-stone-100 dark:hover:bg-white/15",
  ghost:
    "rounded-full bg-transparent text-stone-500 hover:bg-white/70 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-white/10 dark:hover:text-stone-100",
  link: "h-auto rounded-none p-0 text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300",
};

export function Button({ className, variant = "default", type = "button", ...props }: ButtonProps) {
  const buttonVariant = variant ?? "default";

  return (
    <ShadcnButton
      variant={buttonVariant}
      type={type}
      className={cn(
        "font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60",
        variantClass[buttonVariant],
        className,
      )}
      {...props}
    />
  );
}
