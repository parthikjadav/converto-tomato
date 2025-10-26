import { Button } from '@/components/ui/button';
import { RefreshCw, Download } from 'lucide-react';

interface BatchActionsProps {
  allConverted: boolean;
  hasConvertedFiles: boolean;
  unconvertedCount: number;
  convertedCount: number;
  onConvertAll: () => void;
  onDownloadAll: () => void;
  onReset: () => void;
}

export default function BatchActions({
  allConverted,
  hasConvertedFiles,
  unconvertedCount,
  convertedCount,
  onConvertAll,
  onDownloadAll,
  onReset,
}: BatchActionsProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {!allConverted && (
        <Button size="lg" className="px-8" onClick={onConvertAll}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Convert All ({unconvertedCount})
        </Button>
      )}

      {hasConvertedFiles && (
        <Button
          size="lg"
          variant="default"
          className="px-8"
          onClick={onDownloadAll}
        >
          <Download className="mr-2 h-4 w-4" />
          Download All ({convertedCount})
        </Button>
      )}

      <Button size="lg" variant="outline" className="px-8" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
}
