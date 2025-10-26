import { Suspense } from 'react';
import { Metadata } from 'next';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';
import PngToJpgConverter from '@/components/converter/png/PngToJpgConverter';

// Metadata for SEO (Server-side)
export const metadata: Metadata = {
  title: 'PNG to JPG Converter - Free & Secure | Converto Tomato',
  description: 'Convert PNG images to JPG format instantly. Adjust quality settings for optimal file size. 100% free, secure, and private. All conversions happen in your browser.',
  keywords: ['png to jpg', 'image converter', 'free converter', 'png converter', 'jpg converter', 'compress png'],
  openGraph: {
    title: 'PNG to JPG Converter - Free & Secure',
    description: 'Convert PNG images to JPG format instantly and securely',
    type: 'website',
  },
};

// Server Component (default)
export default function PNGtoJPGConverter() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        {/* Header - Server-rendered */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 PNG to JPG Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert your PNG images to JPG format with adjustable quality - free and secure
          </p>
        </header>

        {/* Main Converter - Client Component with Suspense */}
        <Suspense fallback={<ConverterSkeleton />}>
          <PngToJpgConverter />
        </Suspense>

        {/* Features - Server-rendered */}
        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-semibold text-lg mb-2">Quality Control</h3>
            <p className="text-gray-600 text-sm">
              Adjust JPG quality from 60% to 100% to balance file size and image quality.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-semibold text-lg mb-2">Smaller Files</h3>
            <p className="text-gray-600 text-sm">
              JPG format typically produces smaller file sizes, perfect for web use and sharing.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Batch Convert</h3>
            <p className="text-gray-600 text-sm">
              Convert up to 10 PNG images at once. Save time with bulk conversion.
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">About PNG to JPG Conversion</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Why convert PNG to JPG?</strong> JPG (JPEG) format is ideal for photographs 
              and images with many colors. It uses lossy compression to create smaller file sizes, 
              making it perfect for websites, emails, and social media.
            </p>
            <p>
              <strong>Quality Settings:</strong> Our converter lets you choose the quality level. 
              Higher quality (90-100%) preserves more detail but creates larger files. Lower quality 
              (60-80%) creates smaller files with some quality loss.
            </p>
            <p>
              <strong>Transparency Note:</strong> JPG format doesn't support transparency. Any 
              transparent areas in your PNG will be converted to white background.
            </p>
            <p>
              <strong>Privacy:</strong> All conversions happen locally in your browser. Your images 
              never leave your device, ensuring complete privacy and security.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
