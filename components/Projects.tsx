type Project = {
  name: string;
  subtitle: string;
  description: string;
  stats?: string;
  stack?: string;
  link?: string | null;
  preview?: string | null;
  adrs?: string | null;
  caseStudy?: string | null;
};

const projects: Project[] = [
  {
    name: "Ventanilla Virtual Guanajuato",
    subtitle: "Construction permit management platform · Guanajuato",
    description:
      "Started on the engineering team building this construction permit platform for the state of Guanajuato. As the project matured, my role shifted toward technical coordination acting as the bridge between stakeholders and the dev team, tracking incidents, and directing resolution efforts. Nearly 10,000 users process permits through it today, facilitating $42.6M MXN in municipal revenue collection over 5 years in production.",
    stats: "9,984 users · 53,446 licenses processed · $42.6M MXN in municipal revenue",
    stack: "Laravel, MySQL, AngularJS",
    link: "https://ventanillavirtualguanajuato.net/",
    caseStudy: null,
  },
  {
    name: "Bitácora Digital",
    subtitle: "Construction supervision platform",
    description:
      "The original system was losing data. Sync failures, duplicate records, no reliable way to know what actually went through. I rebuilt the mobile app, Laravel backend, and web frontend in Next.js from scratch: offline-first sync, immutable audit trails, async document generation. Currently in staging with migration to production underway.",
    stats: "2,948 users · 3,590 projects · 38,519 photographic reports · 581 meeting minutes · 346 checklists",
    stack:
      "Flutter, Laravel, Next.js, Firebase, MySQL, Cloud Functions, Clean Architecture, REST APIs",
    link: "https://bitacoradigital.com.mx",
    preview: "https://stg.bitacoradigital.com.mx/",
    caseStudy: "/work/bitacora",
    adrs: "https://github.com/raytorresch/bitacora-architecture",
  },
  {
    name: "LicenciasZac",
    subtitle: "Professional associations platform · Zacatecas",
    description:
      "Built for four professional associations in Zacatecas — Ingenieros Civiles, Arquitectos, Mecánicos Electricistas, and Restauradores. Handles identification cards, co-responsible party tracking, membership dues collection, and professional records. The platform has facilitated $12.1M MXN in dues collection over 3 years.",
    stats: "368 users · 9,121 folios · $12.1M MXN collected",
    stack: "Multi-tenant · Document generation · Payments",
    link: "https://consultas.licenciaszac.org/index.html",
    caseStudy: null,
  },
  {
    name: "Celaya Construction Permit System",
    subtitle: "Municipal construction licensing platform",
    description:
      "One of my first GovTech projects. Built the backend and frontend integration for Celaya's municipal permit system where inspectors and staff process construction and urban development applications end to end. It's facilitated $66.6M MXN in municipal revenue collection over 5 years in production.",
    stats: "632 users · 10,666 licenses processed · $66.6M MXN in municipal revenue",
    stack: "MySQL, REST APIs, CodeIgniter, AngularJS",
    link: "https://celaya.drosmexico.com/index.html",
    caseStudy: null,
  },
  {
    name: "Guadalupe Construction License Platform",
    subtitle: "Municipal construction licensing platform · Guadalupe, Zacatecas",
    description:
      "Construction license platform for the municipality of Guadalupe, Zacatecas. Same architecture as LicenciasZac, deployed for a different jurisdiction. Smaller footprint, but handling real permit workflows for local staff day to day.",
    stats: "481 users · 596 licenses",
    stack: "Multi-tenant · Document generation · Payments",
    link: "http://guadalupe.licenciaszac.net/",
    caseStudy: null,
  },
  {
    name: "BankMaster",
    subtitle: "Sports betting management system",
    description:
      "Full-stack mobile system for sports betting operations users, bets, financial tracking, the works. Shipped end-to-end including localization (l10n) and CI/CD pipeline setup.",
    stack: "Flutter, Laravel, MySQL, Firebase Cloud Functions, Clean Architecture",
    link: "https://bankmaster.com.mx",
    caseStudy: null,
  },
  {
    name: "Adoptable",
    subtitle: "Pet adoption mobile app",
    description:
      "A side project I built because I wanted to work on something outside of government systems. Connects shelters and adopters on a single platform. Flutter frontend, Firebase backend. Currently under review for Google Play.",
    stack: "Flutter, Firebase, BLoC, Cloud Functions, Clean Architecture",
    link: "https://adoptable-landing.vercel.app",
    caseStudy: null,
  },
];

export default function Projects() {
  return (
    <section className="py-24">
      <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.name}
            className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{p.subtitle}</p>
            <p className="mt-3 text-gray-400">{p.description}</p>
            {p.stats && (
              <p className="mt-3 text-sm font-medium text-gray-300">{p.stats}</p>
            )}
            {p.stack && (
              <p className="mt-4 text-sm text-gray-500">{p.stack}</p>
            )}
            {(p.link || p.preview || p.caseStudy) && (
              <div className="mt-5 flex gap-4 text-sm">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Visit ↗
                  </a>
                )}
                {p.preview && (
                  <a
                    href={p.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Preview ↗
                  </a>
                )}
                {p.adrs && (
                  <a
                    href={p.adrs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    ADRs ↗
                  </a>
                )}
                {p.caseStudy && (
                  <a href={p.caseStudy} className="text-white hover:underline">
                    Case study →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
