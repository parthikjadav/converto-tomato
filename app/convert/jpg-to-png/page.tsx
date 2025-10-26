import { Suspense } from "react";
import { Metadata } from "next";
import MultiFileConverterClient from "@/components/converter/MultiFileConverterClient";
import ConverterFeatures from "@/components/converter/ConverterFeatures";
import ConverterSkeleton from "@/components/converter/ConverterSkeleton";

// Metadata for SEO (Server-side)
export const metadata: Metadata = {
  title: "JPG to PNG Converter - Free & Secure | Converto Tomato",
  description:
    "Convert JPG images to PNG format instantly. 100% free, secure, and private. All conversions happen in your browser - your files never leave your device.",
  keywords: [
    "jpg to png",
    "image converter",
    "free converter",
    "jpg converter",
    "png converter",
  ],
  openGraph: {
    title: "JPG to PNG Converter - Free & Secure",
    description: "Convert JPG images to PNG format instantly and securely",
    type: "website",
  },
};

// Server Component (default)
export default function JPGtoPNGConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        {/* Header - Server-rendered */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 JPG to PNG Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert your JPG images to PNG format instantly - free and secure
          </p>
        </header>

        {/* Main Converter - Client Component with Suspense */}
        <Suspense fallback={<ConverterSkeleton />}>
          <MultiFileConverterClient />
        </Suspense>

        {/* Features - Server-rendered */}
        <ConverterFeatures />
      </div>
    </div>
  );
}
