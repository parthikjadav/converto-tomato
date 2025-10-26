import { Suspense } from 'react';
import { Metadata } from 'next';
import PngToIcoConverter from '@/components/converter/png/PngToIcoConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

export const metadata: Metadata = {
  title: 'PNG to ICO Converter - Create Favicons | Converto Tomato',
  description: 'Convert PNG images to ICO format for favicons. Preserves transparency. Choose from multiple sizes. Perfect for website icons. 100% free and secure.',
  keywords: ['png to ico', 'favicon converter', 'icon converter', 'ico maker', 'favicon generator', 'transparent icon'],
};

export default function PNGtoICOConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 PNG to ICO Converter
          </h1>
          <p className="text-lg text-gray-600">
            Create favicons from PNG images with transparency support
          </p>
        </header>

        <Suspense fallback={<ConverterSkeleton />}>
          <PngToIcoConverter />
        </Suspense>

        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-semibold text-lg mb-2">Transparency Support</h3>
            <p className="text-gray-600 text-sm">
              Preserves PNG transparency in ICO format for professional favicons.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-semibold text-lg mb-2">Multiple Sizes</h3>
            <p className="text-gray-600 text-sm">
              Choose from 16x16 to 256x256 pixels for all your needs.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Instant Creation</h3>
            <p className="text-gray-600 text-sm">
              Generate your favicon instantly in your browser.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
