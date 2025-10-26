import { Suspense } from 'react';
import { Metadata } from 'next';
import SvgToIcoConverter from '@/components/converter/svg/SvgToIcoConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

export const metadata: Metadata = {
  title: 'SVG to ICO Converter - Create Favicons | Converto Tomato',
  description: 'Convert SVG to ICO format for favicons. Rasterize vector logos to icons. Choose from multiple sizes. 100% free and secure.',
  keywords: ['svg to ico', 'favicon converter', 'icon converter', 'ico maker', 'favicon generator', 'vector to icon'],
};

export default function SVGtoICOConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 SVG to ICO Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert vector graphics to ICO favicons
          </p>
        </header>

        <Suspense fallback={<ConverterSkeleton />}>
          <SvgToIcoConverter />
        </Suspense>

        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-semibold text-lg mb-2">Perfect for Logos</h3>
            <p className="text-gray-600 text-sm">
              Convert your vector logo to a favicon for your website.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="font-semibold text-lg mb-2">Multiple Sizes</h3>
            <p className="text-gray-600 text-sm">
              Choose from 16x16 to 256x256 pixels for all your needs.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-semibold text-lg mb-2">High Quality</h3>
            <p className="text-gray-600 text-sm">
              Crisp, clean icons from your scalable vector graphics.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
