import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Globe, Shield, Zap, MapPin, Antenna } from 'lucide-react';
import { generateSEO } from '@/lib/seo';
import { organizationSchema, localBusinessSchema } from '@/lib/schema';

export const metadata = generateSEO({
  title: 'Bermuda Teleport & Ground Station Hosting - North Atlantic Earth Station',
  description: 'Professional teleport and ground station hosting in Bermuda. Dedicated earth station facilities and rooftop sites with carrier-grade infrastructure and 30+ years experience.',
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
      <section className="relative overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/bermuda-from-space.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gray-900/40" />
        </div>
        
        {/* Content */}
        <div className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Atlantic Teleport & Ground Station Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 max-w-3xl mx-auto">
              Your trusted North Atlantic teleport partner providing carrier-grade earth station services 
              and dedicated support for satellite operators, broadcasters, and enterprises. With certified engineers 
              on call 24/7, we deliver the responsiveness and reliability global operators expect from our strategic position.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Link href="/contact">
                <Button size="lg" className="group relative overflow-hidden bg-primary px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/locations">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300">
                  View Locations
                </Button>
              </Link>
            </div>
            
            {/* Strategic Position Indicator */}
            <div className="mt-16 inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-white">
                Strategic North Atlantic Position • 
                <a 
                  href="https://maps.app.goo.gl/yFiMAHtoPgVy2pbJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 hover:underline transition-colors ml-1"
                >
                  32°N 64°W
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/10 bg-muted/50 backdrop-blur-lg py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center">
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-primary">ISO</div>
              <div className="text-sm text-muted-foreground">Certified Operations</div>
            </div>
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
                <p className="text-lg leading-8 text-gray-700 text-center mb-8">
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
                    <p className="mt-2 text-sm text-gray-700">North Atlantic positioning</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Stable Jurisdiction</h3>
                    <p className="mt-2 text-sm text-gray-700">UK legal system</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Reliable Power</h3>
                    <p className="mt-2 text-sm text-gray-700">Stable power grid</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Strong Connectivity</h3>
                    <p className="mt-2 text-sm text-gray-700">Atlantic fiber routes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Position Section */}
      <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-24">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/bermuda-atlantic-night.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Strategic North Atlantic Location
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Bermuda's unique position in the North Atlantic Ocean, 700+ miles off the North American 
                coast, provides unparalleled advantages for satellite communications. Our isolation 
                ensures minimal RF interference while offering optimal coverage of transatlantic 
                communication routes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Optimal Satellite Coverage</h3>
                    <p className="text-white/90">Clear line-of-sight to GEO satellites covering Americas, Europe, and Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Minimal Interference</h3>
                    <p className="text-white/90">Surrounded by ocean with no nearby terrestrial transmitters</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Strategic Coordinates</h3>
                    <p className="text-white/90">
                      <a 
                        href="https://maps.app.goo.gl/bzyVSuGL36Qnkwh27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 hover:underline transition-colors font-medium"
                      >
                        32°N 64°W
                      </a>
                      {" "}- Perfect for Atlantic basin coverage and ISS tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:text-center">
              <div className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm mb-6">
                <Antenna className="mr-3 h-5 w-5 text-primary" />
                <span className="font-medium text-white">700+ miles from nearest mainland</span>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Coverage Statistics</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">360°</div>
                    <div className="text-sm text-white/80">Horizon View</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">180°</div>
                    <div className="text-sm text-white/80">Atlantic Arc</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-white/80">Clear Skies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">Minimal</div>
                    <div className="text-sm text-white/80">RF Interference</div>
                  </div>
                </div>
              </div>
            </div>
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