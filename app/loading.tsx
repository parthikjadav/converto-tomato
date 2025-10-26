import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="p-12 text-center space-y-6">
          {/* Loading Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <span className="text-6xl animate-bounce">🍅</span>
            </div>
          </div>

          {/* Loading Text */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Loading...</h2>
            </div>
            <p className="text-gray-600">
              Please wait while we prepare your converter
            </p>
          </div>

          {/* Loading Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '60%' }} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
