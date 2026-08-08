import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

const description = `${portfolio.name} is a materials and process engineer focused on semiconductors, advanced materials, and manufacturing.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://shukladiwakar.com"),
  title: `${portfolio.name} | ${portfolio.role}`,
  description,
  authors: [{ name: portfolio.name }],
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
  themeColor: "#fbfaf6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
