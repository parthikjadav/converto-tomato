"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-8 md:p-12 text-center space-y-6">
          {/* Error Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <span className="text-8xl md:text-9xl">🍅</span>
              <div className="absolute -top-2 -right-2 bg-destructive text-white rounded-full h-16 w-16 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Something Went Wrong
            </h1>
            <p className="text-xl text-gray-600">
              We encountered an unexpected error.
            </p>
            <p className="text-gray-500">
              Don&apos;t worry, your files are safe. All processing happens in
              your browser.
            </p>
          </div>

          {/* Error Details (Development) */}
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-left">
              <p className="text-sm font-mono text-gray-700 break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-gray-500 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={reset}>
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
          </div>

          {/* Help Text */}
          <div className="pt-8 border-t">
            <p className="text-sm text-gray-600">
              If this problem persists, try refreshing the page or clearing your
              browser cache. All conversions happen locally in your browser, so
              your files remain private.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
