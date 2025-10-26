import { Suspense } from 'react';
import { Metadata } from 'next';
import WebpToIcoConverter from '@/components/converter/webp/WebpToIcoConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

export const metadata: Metadata = {
  title: 'WebP to ICO Converter - Create Favicons | Converto Tomato',
  description: 'Convert WebP images to ICO format for favicons. Modern format to universal icon. Choose from multiple sizes. 100% free and secure.',
  keywords: ['webp to ico', 'favicon converter', 'icon converter', 'ico maker', 'favicon generator', 'webp icon'],
};

export default function WebPtoICOConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 WebP to ICO Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert modern WebP images to ICO favicons
          </p>
        </header>

        <Suspense fallback={<ConverterSkeleton />}>
          <WebpToIcoConverter />
        </Suspense>

        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="font-semibold text-lg mb-2">Universal Format</h3>
            <p className="text-gray-600 text-sm">
              Convert modern WebP to ICO for maximum browser compatibility.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-semibold text-lg mb-2">Multiple Sizes</h3>
            <p className="text-gray-600 text-sm">
              Choose from 16x16 to 256x256 pixels for all favicon needs.
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
