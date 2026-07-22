import { Badge as ShadcnBadge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type BadgeVariant = "default" | "secondary";

export type BadgeProps = Omit<ComponentProps<typeof ShadcnBadge>, "variant"> & {
  variant?: BadgeVariant;
};

const variantClass: Record<BadgeVariant, string> = {
  default:
    "border-violet-200/70 bg-violet-100/65 text-violet-700 dark:border-violet-700/50 dark:bg-violet-900/30 dark:text-violet-300",
  secondary:
    "border-white/80 bg-white/68 text-stone-600 shadow-sm backdrop-blur-lg dark:border-white/10 dark:bg-stone-900/55 dark:text-stone-300",
};

export function Badge({ className, variant = "secondary", ...props }: BadgeProps) {
  return (
    <ShadcnBadge
      variant="outline"
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-[0.01em] hover:bg-transparent",
        variantClass[variant],
        className,
      )}
      {...props}
    />
  );
}
