const stats = [
  { value: "14,000+", label: "Active users across 6 production platforms" },
  { value: "64,000+", label: "Permits & licenses processed" },
  { value: "38,500+", label: "Photographic reports in production (Bitácora Digital)" },
  { value: "$3.8M MXN", label: "Collected in dues over 4 years through a platform I built" },
];

export default function StatStrip() {
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
