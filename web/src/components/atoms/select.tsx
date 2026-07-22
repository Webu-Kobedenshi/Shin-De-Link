import {
  Select as ShadcnSelect,
  SelectContent as ShadcnSelectContent,
  SelectGroup as ShadcnSelectGroup,
  SelectItem as ShadcnSelectItem,
  SelectLabel as ShadcnSelectLabel,
  SelectSeparator as ShadcnSelectSeparator,
  SelectTrigger as ShadcnSelectTrigger,
  SelectValue as ShadcnSelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/cn";
import type * as React from "react";

function SelectTrigger({ className, ...props }: React.ComponentProps<typeof ShadcnSelectTrigger>) {
  return (
    <ShadcnSelectTrigger
      className={cn(
        "h-11 w-full rounded-[0.875rem] border border-stone-900/[0.08] bg-white/78 px-3 text-sm text-stone-900 shadow-[inset_0_1px_1px_rgba(15,23,42,0.025),0_1px_0_rgba(255,255,255,0.8)] outline-none backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-150 hover:border-stone-900/[0.14] focus:border-violet-500/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(101,88,232,0.1)] dark:border-white/10 dark:bg-stone-900/70 dark:text-stone-100 dark:hover:border-white/20 dark:focus:border-violet-400/70 dark:focus:bg-stone-900 dark:focus:shadow-[0_0_0_4px_rgba(139,92,246,0.14)]",
        className,
      )}
      // biome-ignore lint/suspicious/noExplicitAny: React 19 types mismatch with Radix UI
      {...(props as any)}
    />
  );
}

const Select = ShadcnSelect;
const SelectGroup = ShadcnSelectGroup;
const SelectValue = ShadcnSelectValue;
const SelectContent = ShadcnSelectContent;
const SelectLabel = ShadcnSelectLabel;
const SelectItem = ShadcnSelectItem;
const SelectSeparator = ShadcnSelectSeparator;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
