import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="text-6xl md:text-8xl mb-6 inline-block animate-bounce">🍅</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Convert Images
            <span className="block text-primary mt-2">Instantly & Free</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Fast, secure, and private image conversion. All processing happens in your browser - your files never leave your device.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 h-14" asChild>
              <Link href="/convert/jpg-to-png">
                Start Converting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Converto Tomato?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Instant conversion with no waiting. Process images in milliseconds, not minutes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>100% Private</CardTitle>
                <CardDescription>
                  All conversions happen locally in your browser. Your files never touch our servers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>High Quality</CardTitle>
                <CardDescription>
                  Maximum quality output with no compression. Your images look exactly as they should.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Convert Your Images?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join thousands of users who trust Converto Tomato for their image conversion needs.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 h-14" asChild>
              <Link href="/convert/jpg-to-png">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
