import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: '100% Private',
    description: 'All conversions happen in your browser. Your files never leave your device.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Instant conversion with no waiting. Convert as many files as you need.',
  },
  {
    icon: Award,
    title: 'High Quality',
    description: 'Maximum quality PNG output with no compression or quality loss.',
  },
];

export default function ConverterFeatures() {
  return (
    <div className="mt-12 grid md:grid-cols-3 gap-6">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <Card key={feature.title} className="text-center">
            <CardHeader>
              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
