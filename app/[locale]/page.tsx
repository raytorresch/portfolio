import { setRequestLocale } from "next-intl/server";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Proof from "@/components/Proof";
import StatStrip from "@/components/StatStrip";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-black sm:items-start">
        <div className="w-full max-w-3xl">
          <Hero />
          <StatStrip />
        </div>
        <Projects />
        <div className="w-full max-w-3xl">
          <Proof />
          <Contact />
        </div>
      </main>
    </div>
  );
}
