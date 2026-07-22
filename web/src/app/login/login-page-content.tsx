import {
  ArrowRightIcon,
  GraduationCapIcon,
  MailCheckIcon,
  ShieldCheckIcon,
} from "@/components/atoms/icons";
import type { ReactNode } from "react";

export function LoginPageContent({ loginButton }: { loginButton: ReactNode }) {
  return (
    <main className="app-page flex min-h-screen w-full items-center justify-center px-3 py-4 sm:px-6 sm:py-8">
      <section className="liquid-glass-strong grid w-full max-w-5xl overflow-hidden rounded-[2rem] p-2 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative hidden min-h-[640px] overflow-hidden rounded-[1.55rem] bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-500 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-20 size-80 rounded-full bg-white/14 blur-3xl" />
            <div className="absolute -bottom-28 -left-20 size-96 rounded-full bg-sky-300/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
          </div>

          <div className="relative flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-white/16 text-lg font-bold shadow-sm ring-1 ring-white/22 backdrop-blur-xl">
              W
            </span>
            <div>
              <p className="text-sm font-bold tracking-tight">We部ナレッジベース</p>
              <p className="mt-0.5 text-[11px] font-semibold tracking-[0.12em] text-white/66">
                CAREER KNOWLEDGE
              </p>
            </div>
          </div>

          <div className="relative max-w-md pb-4">
            <p className="text-xs font-bold tracking-[0.14em] text-white/68">FROM EXPERIENCE</p>
            <p className="mt-5 text-[2.75rem] font-bold leading-[1.08] tracking-[-0.045em]">
              先輩の経験が、
              <br />
              次の一歩を近くする。
            </p>
            <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-white/76">
              内定先や選考フローを知り、必要なら先輩へ直接相談できる。神戸電子の知識を、次の挑戦へつなぎます。
            </p>
          </div>

          <div className="relative grid grid-cols-3 gap-2 text-center text-[11px] font-semibold text-white/76">
            <span className="rounded-2xl bg-white/10 px-3 py-3 ring-1 ring-white/14 backdrop-blur-xl">
              選考体験
            </span>
            <span className="rounded-2xl bg-white/10 px-3 py-3 ring-1 ring-white/14 backdrop-blur-xl">
              企業情報
            </span>
            <span className="rounded-2xl bg-white/10 px-3 py-3 ring-1 ring-white/14 backdrop-blur-xl">
              先輩相談
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center px-4 py-7 sm:px-9 sm:py-10 lg:px-10">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-violet-600 text-sm font-bold text-white shadow-md shadow-violet-600/20">
              W
            </span>
            <div>
              <p className="text-sm font-bold tracking-tight text-stone-900">We部ナレッジベース</p>
              <p className="text-[10px] font-semibold tracking-[0.11em] text-stone-400">
                CAREER KNOWLEDGE
              </p>
            </div>
          </div>

          <p className="app-eyebrow">WELCOME BACK</p>
          <h1 className="app-display-title mt-3 text-3xl text-stone-950 sm:text-[2.35rem] dark:text-stone-50">
            おかえりなさい
          </h1>
          <p className="mt-3 text-sm leading-6 text-stone-500 dark:text-stone-400">
            Googleアカウントを使って、安全にログインできます。
          </p>

          {loginButton}

          <div className="mt-7">
            <p className="text-xs font-bold text-stone-500 dark:text-stone-400">
              Google画面で選ぶアカウント
            </p>
            <div className="mt-3 space-y-1.5">
              <div className="flex gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-white/60">
                <GraduationCapIcon
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-violet-600 dark:text-violet-300"
                />
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">在校生</p>
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    学校アカウント（@st.kobedenshi.ac.jp）を選択
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-white/60">
                <MailCheckIcon
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-sky-600 dark:text-sky-300"
                />
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">卒業生</p>
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    引き継ぎ登録したGmailアカウントを選択
                  </p>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-white/60">
                <ShieldCheckIcon
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-300"
                />
                <div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">管理者</p>
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    管理者として許可されたGoogleアカウントを選択
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-blue-200/60 bg-blue-50/72 p-4 text-xs leading-relaxed text-blue-800 shadow-sm dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-300">
            <strong className="block font-semibold">在校生の方へ重要なお知らせ</strong>
            <p className="mt-1.5">
              学校のアカウント（@st.kobedenshi.ac.jp）は卒業後に失効します。卒業後もプロフィールにアクセスできるよう、
              <strong>在学中にログイン後、アカウント設定から「引き継ぎGmail」の登録</strong>
              をお願いします。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export function LoginButtonContent() {
  return (
    <>
      Googleでログインへ進む
      <ArrowRightIcon aria-hidden="true" className="size-4" />
    </>
  );
}
