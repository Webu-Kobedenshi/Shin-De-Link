import { LogoutButton } from "@/components/molecules/logout-button";
import { AccountProfileForm } from "@/components/organisms/account-profile-form";
import { fetchMyProfileSummary } from "@/graphql/account";
import { redirect } from "next/navigation";

export default async function InitialSetupPage() {
  const { profile } = await fetchMyProfileSummary();

  if (profile?.role === "ADMIN" && profile.name?.trim()) {
    redirect("/");
  }

  if (profile?.role === "ADMIN") {
    return (
      <main className="app-page mx-auto min-h-screen w-full max-w-3xl px-3 py-4 sm:px-6 sm:py-8">
        <section className="liquid-glass-strong w-full rounded-[2rem] p-5 sm:p-7">
          <p className="app-eyebrow">GETTING STARTED</p>
          <h1 className="app-display-title mt-2 text-2xl text-stone-900 dark:text-stone-100">
            初期設定
          </h1>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
            管理者アカウントで表示する名前を入力してください。
          </p>

          <AccountProfileForm
            initialProfile={profile}
            initialName={profile.name}
            title="名前の入力"
            description="学籍番号・入学年度・学科は管理者アカウントでは入力不要です。"
            showPublicProfileFields={false}
            showLinkedGmailField={false}
            redirectOnSuccess="/"
            basicProfileRequiredMode="nameOnly"
          />

          <div className="mt-8 border-t border-stone-200/80 pt-8 dark:border-stone-800/80">
            <div className="flex justify-center">
              <LogoutButton className="w-full sm:w-auto px-12" />
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="app-page mx-auto min-h-screen w-full max-w-3xl px-3 py-4 sm:px-6 sm:py-8">
      <section className="liquid-glass-strong w-full rounded-[2rem] p-5 sm:p-7">
        <p className="app-eyebrow">GETTING STARTED</p>
        <h1 className="app-display-title mt-2 text-2xl text-stone-900 dark:text-stone-100">
          初期設定
        </h1>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          最初に必要なプロフィール情報（名前・学籍番号・入学年度・年制・学科）を入力してください。
        </p>

        <AccountProfileForm
          initialProfile={profile}
          initialName={profile?.name}
          title="初期プロフィール入力"
          description="入力内容はアカウントページからいつでも編集・更新できます。"
          showPublicProfileFields={false}
          showLinkedGmailField={false}
          redirectOnSuccess="/"
        />

        <div className="mt-8 border-t border-stone-200/80 pt-8 dark:border-stone-800/80">
          <div className="flex justify-center">
            <LogoutButton className="w-full sm:w-auto px-12" />
          </div>
        </div>
      </section>
    </main>
  );
}
