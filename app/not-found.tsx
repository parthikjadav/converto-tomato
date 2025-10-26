import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-8 md:p-12 text-center space-y-6">
          {/* 404 Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <span className="text-8xl md:text-9xl">🍅</span>
              <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                404
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-gray-500">
              It might have been moved or deleted, or you may have mistyped the URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/convert/jpg-to-png">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Converters
              </Link>
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="pt-8 border-t">
            <div className="flex items-center justify-center gap-2 mb-4 text-gray-600">
              <Search className="h-4 w-4" />
              <span className="text-sm font-semibold">Popular Pages</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/convert/jpg-to-png">JPG to PNG</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/convert/png-to-jpg">PNG to JPG</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/convert/webp-to-png">WebP to PNG</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/compress">Image Compressor</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
