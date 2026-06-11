"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setLocale } from "@/i18n/actions";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale || pending) return;
    startTransition(async () => {
      await setLocale(next);
      router.refresh();
    });
  };

  return (
    <div
      className="inline-flex items-center rounded-md border border-border overflow-hidden text-xs font-semibold shrink-0"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={`px-2.5 py-1.5 transition-colors ${
          locale === "en"
            ? "bg-brand text-white"
            : "bg-white text-text-secondary hover:text-brand"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchTo("zh")}
        className={`px-2.5 py-1.5 transition-colors border-l border-border ${
          locale === "zh"
            ? "bg-brand text-white"
            : "bg-white text-text-secondary hover:text-brand"
        }`}
      >
        中文
      </button>
    </div>
  );
}
