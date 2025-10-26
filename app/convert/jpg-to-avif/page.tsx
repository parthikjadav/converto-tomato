import { Suspense } from 'react';
import { Metadata } from 'next';
import JpgToAvifConverter from '@/components/converter/jpg/JpgToAvifConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

export const metadata: Metadata = {
  title: 'JPG to AVIF Converter - Next-Gen Format | Converto Tomato',
  description: 'Convert JPG to AVIF format. Superior compression and quality. Modern image format for the web. 100% free and secure.',
  keywords: ['jpg to avif', 'avif converter', 'next-gen images', 'image optimization', 'modern format'],
};

export default function JPGtoAVIFConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 JPG to AVIF Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert to next-generation AVIF format with superior compression
          </p>
        </header>

        <Suspense fallback={<ConverterSkeleton />}>
          <JpgToAvifConverter />
        </Suspense>

        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-semibold text-lg mb-2">Superior Compression</h3>
            <p className="text-gray-600 text-sm">
              AVIF offers up to 50% better compression than JPG at the same quality.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-semibold text-lg mb-2">Next-Gen Format</h3>
            <p className="text-gray-600 text-sm">
              Modern image format supported by all major browsers.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Faster Loading</h3>
            <p className="text-gray-600 text-sm">
              Smaller file sizes mean faster page loads and better performance.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
