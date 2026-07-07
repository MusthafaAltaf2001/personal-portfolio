import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { CursorGlow } from "@/components/CursorGlow";
import { MotionProvider } from "@/components/MotionProvider";
import { NightSky } from "@/components/NightSky";
import { siteConfig, socials } from "@/lib/data";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Full-Stack Developer",
  url: siteConfig.url,
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  sameAs: socials.map((s) => s.href),
};

export const viewport: Viewport = {
  themeColor: "#080807",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${geistMono.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <NightSky />
        <CursorGlow />
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
      <GoogleAnalytics gaId={siteConfig.gaId} />
    </html>
  );
}
