import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://converto-tomato.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Converto Tomato - Free Online Image Converter & Compressor",
    template: "%s | Converto Tomato",
  },
  description:
    "Free online image converter supporting 20+ formats. Convert JPG, PNG, WebP, SVG, AVIF, and ICO. Fast, secure, and 100% browser-based. No uploads, complete privacy.",
  keywords: [
    "image converter",
    "online image converter",
    "free image converter",
    "jpg to png",
    "png to jpg",
    "webp converter",
    "svg to png",
    "avif converter",
    "ico maker",
    "favicon generator",
    "image compressor",
    "convert images online",
    "browser-based converter",
    "secure image converter",
    "no upload converter",
  ],
  authors: [{ name: "Converto Tomato", url: baseUrl }],
  creator: "Converto Tomato",
  publisher: "Converto Tomato",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Converto Tomato",
    title: "Converto Tomato - Free Online Image Converter & Compressor",
    description:
      "Free online image converter supporting 20+ formats. Convert JPG, PNG, WebP, SVG, AVIF, and ICO. Fast, secure, and 100% browser-based.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Converto Tomato - Free Image Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Converto Tomato - Free Online Image Converter",
    description:
      "Free online image converter supporting 20+ formats. Fast, secure, and 100% browser-based.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: "TEcOxeLJn2CCc0kGENntDDBChtD8YLkLkp8UmzZ-6KQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
