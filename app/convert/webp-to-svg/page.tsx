import { Suspense } from 'react';
import { Metadata } from 'next';
import WebpToSvgConverter from '@/components/converter/webp/WebpToSvgConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

export const metadata: Metadata = {
  title: 'WebP to SVG Converter - Scalable Graphics | Converto Tomato',
  description: 'Convert WebP images to SVG format. Create scalable vector graphics from modern WebP images. 100% free and secure.',
  keywords: ['webp to svg', 'svg converter', 'vector graphics', 'scalable images', 'webp to vector'],
};

export default function WebPtoSVGConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 WebP to SVG Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert modern WebP images to scalable SVG format
          </p>
        </header>

        <Suspense fallback={<ConverterSkeleton />}>
          <WebpToSvgConverter />
        </Suspense>

        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="font-semibold text-lg mb-2">Infinitely Scalable</h3>
            <p className="text-gray-600 text-sm">
              SVG images scale to any size without losing quality.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-semibold text-lg mb-2">Design Tool Ready</h3>
            <p className="text-gray-600 text-sm">
              Use in Figma, Illustrator, and other design applications.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="font-semibold text-lg mb-2">Web Compatible</h3>
            <p className="text-gray-600 text-sm">
              SVG works perfectly in all modern web browsers.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
