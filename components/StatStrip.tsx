import { useTranslations } from "next-intl";

type Stat = { value: string; label: string };

export default function StatStrip() {
  const t = useTranslations();
  const stats = t.raw("stats") as Stat[];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-16">
      {stats.map((s) => (
        <div key={s.label}>
          <p className="text-2xl font-bold">{s.value}</p>
          <p className="mt-1 text-xs text-gray-500">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
