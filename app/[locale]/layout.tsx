import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ray Torres – Mobile & Backend Engineer",
  description:
    "Mobile & Backend Engineer specializing in Flutter, Firebase, Laravel, and Go. Building production-grade apps and systems for governments and startups.",
  keywords: [
    "Flutter Developer",
    "Firebase Developer",
    "Laravel Backend",
    "Go Backend",
    "Mobile App Developer",
    "Senior Software Engineer",
  ],
  openGraph: {
    title: "Ray Torres – Senior Flutter & Backend Engineer",
    description:
      "I build production-grade mobile and backend systems used by governments and startups.",
    url: "https://raytorres.dev",
    siteName: "Ray Torres",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ray Torres – Senior Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
