import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

export function Textarea({ className, ...props }: ComponentProps<typeof ShadcnTextarea>) {
  return (
    <ShadcnTextarea
      className={cn(
        "min-h-24 w-full rounded-[0.875rem] border border-stone-900/[0.08] bg-white/78 px-3.5 py-3 text-sm text-stone-900 shadow-[inset_0_1px_1px_rgba(15,23,42,0.025),0_1px_0_rgba(255,255,255,0.8)] outline-none backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-150 placeholder:text-stone-400 hover:border-stone-900/[0.14] focus:border-violet-500/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(101,88,232,0.1)] disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-stone-900/70 dark:text-stone-100 dark:placeholder:text-stone-500 dark:hover:border-white/20 dark:focus:border-violet-400/70 dark:focus:shadow-[0_0_0_4px_rgba(139,92,246,0.14)]",
        className,
      )}
      {...props}
    />
  );
}
