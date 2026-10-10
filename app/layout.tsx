import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { school } from "@/lib/content";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Public_Sans({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: { default: school.name, template: `%s | ${school.name}` },
  description: `${school.name}: admissions, news, gallery and contact details.`,
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-sun focus:p-3">Skip to content</a>
        <Header /><main id="main">{children}</main><Footer /></body>
    </html>
  );
}
