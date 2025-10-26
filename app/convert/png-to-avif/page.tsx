import { Suspense } from 'react';
import { Metadata } from 'next';
import PngToAvifConverter from '@/components/converter/png/PngToAvifConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

export const metadata: Metadata = {
  title: 'PNG to AVIF Converter - Next-Gen Format | Converto Tomato',
  description: 'Convert PNG to AVIF format. Superior compression with transparency support. Modern image format for the web. 100% free and secure.',
  keywords: ['png to avif', 'avif converter', 'next-gen images', 'image optimization', 'transparent avif'],
};

export default function PNGtoAVIFConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 PNG to AVIF Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert to next-generation AVIF format with transparency support
          </p>
        </header>

        <Suspense fallback={<ConverterSkeleton />}>
          <PngToAvifConverter />
        </Suspense>

        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-semibold text-lg mb-2">Superior Compression</h3>
            <p className="text-gray-600 text-sm">
              AVIF offers up to 50% better compression than PNG while maintaining quality.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-semibold text-lg mb-2">Transparency Support</h3>
            <p className="text-gray-600 text-sm">
              Preserves PNG transparency in the modern AVIF format.
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
