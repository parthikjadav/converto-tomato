import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Lock, Globe, Heart, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Free Online Image Converter | Converto Tomato',
  description: 'Learn about Converto Tomato - a free, secure, and fast image conversion tool supporting 20+ formats. Convert JPG, PNG, WebP, SVG, AVIF, and ICO directly in your browser with complete privacy. No uploads, 100% secure.',
  keywords: [
    'about converto tomato',
    'free image converter',
    'browser-based converter',
    'privacy-focused converter',
    'secure image conversion',
    'no upload converter',
    'offline image converter',
    'open source converter'
  ],
  openGraph: {
    title: 'About Us - Free Online Image Converter | Converto Tomato',
    description: 'Learn about Converto Tomato - a free, secure, and fast image conversion tool supporting 20+ formats.',
    url: 'https://converto-tomato.vercel.app/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://converto-tomato.vercel.app/about',
  },
};

const features = [
  {
    icon: Lock,
    title: '100% Private',
    description: 'All conversions happen in your browser. Your images never leave your device, ensuring complete privacy and security.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'No uploads, no waiting. Convert images instantly with our browser-based technology.',
  },
  {
    icon: Shield,
    title: 'Completely Free',
    description: 'No hidden fees, no subscriptions, no watermarks. All features are free forever.',
  },
  {
    icon: Globe,
    title: 'Works Offline',
    description: 'Once loaded, our tool works offline. No internet connection required for conversions.',
  },
  {
    icon: Heart,
    title: 'User-Friendly',
    description: 'Simple, intuitive interface designed for everyone. No technical knowledge required.',
  },
  {
    icon: Code,
    title: 'Open Source',
    description: 'Built with modern web technologies. Transparent, secure, and continuously improving.',
  },
];

const converters = [
  { name: 'JPG to PNG', description: 'Add transparency support to JPG images' },
  { name: 'PNG to JPG', description: 'Reduce file sizes by converting to JPG' },
  { name: 'JPG to WebP', description: 'Modern format with superior compression' },
  { name: 'PNG to WebP', description: 'Smaller files while preserving transparency' },
  { name: 'WebP to PNG', description: 'Maximum compatibility with PNG format' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-5xl">🍅</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              About Converto Tomato
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A free, secure, and lightning-fast image conversion tool that respects your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  At Converto Tomato, we believe that image conversion should be simple, fast, and 
                  accessible to everyone. We created this tool to solve a common problem: the need 
                  for quick, reliable image format conversion without compromising privacy or paying 
                  expensive subscription fees.
                </p>
                <p>
                  Unlike traditional online converters that upload your images to remote servers, 
                  Converto Tomato performs all conversions directly in your browser using modern 
                  web technologies. This means your images never leave your device, ensuring complete 
                  privacy and security.
                </p>
                <p>
                  We&apos;re committed to keeping Converto Tomato free forever, with no hidden fees, 
                  no watermarks, and no limitations. Our goal is to provide the best image conversion 
                  experience possible while respecting your privacy and time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Converto Tomato?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Upload Your Images</h3>
                    <p className="text-gray-600">
                      Drag and drop or browse to select up to 10 images. Supports JPG, PNG, and WebP formats.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Convert Instantly</h3>
                    <p className="text-gray-600">
                      Our browser-based technology converts your images in seconds. No uploads, no waiting.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Download Results</h3>
                    <p className="text-gray-600">
                      Download individual files or all at once. Your converted images are ready immediately.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Available Converters */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Available Converters
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {converters.map((converter) => (
              <Card key={converter.name}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{converter.name}</h3>
                  <p className="text-gray-600 text-sm">{converter.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Built with Modern Technology</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Converto Tomato is built using cutting-edge web technologies including Next.js, 
                  React, and TypeScript. We leverage the HTML5 Canvas API for image processing, 
                  ensuring fast, efficient conversions directly in your browser.
                </p>
                <p>
                  Our tool is fully responsive and works seamlessly on desktop, tablet, and mobile 
                  devices. We use modern UI components from shadcn/ui and Tailwind CSS to provide 
                  a beautiful, intuitive user experience.
                </p>
                <p>
                  All code is written with security and performance in mind. We follow best practices 
                  for web development and continuously update our tool to incorporate the latest 
                  improvements and features.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Privacy Matters</h2>
                  <p className="text-gray-600 text-lg">
                    We take your privacy seriously. Here&apos;s our commitment:
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>No image uploads - all processing happens in your browser</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>No data collection - we don&apos;t track or store your images</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>No registration required - use our tool anonymously</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>No cookies for tracking - only essential cookies for functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Open source - our code is transparent and auditable</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Convert Your Images?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Start converting images for free. No sign-up required.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/convert/jpg-to-png">
                    Try JPG to PNG
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20" asChild>
                  <Link href="/convert/png-to-webp">
                    Try PNG to WebP
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
