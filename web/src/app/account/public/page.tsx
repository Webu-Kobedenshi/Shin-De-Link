import { ChevronLeftIcon } from "@/components/atoms/icons";
import { AccountProfileForm } from "@/components/organisms/account-profile-form";
import { fetchMyProfile } from "@/graphql/account";
import { getCachedServerSession } from "@/graphql/session";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AccountPublicProfilePage() {
  const session = await getCachedServerSession();
  const { profile, error } = await fetchMyProfile();

  if (error === "Authentication required") {
    redirect("/login?callbackUrl=/account/public");
  }

  if (!profile || error) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-2xl items-center px-6 py-10">
        <section className="w-full rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
          プロフィール取得に失敗しました。時間をおいて再読み込みしてください。
          <p className="mt-2 text-xs opacity-80">詳細: {error}</p>
        </section>
      </main>
    );
  }

  if (profile.role === "ADMIN") {
    redirect("/");
  }

  return (
    <main className="app-page mx-auto min-h-screen w-full max-w-2xl px-3 py-3 sm:px-4 sm:py-5 md:px-6 md:py-8">
      <nav className="mb-2 sm:mb-3">
        <Link href="/" className="app-back-link group gap-1.5">
          <ChevronLeftIcon
            size={16}
            className="transition-transform group-hover:-translate-x-0.5"
            title="戻る"
          />
          ホームに戻る
        </Link>
      </nav>

      <section className="liquid-glass-strong rounded-[2rem] p-4 sm:p-6 dark:border-stone-800 dark:bg-stone-950">
        <p className="app-eyebrow">PUBLIC PROFILE</p>
        <h1 className="app-display-title mt-2 text-2xl text-stone-900 dark:text-stone-100">
          公開プロフィール設定
        </h1>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          内定先や表示名など、後輩に公開する情報を更新できます。
        </p>

        <AccountProfileForm
          initialProfile={profile}
          initialName={profile?.name ?? session?.user?.name}
          initialEmail={profile?.email ?? session?.user?.email}
          showBasicProfileFields={false}
          showPublicProfileFields
          showLinkedGmailField={false}
        />
      </section>
    </main>
  );
}
