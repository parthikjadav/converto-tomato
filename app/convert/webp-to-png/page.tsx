import { Suspense } from 'react';
import { Metadata } from 'next';
import WebpToPngConverter from '@/components/converter/webp/WebpToPngConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

// Metadata for SEO (Server-side)
export const metadata: Metadata = {
  title: 'WebP to PNG Converter - Free & Secure | Converto Tomato',
  description: 'Convert WebP images to PNG format with lossless quality. Perfect for maximum compatibility and editing. 100% free, secure, and private.',
  keywords: ['webp to png', 'image converter', 'free converter', 'png converter', 'lossless conversion', 'preserve quality'],
  openGraph: {
    title: 'WebP to PNG Converter - Free & Secure',
    description: 'Convert WebP images to PNG format with lossless quality',
    type: 'website',
  },
};

// Server Component (default)
export default function WebPtoPNGConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        {/* Header - Server-rendered */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 WebP to PNG Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert your WebP images to PNG format with lossless quality
          </p>
        </header>

        {/* Main Converter - Client Component with Suspense */}
        <Suspense fallback={<ConverterSkeleton />}>
          <WebpToPngConverter />
        </Suspense>

        {/* Features - Server-rendered */}
        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="font-semibold text-lg mb-2">Lossless Quality</h3>
            <p className="text-gray-600 text-sm">
              PNG conversion is 100% lossless, preserving every pixel of your original image.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-semibold text-lg mb-2">Universal Compatibility</h3>
            <p className="text-gray-600 text-sm">
              PNG is supported everywhere - older browsers, software, and all editing tools.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-semibold text-lg mb-2">Transparency Preserved</h3>
            <p className="text-gray-600 text-sm">
              Alpha channel transparency is fully maintained during conversion.
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why Convert WebP to PNG?</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Maximum Compatibility:</strong> While WebP is modern and efficient, PNG 
              remains the most universally supported image format. Converting to PNG ensures 
              your images work everywhere - from legacy software to older browsers and all 
              image editing applications.
            </p>
            <p>
              <strong>Lossless Conversion:</strong> Our WebP to PNG conversion is completely 
              lossless. Every pixel, every color, and every transparent area is preserved 
              exactly as it was in the original WebP file. There's zero quality loss.
            </p>
            <p>
              <strong>Editing Compatibility:</strong> Many image editing tools and design 
              software still prefer PNG format. Converting your WebP files to PNG makes them 
              easier to edit in Photoshop, GIMP, and other professional tools.
            </p>
            <p>
              <strong>Transparency Support:</strong> Both WebP and PNG support alpha channel 
              transparency, and our converter preserves it perfectly. Your transparent 
              backgrounds, drop shadows, and anti-aliased edges remain intact.
            </p>
            <p>
              <strong>File Size Note:</strong> PNG files are typically larger than WebP because 
              PNG uses lossless compression while WebP can use lossy compression. This is 
              normal and expected - you're trading file size for maximum quality and compatibility.
            </p>
            <p>
              <strong>When to Convert:</strong> Convert WebP to PNG when you need to edit the 
              image, share it with users on older systems, use it in software that doesn't 
              support WebP, or when you need guaranteed compatibility.
            </p>
            <p>
              <strong>Privacy:</strong> All conversions happen locally in your browser. Your 
              images never leave your device, ensuring complete privacy and security.
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">WebP vs PNG Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">✅ PNG Advantages</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Universal compatibility</li>
                <li>• Lossless compression</li>
                <li>• Perfect for editing</li>
                <li>• Supported everywhere</li>
                <li>• No quality loss</li>
                <li>• Transparency support</li>
                <li>• Industry standard</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-700">📋 WebP Characteristics</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Smaller file sizes</li>
                <li>• Modern format</li>
                <li>• Limited compatibility</li>
                <li>• Great for web</li>
                <li>• Lossy or lossless</li>
                <li>• Transparency support</li>
                <li>• Newer technology</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Image Editing
              </h3>
              <p className="text-sm text-gray-600">
                Convert WebP to PNG before opening in Photoshop, GIMP, or other editing 
                software that may not fully support WebP format.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">🖨️</span>
                Printing
              </h3>
              <p className="text-sm text-gray-600">
                Many printing services and professional printers prefer PNG format for 
                its lossless quality and universal support.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">📱</span>
                Legacy Systems
              </h3>
              <p className="text-sm text-gray-600">
                Share images with users on older devices, operating systems, or browsers 
                that don't support WebP format.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">📄</span>
                Documentation
              </h3>
              <p className="text-sm text-gray-600">
                Use PNG in documentation, presentations, and reports where compatibility 
                and reliability are more important than file size.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">Lossless Conversion</h3>
              <p>
                Our converter uses the Canvas API to decode WebP and re-encode as PNG without 
                any quality loss. The process is completely lossless - every pixel is preserved 
                exactly as it was in the original WebP file.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">Transparency Handling</h3>
              <p>
                Both WebP and PNG support 8-bit alpha channel transparency. Our converter 
                preserves the alpha channel perfectly, maintaining all transparent and 
                semi-transparent areas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">File Size Increase</h3>
              <p>
                PNG files are typically larger than WebP because PNG uses lossless compression 
                while WebP often uses lossy compression. Expect PNG files to be 20-50% larger, 
                but with guaranteed perfect quality.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
