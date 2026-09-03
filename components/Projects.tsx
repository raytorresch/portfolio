import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type ProjectItem = {
  id: string;
  name: string;
  description: string;
  stats: { value: string; label: string }[];
  tags: string[];
  links: { visit?: string; caseStudy?: string };
};

export default function Projects() {
  const t = useTranslations("projects");
  const projects = t.raw("items") as ProjectItem[];

  return (
    <section className="py-24">
      <h2 className="text-3xl font-bold mb-12">{t("sectionTitle")}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-3 text-gray-400">{p.description}</p>
            {p.stats.length > 0 && (
              <p className="mt-3 text-sm font-medium text-gray-300">
                {p.stats.map((s) => `${s.value} ${s.label}`).join(" · ")}
              </p>
            )}
            {p.tags.length > 0 && (
              <p className="mt-4 text-sm text-gray-500">
                {p.tags.join(", ")}
              </p>
            )}
            {(p.links.visit || p.links.caseStudy) && (
              <div className="mt-5 flex gap-4 text-sm">
                {p.links.visit && (
                  <a
                    href={p.links.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Visit ↗
                  </a>
                )}
                {p.links.caseStudy && (
                  <Link
                    href={p.links.caseStudy}
                    className="text-white hover:underline"
                  >
                    Case study →
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
