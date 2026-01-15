const projects = [
  {
    name: "Celaya Construction Permit System",
    subtitle: "Municipal construction licensing platform",
    description: `
        A production web platform used by the Municipality of Celaya to manage construction and urban development permits.
        The system allows government staff to process applications, validate documents, and issue permits digitally.
        I worked on the backend architecture and frontend integration, ensuring reliable data flow between systems.
    `,
    stack: "CodeIgniter, MySQL, AngularJS, REST APIs",
    link: "https://celaya.drosmexico.com/index.html",
  },
  {
    name: "Bitácora Digital",
    subtitle: "Construction supervision platform",
    description: `
        Mobile and web system used to supervise public and private construction projects.
        Inspectors and supervisors use the platform to track project progress, register site visits, and document compliance in real time.
        I led the refactor of both the mobile and web platforms, modernizing the architecture and improving reliability and maintainability.
    `,
    stack:
      "Flutter, Laravel, Firebase, MySQL, AngularJS, Cloud Functions, Clean Architecture, REST APIs",
    link: "https://bitacoradigital.com.mx",
  },
  {
    name: "Adoptable",
    subtitle: "Pet adoption mobile app",
    description: `
        Mobile app designed to simplify pet adoption by connecting shelters and adopters in a single platform.
        I built the Flutter application and Firebase backend, including authentication, listings, and real-time updates.
        The MVP is currently under review for publication on Google Play.
    `,
    stack: "Flutter, Firebase, BLoC, Cloud Functions, Clean Architecture",
    link: "https://adoptable-landing.vercel.app",
  },
  {
    name: "BankMaster",
    subtitle: "Sports betting management system",
    description: `
        Mobile application for managing sports betting operations, including users, bets, and financial tracking.
        I built both the Flutter mobile app and the Laravel backend and deployed the system to production, publishing the app on Google Play.
    `,
    stack:
      "Flutter, Laravel, MySQL, Firebase Cloud Functions, Clean Architecture",
    link: "https://bankmaster.com.mx",
  },
]

export default function Projects() {
  return (
    <section className="py-24">
      <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-3 text-gray-400">{p.description}</p>
            <p className="mt-4 text-sm text-gray-500">{p.stack}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
