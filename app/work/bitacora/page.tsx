import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bitácora Digital | Ray Torres",
  description:
    "A full architectural overhaul of a production construction supervision platform: from a monolithic, brittle V1 to a multi-tenant SaaS with offline-first sync, immutable audit trails, and asynchronous document generation.",
};

const metrics = [
  { label: "Photographic reports in DB", value: "37,100+" },
  { label: "Organic users (Firebase Auth)", value: "~1,500" },
  { label: "Meeting minutes", value: "551" },
  { label: "Backend + frontend refactor", value: "2 months" },
];

const stack = [
  "Flutter",
  "Laravel",
  "Firebase",
  "MySQL",
  "DigitalOcean Spaces",
  "Clean Architecture",
];

const problems = [
  {
    title: "Sync failures & data loss",
    body: "The sync mechanism sent a single monolithic JSON payload with Base64-encoded photos, often exceeding 20MB. On unstable connections, these payloads timed out mid-transfer. The mobile client had no way to detect partial success, so it either assumed everything went through or retried everything causing duplicate records and silent data loss.",
  },
  {
    title: "Broken multi-user collaboration",
    body: "To collaborate on a project across organizations, users needed separate credentials for each context. Roles were hardcoded as integer flags. Adding a supervisor to a project from a different company required workarounds rather than a first-class permission model.",
  },
  {
    title: "Zero extensibility",
    body: "Every time a new municipality or professional association needed onboarding, the codebase required direct modification. There was no concept of organizations as first-class entities, no tenant isolation, and no mechanism to manage or sell checklist templates across clients.",
  },
];

const v1 = [
  "Users own resources directly",
  "Roles as integer columns (id_tipo)",
  "Single-owner project model",
  "Monolithic sync (Base64 + JSON)",
  "Mutable checklists (no audit trail)",
  "Synchronous PDF generation",
  "Social auth via empty passwords",
  "AngularJS frontend",
];

const v2 = [
  "Organization-owned data (multi-tenant)",
  "Spatie roles + project-level permission sets",
  "Pivot-based multi-stakeholder collaboration",
  "Decoupled async sync (UUIDs + state machine)",
  "Immutable versioning with full lineage",
  "Queue-based PDF with signed URL delivery",
  "Firebase Admin SDK identity proxy",
  "Modern SPA (staging)",
];

const adrs = [
  {
    title: "Organization-based multitenancy",
    badge: "Architecture",
    body: "Introduced an Organization model as the root owner of all data. Laravel Global Scopes enforce tenant isolation transparently. Users belong to multiple organizations via a pivot, solving the multi-credential problem without migrating user accounts.",
  },
  {
    title: "Immutable versioning & marketplace",
    badge: "Data integrity",
    body: "Checklists are legal documents. V2 never updates rows every change creates a new version. A root_uuid groups lineage. valid_from/valid_until determine the authoritative version at any point in time. Master templates can be cloned into a buyer's organization as a marketplace primitive.",
  },
  {
    title: "Contextual roles & permissions",
    badge: "Architecture",
    body: "Org-level roles handled by Spatie, hydrated by middleware. Project-level duties live in a pivot table as permission sets decoupled from org hierarchy. Admins can assign granular overrides per user without schema changes.",
  },
  {
    title: "Async sync protocol with state machine",
    badge: "Resilience",
    body: 'Replaced 20MB monolithic payload with a "puzzle of UUIDs": binaries upload separately, metadata syncs as UUID references (~95% smaller). Three-state machine (ORPHAN → PENDING_BINARY → AVAILABLE) handles non-sequential arrivals. SyncSessions with manifests and checksums give granular recovery.',
  },
  {
    title: "Late binding for race conditions",
    badge: "Resilience",
    body: 'Laravel Batch jobs run in parallel, child records may arrive before parent is persisted. Child jobs release back to queue with backoff until parent exists. Circuit-breaking after max retries logs a "Missing Dependency" error without corrupting state.',
  },
  {
    title: "Async PDF generation",
    badge: "Architecture",
    body: "Complex reports caused timeouts in V1. V2 dispatches GenerateReportJob to background queue. Frontend polls UUID for status and receives a temporary signed URL on completion.",
  },
  {
    title: "Firebase as identity proxy",
    badge: "Security",
    body: "V1 used empty passwords for social auth. V2 uses Firebase Admin SDK to verify idTokens server-side. Social accounts have null passwords, native login attempts are blocked. Multi-device support via user_devices table.",
  },
];

const badgeColor: Record<string, string> = {
  Architecture: "border-blue-800 text-blue-400",
  "Data integrity": "border-yellow-800 text-yellow-400",
  Resilience: "border-green-800 text-green-400",
  Security: "border-red-800 text-red-400",
};

const outcomes = [
  {
    title: "Forensic-grade audit trail",
    body: "Immutable checklists with full lineage tracking mean historical reports can never be retroactively altered, a hard requirement for government compliance use cases.",
  },
  {
    title: "True offline-first sync",
    body: "Sync failures no longer cause data loss or duplicates. Inspectors on construction sites with poor connectivity get granular confirmation of exactly which records synced and which need retry.",
  },
  {
    title: "SaaS-ready multitenancy",
    body: "Onboarding a new municipality or professional association no longer requires code changes, it's a data operation.",
  },
  {
    title: "Parallel delivery strategy",
    body: "V1 remained in production throughout the entire refactor. V2 was developed in a separate staging environment, keeping ~1,500 active users unaffected.",
  },
];

export default function BitacoraPage() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl px-16 py-32">
        {/* Back */}
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-white transition mb-16 inline-block"
        >
          ← Back
        </Link>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Bitácora Digital
        </h1>
        <p className="mt-4 text-xl text-gray-400 max-w-2xl">
          Rescuing and Modernizing a Legacy GovTech Platform
        </p>
        <p className="mt-6 text-gray-500 max-w-2xl">
          A full architectural overhaul of a production construction supervision
          platform: from a monolithic, brittle V1 to a multi-tenant SaaS with
          offline-first sync, immutable audit trails, and asynchronous document
          generation.
        </p>

        {/* Stack tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((tag) => (
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
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-2xl font-bold">{m.value}</p>
              <p className="mt-1 text-xs text-gray-500">{m.label}</p>
            </div>
          ))}
        </div>

        {/* The Problem */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-2">The problem</h2>
          <p className="text-gray-500 mb-10 italic">
            `A system that worked, until it didn&#39;t`
          </p>
          <p className="text-gray-400 mb-10">
            Bitácora Digital is used by construction supervisors, municipal
            inspectors, and private firms to document site visits, checklists,
            and compliance records in real time, often in locations with no
            internet. The V1 system had been in production for years and
            accumulated real usage, but three structural problems had become
            impossible to ignore.
          </p>
          <div className="space-y-8">
            {problems.map((p) => (
              <div key={p.title}>
                <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* V1 vs V2 */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-10">V1 vs V2</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-widest">
                Before V1
              </p>
              <ul className="space-y-2">
                {v1.map((item) => (
                  <li key={item} className="text-gray-400 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-700 rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-widest">
                After V2
              </p>
              <ul className="space-y-2">
                {v2.map((item) => (
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
          <h2 className="text-2xl font-bold mb-4">Architecture decisions</h2>
          <p className="text-gray-500 text-sm mb-10">
            Each decision is documented as an ADR in the{" "}
            <a
              href="https://github.com/raytorresch/bitacora-architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              public repository
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
                    className={`shrink-0 border rounded-full px-2 py-0.5 text-xs ${badgeColor[adr.badge] ?? "border-gray-700 text-gray-400"}`}
                  >
                    {adr.badge}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{adr.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="mt-24">
          <h2 className="text-2xl font-bold mb-10">Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((o) => (
              <div
                key={o.title}
                className="border border-gray-800 rounded-xl p-6"
              >
                <h3 className="font-semibold text-white mb-2">{o.title}</h3>
                <p className="text-gray-400 text-sm">{o.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reflection */}
        <section className="mt-24 border-t border-gray-800 pt-16">
          <blockquote className="text-xl text-gray-300 italic leading-relaxed">
            `The hardest part wasn&#39;t the technology, it was making decisions
            with incomplete information while keeping a live system running.
            Every ADR was a forced conversation with future-me about tradeoffs I
            couldn&#39;t undo.`
          </blockquote>
        </section>

        {/* Footer note */}
        <p className="mt-12 text-sm text-gray-600">
          V2 currently in staging. Mobile refactor in progress. V3 roadmap
          includes migration to private storage with signed URLs (ADR 0008).
        </p>

        {/* Back bottom */}
        <div className="mt-24">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-white transition"
          >
            ← Back to portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
