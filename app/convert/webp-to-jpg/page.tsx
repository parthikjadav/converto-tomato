import { Suspense } from 'react';
import { Metadata } from 'next';
import WebpToJpgConverter from '@/components/converter/webp/WebpToJpgConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

// Metadata for SEO (Server-side)
export const metadata: Metadata = {
  title: 'WebP to JPG Converter - Free & Secure | Converto Tomato',
  description: 'Convert WebP images to JPG format with adjustable quality. Perfect for compatibility and sharing. 100% free, secure, and private.',
  keywords: ['webp to jpg', 'image converter', 'free converter', 'jpg converter', 'webp converter', 'compatibility'],
  openGraph: {
    title: 'WebP to JPG Converter - Free & Secure',
    description: 'Convert WebP images to JPG format with adjustable quality',
    type: 'website',
  },
};

// Server Component (default)
export default function WebPtoJPGConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        {/* Header - Server-rendered */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 WebP to JPG Converter
          </h1>
          <p className="text-lg text-gray-600">
            Convert your WebP images to JPG format with adjustable quality
          </p>
        </header>

        {/* Main Converter - Client Component with Suspense */}
        <Suspense fallback={<ConverterSkeleton />}>
          <WebpToJpgConverter />
        </Suspense>

        {/* Features - Server-rendered */}
        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="font-semibold text-lg mb-2">Universal Compatibility</h3>
            <p className="text-gray-600 text-sm">
              JPG is supported everywhere - all devices, browsers, and software.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-semibold text-lg mb-2">Quality Control</h3>
            <p className="text-gray-600 text-sm">
              Adjust JPG quality from 60% to 100% to balance file size and image quality.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📤</div>
            <h3 className="font-semibold text-lg mb-2">Easy Sharing</h3>
            <p className="text-gray-600 text-sm">
              JPG format is perfect for sharing on social media, email, and messaging apps.
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why Convert WebP to JPG?</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Maximum Compatibility:</strong> While WebP is modern and efficient, JPG 
              remains the most universally supported image format. Converting to JPG ensures 
              your images work everywhere - from legacy software to older devices and all 
              social media platforms.
            </p>
            <p>
              <strong>Quality Control:</strong> Our converter lets you choose the quality level 
              (60-100%). Higher quality preserves more detail but creates larger files. Lower 
              quality creates smaller files with some quality loss. Find the perfect balance 
              for your needs.
            </p>
            <p>
              <strong>Easy Sharing:</strong> JPG is the standard format for sharing photos 
              online. It's widely accepted by all social media platforms, email clients, and 
              messaging apps. Convert your WebP images to JPG for hassle-free sharing.
            </p>
            <p>
              <strong>Transparency Note:</strong> JPG format doesn't support transparency. Any 
              transparent areas in your WebP will be converted to white background. If you need 
              transparency, consider converting to PNG instead.
            </p>
            <p>
              <strong>File Size:</strong> JPG typically produces smaller files than PNG but may 
              be larger or smaller than WebP depending on the quality setting and image content. 
              Adjust the quality slider to find your ideal file size.
            </p>
            <p>
              <strong>Privacy:</strong> All conversions happen locally in your browser. Your 
              images never leave your device, ensuring complete privacy and security.
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">WebP vs JPG Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">✅ JPG Advantages</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Universal compatibility</li>
                <li>• Supported everywhere</li>
                <li>• Easy to share</li>
                <li>• Works on all devices</li>
                <li>• Standard format</li>
                <li>• Adjustable quality</li>
                <li>• Good for photos</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-700">📋 WebP Characteristics</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Smaller file sizes</li>
                <li>• Modern format</li>
                <li>• Limited compatibility</li>
                <li>• Better compression</li>
                <li>• Supports transparency</li>
                <li>• Newer technology</li>
                <li>• Great for web</li>
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
                <span className="text-2xl">📱</span>
                Social Media
              </h3>
              <p className="text-sm text-gray-600">
                Convert WebP to JPG for uploading to Instagram, Facebook, Twitter, and other 
                social platforms that may not fully support WebP.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">📧</span>
                Email Attachments
              </h3>
              <p className="text-sm text-gray-600">
                JPG is the safest format for email attachments, ensuring recipients can view 
                your images regardless of their email client.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">🖼️</span>
                Photo Printing
              </h3>
              <p className="text-sm text-gray-600">
                Most photo printing services prefer JPG format. Convert your WebP images to 
                JPG for professional printing.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">💼</span>
                Business Documents
              </h3>
              <p className="text-sm text-gray-600">
                Use JPG for presentations, reports, and documents where universal compatibility 
                is essential.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">Conversion Process</h3>
              <p>
                Our converter uses the Canvas API to decode WebP and re-encode as JPG with your 
                chosen quality setting. The process is fast, efficient, and happens entirely in 
                your browser.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">Quality Settings</h3>
              <p>
                Quality range from 60-100%. Higher values (90-100%) are best for photos and 
                detailed images. Lower values (60-80%) work well for web graphics and when 
                file size is a priority.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">Transparency Handling</h3>
              <p>
                JPG doesn't support transparency. Any transparent areas in your WebP will be 
                filled with white background. If you need transparency, use PNG format instead.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
