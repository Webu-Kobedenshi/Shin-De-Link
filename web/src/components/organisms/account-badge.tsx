import { ChevronRightIcon } from "@/components/atoms/icons";
import type { MyAccountProfile } from "@/graphql/types";
import Link from "next/link";

type AccountBadgeProps = {
  account: MyAccountProfile;
};

const roleLabel: Record<MyAccountProfile["role"], string> = {
  STUDENT: "在校生",
  ALUMNI: "卒業生",
  ADMIN: "管理者",
};

export function AccountBadge({ account }: AccountBadgeProps) {
  const initial = (account.name || account.email || "U").slice(0, 1).toUpperCase();

  return (
    <Link
      href="/account"
      className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-white/90 bg-white/62 py-1.5 pl-2 pr-3 text-left shadow-sm backdrop-blur-xl transition-[background-color,box-shadow,transform] duration-150 hover:bg-white/88 hover:shadow-md active:scale-[0.98] dark:border-white/10 dark:bg-stone-900/60 dark:hover:bg-stone-800/80"
      aria-label="マイページへ移動"
    >
      <div className="flex items-center gap-2.5">
        {account.avatarUrl ? (
          <img
            src={account.avatarUrl}
            alt="プロフィール画像"
            className="h-9 w-9 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-white dark:ring-stone-700/70"
          />
        ) : (
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white shadow-sm">
            {initial}
          </span>
        )}
        <span className="min-w-0">
          <span className="block truncate text-[13px] font-semibold text-stone-800 dark:text-stone-200">
            {account.name}
          </span>
          <span className="block text-[11px] font-medium text-stone-500 dark:text-stone-400">
            {roleLabel[account.role]}
          </span>
        </span>
      </div>

      {/* CTA Label & Icon */}
      <div className="flex items-center gap-1 text-stone-400 transition-colors group-hover:text-violet-600 dark:text-stone-500 dark:group-hover:text-violet-400">
        <span className="sr-only">マイページ</span>
        <ChevronRightIcon
          size={16}
          strokeWidth={2.5}
          className="transition-transform group-hover:translate-x-0.5"
          title="マイページへ"
        />
      </div>
    </Link>
  );
}
