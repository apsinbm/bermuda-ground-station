import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Globe, Shield, Zap, MapPin } from 'lucide-react';
import { generateSEO } from '@/lib/seo';
import { organizationSchema, localBusinessSchema } from '@/lib/schema';

export const metadata = generateSEO({
  title: 'Satellite Ground Station Hosting in Bermuda - North Atlantic Location',
  description: 'Professional satellite ground station hosting in Bermuda. Dedicated farms and rooftop sites with strong power, connectivity, and 30+ years IT/telecom experience.',
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            localBusinessSchema,
          ]),
        }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Satellite Ground Station Hosting in Bermuda
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            A trusted on-the-ground partner providing carrier-grade IT services and dedicated support 
            for satellite operators, broadcasters, and enterprises. With certified engineers on call 24/7, 
            we deliver the responsiveness and reliability global operators expect from Bermuda's strategic 
            North Atlantic position.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Link href="/contact">
              <Button size="lg" className="group">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/locations">
              <Button variant="outline" size="lg">
                View Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Bermuda Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Bermuda?
            </h2>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-8 lg:p-12">
                <p className="text-lg leading-8 text-gray-600 text-center mb-8">
                  Bermuda is a stable, first-world jurisdiction with a UK-based legal system. 
                  Our power grid is reliable, our internet connectivity is robust, and our telecom 
                  providers offer direct routes across the Atlantic. Together with secure 
                  infrastructure and regulatory clarity, Bermuda is a trusted location for 
                  satellite ground stations.
                </p>
                
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Strategic Location</h3>
                    <p className="mt-2 text-sm text-gray-600">North Atlantic positioning</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Stable Jurisdiction</h3>
                    <p className="mt-2 text-sm text-gray-600">UK legal system</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Reliable Power</h3>
                    <p className="mt-2 text-sm text-gray-600">Stable power grid</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Strong Connectivity</h3>
                    <p className="mt-2 text-sm text-gray-600">Atlantic fiber routes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your Reliable Satellite Hosting Partner
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
              With a blend of technical expertise, regulatory insight, and around-the-clock availability, 
              we make Bermuda a seamless extension of your global operations. Whether you are building 
              resilience, expanding coverage, or seeking a secure hosting environment, we are here to 
              support your mission.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="group">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}