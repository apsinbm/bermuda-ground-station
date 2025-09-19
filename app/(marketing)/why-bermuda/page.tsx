import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  MapPin, 
  Clock,
  ArrowRight,
  Satellite,
  Radio,
  Shield,
  Zap,
  Building2,
  Plane
} from 'lucide-react';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Why Bermuda - Strategic North Atlantic Satellite Location',
  description: 'Discover why Bermuda offers unmatched advantages for satellite ground stations. Strategic North Atlantic positioning for global communications.',
});

export default function WhyBermudaPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl mb-6 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
              Why Bermuda
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              Bermuda's strategic North Atlantic location offers unmatched advantages for satellite operations, 
              global communications, and mission-critical ground station services.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">

          {/* Strategic Position */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Strategic North Atlantic Position</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Located at 32°N, 64°W, Bermuda provides optimal satellite coverage and connectivity advantages unavailable anywhere else in the North Atlantic
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Satellite className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Prime Satellite Coverage</h3>
                  <p className="text-muted-foreground text-sm">
                    Optimal viewing angles for geostationary satellites covering Americas, Europe, and Africa. Multiple orbital slot access from a single location.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Transatlantic Gateway</h3>
                  <p className="text-muted-foreground text-sm">
                    Midway between North America and Europe, providing the shortest path for transatlantic satellite communications and data relay.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Time Zone Advantage</h3>
                  <p className="text-muted-foreground text-sm">
                    Atlantic Time Zone (UTC-4) provides overlap with both North American and European business hours for global operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Infrastructure Advantages */}
          <div>
            <Card className="overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">World-Class Infrastructure</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Bermuda combines the reliability of developed world infrastructure with strategic positioning 
                    and favorable regulatory environment for satellite operations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Zap className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Stable power grid with 99.9%+ uptime reliability</span>
                    </div>
                    <div className="flex items-start">
                      <Radio className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Multiple fiber optic cable landings for redundant connectivity</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Politically stable British Overseas Territory with strong rule of law</span>
                    </div>
                    <div className="flex items-start">
                      <Plane className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Direct flights to major North American and European cities</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 p-8 lg:p-12">
                  <h3 className="text-lg font-semibold mb-6">Technical Advantages</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="font-medium mb-2">Low Latency Connections</div>
                      <div className="text-sm text-muted-foreground">
                        Direct fiber routes to New York (sub-20ms) and London (sub-80ms)
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-2">Minimal RF Interference</div>
                      <div className="text-sm text-muted-foreground">
                        Clean RF environment with limited terrestrial microwave activity
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-2">Weather Resilience</div>
                      <div className="text-sm text-muted-foreground">
                        Hurricane-rated facilities with proven operational continuity
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-2">Regulatory Framework</div>
                      <div className="text-sm text-muted-foreground">
                        Streamlined licensing process for satellite earth stations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Coverage Map */}
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Satellite Coverage Zones</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From Bermuda, our ground stations provide optimal coverage of multiple geostationary orbital slots, 
                enabling comprehensive satellite services across three continents
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3">Americas Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Complete North and South American coverage via satellites at 61W to 137W orbital positions
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3">Atlantic Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Full Atlantic Ocean coverage for maritime, aviation, and offshore operations
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3">Europe & Africa</h3>
                <p className="text-sm text-muted-foreground">
                  European and West African coverage via satellites at eastern orbital positions
                </p>
              </div>
            </div>
          </div>

          {/* Get Started */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Leverage Bermuda's Advantages?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover how our strategic North Atlantic location can enhance your satellite operations 
              and provide unmatched connectivity for your global communications needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="inline-flex items-center">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}