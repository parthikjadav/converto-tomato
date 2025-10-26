import { Suspense } from 'react';
import { Metadata } from 'next';
import SvgToPngConverter from '@/components/converter/svg/SvgToPngConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

export const metadata: Metadata = {
  title: 'SVG to PNG Converter - Rasterize Vector Graphics | Converto Tomato',
  description: 'Convert SVG to PNG format. Rasterize vector graphics with custom scaling. Perfect for social media and web use. 100% free and secure.',
  keywords: ['svg to png', 'rasterize svg', 'vector to raster', 'svg converter', 'png converter'],
};

export default function SVGtoPNGConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 SVG to PNG Converter
          </h1>
          <p className="text-lg text-gray-600">
            Rasterize vector graphics to PNG with custom scaling
          </p>
        </header>

        <Suspense fallback={<ConverterSkeleton />}>
          <SvgToPngConverter />
        </Suspense>

        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-semibold text-lg mb-2">Custom Scaling</h3>
            <p className="text-gray-600 text-sm">
              Choose from 1x to 4x scaling for perfect output size.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-semibold text-lg mb-2">Retina Ready</h3>
            <p className="text-gray-600 text-sm">
              2x scaling creates perfect retina display images.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-semibold text-lg mb-2">High Quality</h3>
            <p className="text-gray-600 text-sm">
              Crisp, clean PNG output from your vector graphics.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
