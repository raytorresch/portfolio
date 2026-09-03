import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Metric = { value: string; label: string };
type NamedItem = { title: string; description: string };
type AdrItem = { title: string; tag: string; description: string };

const badgeColor: Record<string, string> = {
  Architecture: "border-blue-800 text-blue-400",
  "Data integrity": "border-yellow-800 text-yellow-400",
  Resilience: "border-green-800 text-green-400",
  Security: "border-red-800 text-red-400",
  Monetization: "border-purple-800 text-purple-400",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bitacora.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function BitacoraPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BitacoraContent />;
}

function BitacoraContent() {
  const t = useTranslations("bitacora");

  const headerTags = t.raw("header.tags") as string[];
  const stats = t.raw("stats") as Metric[];
  const problemItems = t.raw("problem.items") as NamedItem[];
  const beforeItems = t.raw("comparison.before.items") as string[];
  const afterItems = t.raw("comparison.after.items") as string[];
  const adrs = t.raw("adrs.items") as AdrItem[];
  const outcomes = t.raw("outcomes.items") as NamedItem[];

  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl px-16 py-32">
        {/* Back */}
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-white transition mb-16 inline-block"
        >
          ← {t("nav.back")}
        </Link>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {t("header.title")}
        </h1>
        <p className="mt-4 text-xl text-gray-400 max-w-2xl">
          {t("header.subtitle")}
        </p>
        <p className="mt-6 text-gray-500 max-w-2xl">
          {t("header.description")}
        </p>

        {/* Stack tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {headerTags.map((tag) => (
            <span
              key={tag}
              className="border border-gray-700 rounded-full px-3 py-1 text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((m) => (
            <div key={m.label}>
              <p className="text-2xl font-bold">{m.value}</p>
              <p className="mt-1 text-xs text-gray-500">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Screenshots */}
        <div className="mt-16 grid grid-cols-3 gap-4">
          <Image
            src="/screenshots/bitacora-projects.jpeg"
            alt="Bitácora Digital — project list"
            width={360}
            height={748}
            className="rounded-xl w-full"
          />
          <Image
            src="/screenshots/bitacora-inspecciones.jpeg"
            alt="Bitácora Digital — inspections"
            width={360}
            height={748}
            className="rounded-xl w-full"
          />
          <Image
            src="/screenshots/bitacora-minutas.jpeg"
            alt="Bitácora Digital — meeting minutes"
            width={360}
            height={748}
            className="rounded-xl w-full"
          />
        </div>

        {/* The Problem */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-2">{t("problem.sectionTitle")}</h2>
          <p className="text-gray-500 mb-10 italic">`{t("problem.tagline")}`</p>
          <p className="text-gray-400 mb-10">{t("problem.intro")}</p>
          <div className="space-y-8">
            {problemItems.map((p) => (
              <div key={p.title}>
                <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* V1 vs V2 */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-10">{t("comparison.sectionTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-widest">
                {t("comparison.before.label")}
              </p>
              <ul className="space-y-2">
                {beforeItems.map((item) => (
                  <li key={item} className="text-gray-400 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-700 rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-widest">
                {t("comparison.after.label")}
              </p>
              <ul className="space-y-2">
                {afterItems.map((item) => (
                  <li key={item} className="text-white text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ADRs */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-4">{t("adrs.sectionTitle")}</h2>
          <p className="text-gray-500 text-sm mb-10">
            {t("adrs.intro")}{" "}
            <a
              href={t("adrs.repoUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              {t("adrs.repoLabel")}
            </a>
            .
          </p>
          <div className="space-y-6">
            {adrs.map((adr) => (
              <div
                key={adr.title}
                className="border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-semibold text-white">{adr.title}</h3>
                  <span
                    className={`shrink-0 border rounded-full px-2 py-0.5 text-xs ${badgeColor[adr.tag] ?? "border-gray-700 text-gray-400"}`}
                  >
                    {adr.tag}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{adr.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-10">{t("outcomes.sectionTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((o) => (
              <div
                key={o.title}
                className="border border-gray-800 rounded-xl p-6"
              >
                <h3 className="font-semibold text-white mb-2">{o.title}</h3>
                <p className="text-gray-400 text-sm">{o.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reflection */}
        <section className="mt-24 border-t border-gray-800 pt-16">
          <blockquote className="text-xl text-gray-300 italic leading-relaxed">
            `{t("closing.quote")}`
          </blockquote>
        </section>

        {/* Footer note */}
        <p className="mt-12 text-sm text-gray-600">{t("closing.status")}</p>

        {/* Back bottom */}
        <div className="mt-24">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-white transition"
          >
            ← {t("nav.backToPortfolio")}
          </Link>
        </div>
      </main>
    </div>
  );
}
