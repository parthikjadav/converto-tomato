import { Suspense } from 'react';
import { Metadata } from 'next';
import ImageCompressor from '@/components/compressor/ImageCompressor';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

export const metadata: Metadata = {
  title: 'Free Image Compressor - Reduce File Size Online | Converto Tomato',
  description: 'Compress JPG, PNG, and WebP images online. Reduce file size up to 90% while maintaining quality. Resize images and adjust compression. 100% free, secure, and browser-based. No uploads required.',
  keywords: [
    'image compressor',
    'compress images online',
    'reduce image file size',
    'image optimizer',
    'jpg compressor',
    'png compressor',
    'webp compressor',
    'resize images',
    'optimize images',
    'free image compression',
    'online image optimizer',
    'lossless compression'
  ],
  openGraph: {
    title: 'Free Image Compressor - Reduce File Size Online',
    description: 'Compress JPG, PNG, and WebP images. Reduce file size up to 90% while maintaining quality.',
    url: 'https://converto-tomato.vercel.app/compress',
    type: 'website',
  },
  alternates: {
    canonical: 'https://converto-tomato.vercel.app/compress',
  },
};

export default function CompressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 Image Compressor
          </h1>
          <p className="text-lg text-gray-600">
            Reduce image file sizes while maintaining quality
          </p>
        </header>

        <Suspense fallback={<ConverterSkeleton />}>
          <ImageCompressor />
        </Suspense>

        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">📉</div>
            <h3 className="font-semibold text-lg mb-2">Reduce File Size</h3>
            <p className="text-gray-600 text-sm">
              Compress images up to 90% smaller while maintaining visual quality.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-semibold text-lg mb-2">Adjust Quality</h3>
            <p className="text-gray-600 text-sm">
              Control compression level from 10% to 100% to find the perfect balance.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="font-semibold text-lg mb-2">Resize Images</h3>
            <p className="text-gray-600 text-sm">
              Optionally resize images to specific dimensions while compressing.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
