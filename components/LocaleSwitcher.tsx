"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  en: "EN",
  es: "ES",
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-1">
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          aria-current={loc === locale ? "true" : undefined}
          className={`rounded-full border px-2 py-1 text-xs transition ${
            loc === locale
              ? "border-white text-white"
              : "border-gray-700 text-gray-500 hover:border-gray-500 hover:text-white"
          }`}
        >
          {localeLabels[loc]}
        </Link>
      ))}
    </div>
  );
}
