import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const tags = t.raw("tags") as string[];

  return (
    <section className="py-32">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        {t("name")} | {t("title")}
      </h1>

      <p className="mt-4 text-lg text-gray-400">{t("subtitle")}</p>

      <p className="mt-6 text-xl text-gray-400 max-w-3xl">
        {t("description")}
      </p>

      <p className="mt-8 text-gray-500">{tags.join(" • ")}</p>
    </section>
  );
}
