import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Antenna, 
  Building2, 
  Radio,
  Shield, 
  Zap, 
  Wifi,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import { localBusinessSchema } from '@/lib/schema';

export const metadata = generateSEO({
  title: 'Ground Station & Teleport Facilities in Bermuda',
  description: 'Dedicated ground station facilities and rooftop hosting sites in Bermuda. Professional teleport services with carrier-grade infrastructure and 24/7 support.',
});


export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessSchema,
          ]),
        }}
      />
      
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/rocket-launch-trail.jpg)',
          minHeight: '600px'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Where Space Missions Connect to Earth
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
              Our hosting locations provide the critical ground infrastructure for satellite 
              and space missions. From dedicated teleports for large installations to flexible 
              rooftop sites across Bermuda.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                <Antenna className="h-4 w-4 mr-2" />
                Professional Ground Station Facilities
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          
          {/* Dedicated Ground Station Facilities */}
          <div id="ground-station-facilities">
            <Card className="overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Antenna className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">
                    Dedicated Ground Station Facilities
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Purpose-built teleport facilities designed for multiple antennas with optimal 
                    spacing, security, and minimal RF interference. Professional earth station operations.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Multi-antenna teleport capabilities</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Secure, controlled access sites</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Low RF interference environment</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Strong power and connectivity infrastructure</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src="/images/bermuda-satellite-farm-2.jpg" 
                    alt="Professional ground station facility in Bermuda featuring multiple earth station antennas with optimal spacing for teleport operations"
                    className="w-full h-full object-cover rounded-lg"
                    style={{ minHeight: '400px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">
                      Professional ground station facility with multiple earth station antennas and teleport capabilities
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Rooftop Hosting */}
          <div id="rooftop-hosting">
            <Card className="overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">
                    Rooftop Hosting
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Strategic urban rooftop locations offering quick deployment options with 
                    smaller footprint requirements and direct fiber access.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Flexible urban deployment options</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Smaller physical footprint</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Quick installation and deployment</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Direct building fiber and power access</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src="/images/bermuda-rooftop-installation.jpg" 
                    alt="Professional rooftop satellite installation in Bermuda showing multiple large satellite dishes on a concrete building rooftop with equipment housing and telecommunications infrastructure"
                    className="w-full h-full object-cover rounded-lg"
                    style={{ minHeight: '400px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">
                      Professional rooftop installation featuring multiple satellite dishes with integrated equipment housing
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Optional Datacenter Note */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Radio className="h-5 w-5" />
                </div>
                <CardTitle>Datacenter Hosting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For specialized requirements, we also provide secure datacenter hosting 
                  options with controlled environments and enhanced security.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </>
  );
}