import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Sparkles } from 'lucide-react';

interface QualitySettingsProps {
  quality: number;
  onQualityChange: (quality: number) => void;
  minQuality?: number;
  maxQuality?: number;
  note?: string;
  showTransparencyIcon?: boolean;
}

export default function QualitySettings({
  quality,
  onQualityChange,
  minQuality = 60,
  maxQuality = 100,
  note,
  showTransparencyIcon,
}: QualitySettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Quality Settings
        </CardTitle>
        <CardDescription>
          <div className="space-y-2 mt-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Quality: {quality}%</span>
            </div>
            <input
              type="range"
              min={minQuality}
              max={maxQuality}
              value={quality}
              onChange={(e) => onQualityChange(Number(e.target.value))}
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
            {note && (
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                {showTransparencyIcon && <Sparkles className="h-3 w-3" />}
                {note}
              </p>
            )}
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
