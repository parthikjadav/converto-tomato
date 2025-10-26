import { Suspense } from 'react';
import { Metadata } from 'next';
import PngToWebpConverter from '@/components/converter/png/PngToWebpConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

// Metadata for SEO (Server-side)
export const metadata: Metadata = {
  title: 'PNG to WebP Converter - Free & Secure | Converto Tomato',
  description: 'Convert PNG images to WebP format while preserving transparency. Reduce file sizes significantly. 100% free, secure, and private. All conversions happen in your browser.',
  keywords: ['png to webp', 'image converter', 'free converter', 'webp converter', 'compress png', 'preserve transparency'],
  openGraph: {
    title: 'PNG to WebP Converter - Free & Secure',
    description: 'Convert PNG images to modern WebP format with transparency support',
    type: 'website',
  },
};

// Server Component (default)
export default function PNGtoWebPConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        {/* Header - Server-rendered */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 PNG to WebP Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert your PNG images to WebP format while preserving transparency
          </p>
        </header>

        {/* Main Converter - Client Component with Suspense */}
        <Suspense fallback={<ConverterSkeleton />}>
          <PngToWebpConverter />
        </Suspense>

        {/* Features - Server-rendered */}
        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-semibold text-lg mb-2">Transparency Preserved</h3>
            <p className="text-gray-600 text-sm">
              Unlike JPG, WebP maintains PNG's alpha channel for perfect transparency.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-semibold text-lg mb-2">Smaller Files</h3>
            <p className="text-gray-600 text-sm">
              WebP offers 26% smaller file sizes than PNG while maintaining the same quality.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-semibold text-lg mb-2">Perfect for Graphics</h3>
            <p className="text-gray-600 text-sm">
              Ideal for logos, icons, illustrations, and any image requiring transparency.
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why Convert PNG to WebP?</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Best of Both Worlds:</strong> WebP combines PNG's transparency support 
              with superior compression. You get smaller file sizes without sacrificing the 
              alpha channel that makes PNG so useful for graphics and design work.
            </p>
            <p>
              <strong>Significant Size Reduction:</strong> WebP typically produces files that 
              are 26% smaller than PNG at equivalent quality. This means faster page loads, 
              reduced bandwidth costs, and better performance.
            </p>
            <p>
              <strong>Quality Settings:</strong> Adjust the quality slider (70-100%) to find 
              your ideal balance. Higher settings (90-100%) are recommended for PNG conversion 
              to preserve fine details and transparency edges.
            </p>
            <p>
              <strong>Transparency Support:</strong> Unlike JPG, WebP fully supports alpha 
              channel transparency just like PNG. Your transparent backgrounds, drop shadows, 
              and anti-aliased edges are perfectly preserved.
            </p>
            <p>
              <strong>Perfect Use Cases:</strong> Logos, icons, UI elements, illustrations, 
              graphics with text, product images with transparent backgrounds, and any design 
              work requiring transparency.
            </p>
            <p>
              <strong>Modern Standard:</strong> WebP is now the recommended format for web 
              images by Google and is supported by all modern browsers. It's the future of 
              web graphics.
            </p>
            <p>
              <strong>Privacy:</strong> All conversions happen locally in your browser. Your 
              images never leave your device, ensuring complete privacy and security.
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">PNG vs WebP Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">✅ WebP Advantages</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 26% smaller file sizes</li>
                <li>• Maintains transparency</li>
                <li>• Better compression algorithm</li>
                <li>• Faster page loading</li>
                <li>• Supports both lossy & lossless</li>
                <li>• Modern web standard</li>
                <li>• SEO benefits</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-700">📋 PNG Characteristics</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Larger file sizes</li>
                <li>• Excellent transparency</li>
                <li>• Lossless compression</li>
                <li>• Universal compatibility</li>
                <li>• Great for graphics</li>
                <li>• Older format</li>
                <li>• Widely supported</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">Transparency Handling</h3>
              <p>
                WebP supports full 8-bit alpha channel transparency, identical to PNG. 
                This means perfect preservation of transparent areas, semi-transparent 
                pixels, and anti-aliased edges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">Compression Method</h3>
              <p>
                WebP uses predictive coding and advanced entropy encoding to achieve 
                superior compression. It can use both lossy and lossless compression 
                depending on your quality settings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">Browser Support</h3>
              <p>
                WebP is supported by Chrome, Firefox, Edge, Safari (14+), and Opera. 
                This covers over 95% of global browser usage, making it safe for 
                production use.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">Best Practices</h3>
              <p>
                Use quality 90-100% for graphics with sharp edges and text. Use 70-85% 
                for photographs and complex images. Always test the output to ensure 
                transparency is preserved correctly.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
