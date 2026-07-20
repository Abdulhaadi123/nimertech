import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NimerTech — Engineering Tomorrow's Digital Reality",
  description:
    "NimerTech delivers AI-powered software solutions, custom development, and elite IT talent. From intelligent automation to full-stack engineering — we build technology that scales your business across 30+ countries.",
  keywords:
    "software development, AI solutions, staff augmentation, custom software, mobile app development, cloud devops, technology consulting, machine learning",
  openGraph: {
    title: "NimerTech — Engineering Tomorrow's Digital Reality",
    description:
      "AI-powered software solutions, custom development, and elite IT talent for startups and enterprises worldwide.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NimerTech — Engineering Tomorrow's Digital Reality",
    description:
      "AI-powered software solutions, custom development, and elite IT talent for startups and enterprises worldwide.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)] bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
