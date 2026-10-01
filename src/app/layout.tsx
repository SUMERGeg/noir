import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageMotion } from "@/components/motion/page-motion";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/page-metadata";
import { siteUrl } from "@/lib/site-url";
import "@/styles/tokens.css";
import "@/styles/primitives.css";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/motion.css";

const manrope = localFont({
  src: "../assets/fonts/Manrope-Variable.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  ...pageMetadata(site.descriptor, site.description, "/"),
  metadataBase: siteUrl,
  title: {
    default: `${site.name} — ${site.descriptor}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body>
        <a href="#main-content" className="skip-link">Перейти к содержимому</a>
        <Header />
        {children}
        <PageMotion />
        <Footer />
      </body>
    </html>
  );
}
