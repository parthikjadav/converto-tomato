import { Suspense } from 'react';
import { Metadata } from 'next';
import SvgToWebpConverter from '@/components/converter/svg/SvgToWebpConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

export const metadata: Metadata = {
  title: 'SVG to WebP Converter - Modern Format | Converto Tomato',
  description: 'Convert SVG to WebP format. Rasterize vector graphics to modern WebP with superior compression. 100% free and secure.',
  keywords: ['svg to webp', 'rasterize svg', 'vector to webp', 'svg converter', 'webp converter'],
};

export default function SVGtoWebPConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 SVG to WebP Converter
          </h1>
          <p className="text-lg text-gray-600">
            Rasterize vector graphics to modern WebP format
          </p>
        </header>

        <Suspense fallback={<ConverterSkeleton />}>
          <SvgToWebpConverter />
        </Suspense>

        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-semibold text-lg mb-2">Superior Compression</h3>
            <p className="text-gray-600 text-sm">
              WebP offers excellent compression with high quality output.
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
            <h3 className="font-semibold text-lg mb-2">Modern Format</h3>
            <p className="text-gray-600 text-sm">
              WebP is supported by all modern browsers and platforms.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
