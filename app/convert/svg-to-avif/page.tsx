import { Suspense } from 'react';
import { Metadata } from 'next';
import SvgToAvifConverter from '@/components/converter/svg/SvgToAvifConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

export const metadata: Metadata = {
  title: 'SVG to AVIF Converter - Next-Gen Format | Converto Tomato',
  description: 'Convert SVG to AVIF format. Rasterize vector graphics to next-generation AVIF with superior compression. 100% free and secure.',
  keywords: ['svg to avif', 'rasterize svg', 'vector to avif', 'svg converter', 'avif converter'],
};

export default function SVGtoAVIFConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 SVG to AVIF Converter
          </h1>
          <p className="text-lg text-gray-600">
            Rasterize vector graphics to next-generation AVIF format
          </p>
        </header>

        <Suspense fallback={<ConverterSkeleton />}>
          <SvgToAvifConverter />
        </Suspense>

        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-semibold text-lg mb-2">Superior Compression</h3>
            <p className="text-gray-600 text-sm">
              AVIF offers the best compression for rasterized vector graphics.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="font-semibold text-lg mb-2">Custom Scaling</h3>
            <p className="text-gray-600 text-sm">
              Choose from 1x to 4x scaling for perfect output size.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-semibold text-lg mb-2">Next-Gen Format</h3>
            <p className="text-gray-600 text-sm">
              AVIF is the future of image formats with amazing quality.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
