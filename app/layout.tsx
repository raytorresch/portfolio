import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
