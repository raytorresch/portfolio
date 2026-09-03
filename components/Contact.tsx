import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section className="py-32 border-t border-gray-800">
      <h2 className="text-3xl font-bold">{t("sectionTitle")}</h2>
      <p className="mt-4 text-gray-400">
        Email:{" "}
        <a href={`mailto:${t("email")}`} className="text-white">
          {t("email")}
        </a>
      </p>
      <p className="mt-2 text-gray-400">
        LinkedIn:{" "}
        <a
          href={t("links.linkedin.url")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          ray-torres
        </a>
      </p>
      <p className="mt-2 text-gray-400">
        Upwork:{" "}
        <a
          href={t("links.upwork.url")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          {t("links.upwork.text")}
        </a>
      </p>
    </section>
  );
}
