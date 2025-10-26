import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingDown, TrendingUp, Sparkles } from 'lucide-react';

interface SummaryCardProps {
  filesCount: number;
  maxFiles: number;
  convertedCount: number;
  totalCompression?: number;
  sizeIncrease?: number;
  showTransparencyNote?: boolean;
  onClearAll: () => void;
}

export default function SummaryCard({
  filesCount,
  maxFiles,
  convertedCount,
  totalCompression,
  sizeIncrease,
  showTransparencyNote,
  onClearAll,
}: SummaryCardProps) {
  const hasConvertedFiles = convertedCount > 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center justify-between">
          <span>Selected Files ({filesCount}/{maxFiles})</span>
          <Button variant="ghost" size="sm" onClick={onClearAll}>
            Clear All
          </Button>
        </CardTitle>
        <CardDescription>
          {convertedCount} of {filesCount} files converted
          {hasConvertedFiles && totalCompression !== undefined && totalCompression > 0 && (
            <span className="flex items-center gap-1 text-green-600 mt-1">
              <TrendingDown className="h-3 w-3" />
              {totalCompression}% smaller
            </span>
          )}
          {hasConvertedFiles && sizeIncrease !== undefined && sizeIncrease > 0 && (
            <span className="flex items-center gap-1 text-blue-600 mt-1">
              <TrendingUp className="h-3 w-3" />
              {sizeIncrease}% larger (lossless quality)
            </span>
          )}
          {hasConvertedFiles && showTransparencyNote && (
            <span className="flex items-center gap-1 text-green-600 mt-1">
              <Sparkles className="h-3 w-3" />
              Transparency preserved
            </span>
          )}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
