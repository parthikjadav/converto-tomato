import { Suspense } from 'react';
import { Metadata } from 'next';
import JpgToWebpConverter from '@/components/converter/jpg/JpgToWebpConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

// Metadata for SEO (Server-side)
export const metadata: Metadata = {
  title: 'JPG to WebP Converter - Free & Secure | Converto Tomato',
  description: 'Convert JPG images to WebP format for superior compression. Reduce file sizes by up to 30% while maintaining quality. 100% free, secure, and private.',
  keywords: ['jpg to webp', 'image converter', 'free converter', 'webp converter', 'compress jpg', 'reduce file size'],
  openGraph: {
    title: 'JPG to WebP Converter - Free & Secure',
    description: 'Convert JPG images to modern WebP format with superior compression',
    type: 'website',
  },
};

// Server Component (default)
export default function JPGtoWebPConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        {/* Header - Server-rendered */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 JPG to WebP Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert your JPG images to modern WebP format with superior compression
          </p>
        </header>

        {/* Main Converter - Client Component with Suspense */}
        <Suspense fallback={<ConverterSkeleton />}>
          <JpgToWebpConverter />
        </Suspense>

        {/* Features - Server-rendered */}
        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">📉</div>
            <h3 className="font-semibold text-lg mb-2">Superior Compression</h3>
            <p className="text-gray-600 text-sm">
              WebP provides 25-35% better compression than JPG at the same quality level.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-semibold text-lg mb-2">Faster Loading</h3>
            <p className="text-gray-600 text-sm">
              Smaller file sizes mean faster page loads and better user experience.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="font-semibold text-lg mb-2">Modern Format</h3>
            <p className="text-gray-600 text-sm">
              WebP is supported by all modern browsers and recommended by Google.
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why Convert JPG to WebP?</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>What is WebP?</strong> WebP is a modern image format developed by Google 
              that provides superior compression for images on the web. It supports both lossy 
              and lossless compression, as well as transparency and animation.
            </p>
            <p>
              <strong>Better Compression:</strong> WebP images are typically 25-35% smaller than 
              JPG images at equivalent quality levels. This means faster page loads, reduced 
              bandwidth usage, and better SEO rankings.
            </p>
            <p>
              <strong>Quality Settings:</strong> Adjust the quality slider to find the perfect 
              balance between file size and image quality. Higher quality (85-100%) is great for 
              photos, while lower quality (60-80%) works well for web graphics.
            </p>
            <p>
              <strong>Browser Support:</strong> WebP is now supported by all modern browsers 
              including Chrome, Firefox, Safari, and Edge. It's the recommended format for web 
              images by Google PageSpeed Insights.
            </p>
            <p>
              <strong>Use Cases:</strong> Perfect for websites, blogs, e-commerce product images, 
              social media, and any scenario where you want to reduce file sizes without 
              sacrificing quality.
            </p>
            <p>
              <strong>Privacy:</strong> All conversions happen locally in your browser. Your images 
              never leave your device, ensuring complete privacy and security.
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">WebP vs JPG Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">✅ WebP Advantages</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 25-35% smaller file sizes</li>
                <li>• Supports transparency (alpha channel)</li>
                <li>• Better compression algorithms</li>
                <li>• Supports animation</li>
                <li>• Recommended by Google</li>
                <li>• Better for web performance</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-700">📋 JPG Characteristics</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Universal compatibility</li>
                <li>• Larger file sizes</li>
                <li>• No transparency support</li>
                <li>• Older compression method</li>
                <li>• Still widely used</li>
                <li>• Good for photography</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
