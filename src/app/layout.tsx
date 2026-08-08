import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Materials and process engineer working across semiconductor fabrication, electrochemical characterization, materials reliability, and manufacturing improvement.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shukladiwakar.com"),
  title: `${portfolio.name} | ${portfolio.role}`,
  description,
  authors: [{ name: portfolio.name }],
  creator: portfolio.name,
  alternates: { canonical: "/" },
  keywords: [
    "materials engineer",
    "process engineer",
    "semiconductor processing",
    "materials characterization",
    "manufacturing engineering",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: `${portfolio.name} | ${portfolio.role}`,
    description,
    siteName: portfolio.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} | ${portfolio.role}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f0e9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
