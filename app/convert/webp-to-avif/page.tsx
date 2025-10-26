import { Suspense } from 'react';
import { Metadata } from 'next';
import WebpToAvifConverter from '@/components/converter/webp/WebpToAvifConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

export const metadata: Metadata = {
  title: 'WebP to AVIF Converter - Next-Gen Format | Converto Tomato',
  description: 'Convert WebP to AVIF format. Superior compression between modern formats. Next-generation image optimization. 100% free and secure.',
  keywords: ['webp to avif', 'avif converter', 'next-gen images', 'image optimization', 'modern formats'],
};

export default function WebPtoAVIFConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 WebP to AVIF Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert between modern formats with superior compression
          </p>
        </header>

        <Suspense fallback={<ConverterSkeleton />}>
          <WebpToAvifConverter />
        </Suspense>

        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-semibold text-lg mb-2">Modern to Modern</h3>
            <p className="text-gray-600 text-sm">
              Convert between two cutting-edge image formats for optimal results.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-semibold text-lg mb-2">Superior Compression</h3>
            <p className="text-gray-600 text-sm">
              AVIF often provides even better compression than WebP.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Quality Control</h3>
            <p className="text-gray-600 text-sm">
              Adjust quality settings to find the perfect balance.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
