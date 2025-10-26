import { Suspense } from 'react';
import { Metadata } from 'next';
import JpgToIcoConverter from '@/components/converter/jpg/JpgToIcoConverter';
import ConverterSkeleton from '@/components/converter/ConverterSkeleton';

// Metadata for SEO (Server-side)
export const metadata: Metadata = {
  title: 'JPG to ICO Converter - Create Favicons | Converto Tomato',
  description: 'Convert JPG images to ICO format for favicons. Choose from multiple sizes (16x16 to 256x256). Perfect for website icons. 100% free and secure.',
  keywords: ['jpg to ico', 'favicon converter', 'icon converter', 'ico maker', 'favicon generator', 'website icon'],
  openGraph: {
    title: 'JPG to ICO Converter - Create Favicons',
    description: 'Convert JPG images to ICO format for website favicons',
    type: 'website',
  },
};

// Server Component (default)
export default function JPGtoICOConverter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container max-w-4xl">
        {/* Header - Server-rendered */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🍅 JPG to ICO Converter
          </h1>
          <p className="text-lg text-gray-600">
            Create favicons and icons from your JPG images
          </p>
        </header>

        {/* Main Converter - Client Component with Suspense */}
        <Suspense fallback={<ConverterSkeleton />}>
          <JpgToIcoConverter />
        </Suspense>

        {/* Features - Server-rendered */}
        <section className="my-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-semibold text-lg mb-2">Multiple Sizes</h3>
            <p className="text-gray-600 text-sm">
              Choose from 16x16 to 256x256 pixels. Perfect for all favicon needs.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="font-semibold text-lg mb-2">Browser Compatible</h3>
            <p className="text-gray-600 text-sm">
              ICO format works in all browsers and is the standard for favicons.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Instant Creation</h3>
            <p className="text-gray-600 text-sm">
              Generate your favicon instantly in your browser. No upload required.
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">What is a Favicon?</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Favicon (Favorite Icon):</strong> A favicon is the small icon that appears 
              in your browser tab, bookmarks, and address bar. It's an essential part of your 
              website's branding and helps users quickly identify your site among multiple open tabs.
            </p>
            <p>
              <strong>ICO Format:</strong> ICO is the standard format for favicons. It's supported 
              by all browsers and can contain multiple sizes in a single file. Our converter creates 
              high-quality ICO files optimized for web use.
            </p>
            <p>
              <strong>Recommended Sizes:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>16x16px:</strong> Standard browser tab icon</li>
              <li><strong>32x32px:</strong> Most common favicon size (recommended)</li>
              <li><strong>48x48px:</strong> Windows site icons</li>
              <li><strong>64x64px:</strong> Windows taskbar</li>
              <li><strong>128x128px:</strong> Chrome Web Store</li>
              <li><strong>256x256px:</strong> High-resolution displays</li>
            </ul>
            <p>
              <strong>How to Use:</strong> After converting, upload the .ico file to your website's 
              root directory and add this code to your HTML &lt;head&gt; section:
            </p>
            <code className="block bg-gray-100 p-3 rounded text-sm mt-2">
              &lt;link rel="icon" type="image/x-icon" href="/favicon.ico"&gt;
            </code>
          </div>
        </section>

        {/* Size Guide */}
        <section className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Favicon Size Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-primary">Standard Sizes</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>16x16:</strong> Browser tabs, bookmarks</li>
                <li>• <strong>32x32:</strong> Standard favicon (most common)</li>
                <li>• <strong>48x48:</strong> Windows site icons</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-700">High-Resolution</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>64x64:</strong> Windows taskbar shortcuts</li>
                <li>• <strong>128x128:</strong> Chrome Web Store apps</li>
                <li>• <strong>256x256:</strong> Retina displays, high-DPI</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                Website Favicon
              </h3>
              <p className="text-sm text-gray-600">
                Create a favicon for your website to improve branding and user experience. 
                Shows in browser tabs and bookmarks.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">📱</span>
                Web App Icons
              </h3>
              <p className="text-sm text-gray-600">
                Generate icons for progressive web apps (PWAs) and browser extensions.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">💼</span>
                Business Branding
              </h3>
              <p className="text-sm text-gray-600">
                Convert your company logo to a favicon for professional website branding.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Custom Icons
              </h3>
              <p className="text-sm text-gray-600">
                Create custom icons for desktop shortcuts, folders, or applications.
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
                Our converter resizes your JPG image to the selected dimensions and encodes it 
                in ICO format. The image is centered and scaled to fit while maintaining aspect 
                ratio. White background is added for any empty space.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">File Format</h3>
              <p>
                ICO files can contain multiple image sizes. Our converter creates single-size 
                ICO files optimized for your chosen dimensions. For multi-size favicons, convert 
                multiple times with different sizes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">Browser Support</h3>
              <p>
                ICO format is supported by all major browsers including Chrome, Firefox, Safari, 
                Edge, and Internet Explorer. It's the most compatible format for favicons.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2 text-gray-900">Best Practices</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use simple, recognizable designs for small sizes (16x16, 32x32)</li>
                <li>Ensure good contrast for visibility on different backgrounds</li>
                <li>Test your favicon on both light and dark browser themes</li>
                <li>Name your file "favicon.ico" for automatic browser detection</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
