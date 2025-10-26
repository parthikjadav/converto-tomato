import { Suspense } from 'react';
import { Metadata } from 'next';
import SvgToJpgConverter from '@/components/converter/svg/SvgToJpgConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

export const metadata: Metadata = {
  title: 'SVG to JPG Converter - Rasterize Vector Graphics | Converto Tomato',
  description: 'Convert SVG to JPG format. Rasterize vector graphics with custom scaling and quality. Perfect for universal compatibility. 100% free and secure.',
  keywords: ['svg to jpg', 'rasterize svg', 'vector to jpg', 'svg converter', 'jpg converter'],
};

export default function SVGtoJPGConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 SVG to JPG Converter
          </h1>
          <p className="text-lg text-gray-600">
            Rasterize vector graphics to JPG with custom scaling and quality
          </p>
        </header>

        <Suspense fallback={<ConverterSkeleton />}>
          <SvgToJpgConverter />
        </Suspense>

        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-semibold text-lg mb-2">Quality Control</h3>
            <p className="text-gray-600 text-sm">
              Adjust quality from 60-100% for perfect file size balance.
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
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="font-semibold text-lg mb-2">Universal Format</h3>
            <p className="text-gray-600 text-sm">
              JPG works everywhere - perfect for sharing and compatibility.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
