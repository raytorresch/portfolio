import { useTranslations } from "next-intl";

export default function Proof() {
  const t = useTranslations("proof");
  const items = t.raw("items") as string[];

  return (
    <section className="py-24">
      <h2 className="text-3xl font-bold mb-8">{t("sectionTitle")}</h2>
      <ul className="space-y-4 text-gray-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}
