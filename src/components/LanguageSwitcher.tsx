"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-0.5 text-sm">
      <button
        onClick={() => switchLocale("mn")}
        disabled={isPending}
        className={`rounded-full px-3 py-1 font-medium transition-colors ${
          locale === "mn"
            ? "bg-sky-500 text-white"
            : "text-slate-500 hover:text-sky-600"
        }`}
      >
        MN
      </button>
      <button
        onClick={() => switchLocale("en")}
        disabled={isPending}
        className={`rounded-full px-3 py-1 font-medium transition-colors ${
          locale === "en"
            ? "bg-sky-500 text-white"
            : "text-slate-500 hover:text-sky-600"
        }`}
      >
        EN
      </button>
    </div>
  );
}
