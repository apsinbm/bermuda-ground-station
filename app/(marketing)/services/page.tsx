import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Antenna, 
  Building2, 
  Radio,
  Shield, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Award,
  Users,
  Clock,
  Satellite,
  Monitor,
  Settings,
  Database,
  Globe,
  Lock
} from 'lucide-react';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Teleport & Earth Station Services - Ground Station Hosting Bermuda',
  description: 'Professional teleport and earth station services in Bermuda. Antenna hosting, NOC support, and licensing assistance with carrier-grade infrastructure.',
});


export default function ServicesPage() {
  return (
    <>
      
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/satellite-bermuda-orbit.jpg)',
          minHeight: '600px'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Connecting Bermuda to Space
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
              We provide carrier-grade IT services and dedicated support for satellite operators, 
              broadcasters, and enterprises establishing services in Bermuda. With certified engineers 
              on call 24/7, we deliver the responsiveness and reliability global operators expect 
              from a strategic hosting location.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                <Antenna className="h-4 w-4 mr-2" />
                Professional Teleport & Earth Station Services
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          
          {/* Antenna Hosting */}
          <div id="antenna-hosting">
            <Card className="overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Antenna className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">
                    Earth Station & Antenna Hosting
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Professional hosting for both receive and transmit satellite antennas 
                    across our Bermuda facilities.
                  </p>
                  <p className="text-sm text-muted-foreground mb-8 p-3 bg-muted/50 rounded-lg">
                    Transmit operations may require approvals; we can assist with applications and 
                    spectrum planning via the{" "}
                    <a 
                      href="https://www.ra.bm/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline"
                    >
                      Regulatory Authority of Bermuda
                    </a>.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Dedicated teleports for larger installations</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Rooftop hosting for urban deployment</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Professional installation and maintenance</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-8 lg:p-12">
                  <h3 className="text-lg font-semibold mb-6">Infrastructure</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Building2 className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Multiple Locations</div>
                        <div className="text-sm text-muted-foreground">Teleports and rooftop sites across Bermuda</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Shield className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Secure Sites</div>
                        <div className="text-sm text-muted-foreground">Controlled access and monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Our Capabilities */}
          <div id="capabilities">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Capabilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive IT services and satellite hosting support with 24/7 expert availability
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Monitor className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">24/7 Network Operations Center (NOC)</h3>
                  <p className="text-sm text-muted-foreground">
                    Proactive monitoring and fault management to ensure continuous uptime.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Remote Hands & On-Site Engineering</h3>
                  <p className="text-sm text-muted-foreground">
                    Immediate local response for equipment checks, cabling, resets, installations, and diagnostics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Satellite className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Earth Station & VSAT Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Installation, configuration, and maintenance for VSATs, earth stations, and RF systems, backed by spectrum coordination expertise.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Data Center & Colocation Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Secure hosting in facilities designed to Tier-3 standards, with redundant power, cooling, and access controls.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Connectivity & Backhaul</h3>
                  <p className="text-sm text-muted-foreground">
                    Direct, low-latency fiber connections to North America and Europe, with multiple peering and transit options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Compliance & Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Support for spectrum licensing and regulatory requirements, combined with ISO-aligned cybersecurity, surveillance, and controlled access protocols.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Power & Connectivity */}
          <div>
            <Card className="overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Radio className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">
                    Power & Connectivity
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Reliable infrastructure through partnerships with established 
                    local telecom providers.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Stable power grid connections</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Fiber connectivity through telecom partners</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Atlantic cable route access</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-8 lg:p-12">
                  <h3 className="text-lg font-semibold mb-6">Technical Excellence</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Shield className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium">30+ Years Experience</div>
                        <div className="text-sm text-muted-foreground">IT, telecommunications and broadcasting expertise</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Award className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium">Award-Winning Track Record</div>
                        <div className="text-sm text-muted-foreground">Multiple awards for mobile service, datalinks, and submarine networks</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium">World-Class Events</div>
                        <div className="text-sm text-muted-foreground">Americas Cup, SailGP, Olympics, FIFA, PGA Tour, World Cricket, ITF, UEFA</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Radio className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium">Major Broadcasters</div>
                        <div className="text-sm text-muted-foreground">NBC, CBS, ABC, CNN, Fox, Sky, HBS, OBS, Caribbean Broadcasting Union</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Satellite className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium">Satellite Operators</div>
                        <div className="text-sm text-muted-foreground">Intelsat, SES, Eutelsat, Tata Communications, Peak Uplink, SNG</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="mr-3 mt-1 h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium">24/7 Support</div>
                        <div className="text-sm text-muted-foreground">Qualified engineers and technicians available around the clock</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Licensing Support */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Shield className="h-5 w-5" />
                </div>
                <CardTitle>Licensing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We can provide guidance on licensing requirements when needed. 
                  All official licensing is handled through the Regulatory Authority of Bermuda.
                </p>
                <a
                  href="https://www.ra.bm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Visit RA.bm
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Contact us to discuss your hosting requirements.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="group">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}