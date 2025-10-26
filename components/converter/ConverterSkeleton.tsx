import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function ConverterSkeleton() {
  return (
    <Card className="w-full">
      <CardContent className="p-8">
        {/* Upload Area Skeleton */}
        <div className="border-3 border-dashed border-gray-300 rounded-xl p-12">
          <div className="space-y-4">
            <Skeleton className="h-16 w-16 rounded-full mx-auto" />
            <Skeleton className="h-6 w-64 mx-auto" />
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-40 mx-auto" />
            <Skeleton className="h-4 w-48 mx-auto" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
