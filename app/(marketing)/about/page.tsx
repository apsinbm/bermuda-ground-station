import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Antenna
} from 'lucide-react';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'About - Teleport & Earth Station Services in Bermuda',
  description: '30+ years teleport and telecommunications experience. Professional ground station and earth station hosting services in Bermuda with carrier-grade infrastructure.',
});


export default function AboutPage() {
  return (
    <>
      
      <div className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
              About
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              We bring over 30 years of experience in teleport operations and telecommunications to 
              provide professional ground station and earth station hosting services across Bermuda.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          
          {/* Why Bermuda - Strategic Position */}
          <div className="relative">
            <div 
              className="relative rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/images/bermuda-atlantic-night.jpg)',
                minHeight: '500px'
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
              
              {/* Content overlay */}
              <div className="relative z-10 p-8 lg:p-12 text-white">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold tracking-tight mb-6">
                    Strategic Atlantic Position
                  </h2>
                  <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                    Bermuda sits in the perfect position - isolated yet connected. 
                    A stable, first-world jurisdiction with a UK-based legal system, 
                    reliable power grid, and robust Atlantic connectivity.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div className="font-semibold">North Atlantic Hub</div>
                      <div className="text-sm text-white/80">Optimal positioning</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div className="font-semibold">UK Legal System</div>
                      <div className="text-sm text-white/80">Stable framework</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div className="font-semibold">Reliable Power</div>
                      <div className="text-sm text-white/80">Stable grid</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div className="font-semibold">Atlantic Routes</div>
                      <div className="text-sm text-white/80">Direct connectivity</div>
                    </div>
                  </div>
                  
                  {/* Caption for the satellite image */}
                  <p className="text-sm text-white/70 mt-8 italic">
                    Satellite view showing Bermuda's strategic position in the North Atlantic, 
                    connected to major North American population centers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Bermuda - Detailed Advantages */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Why Bermuda?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Four key strategic advantages that make Bermuda the ideal location for satellite ground operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">Strategic Location</h3>
                  <p className="text-muted-foreground">
                    Mid-Atlantic position with direct fiber routes to multiple continents, 
                    providing optimal coverage for North American and European operations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">Resilient Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Stable power grid, strong telecoms backbone, and multiple subsea cables 
                    ensure reliable operations and redundant connectivity options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">Secure & Compliant</h3>
                  <p className="text-muted-foreground">
                    Trusted UK-based legal and regulatory framework providing stability, 
                    compliance assurance, and transparent governance for global operators.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Antenna className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">Disaster Recovery Advantage</h3>
                  <p className="text-muted-foreground">
                    Geographically distinct from major hubs, ideal for redundancy and 
                    business continuity planning with minimal correlation to mainland risks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience */}
          <div>
            <Card className="overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Antenna className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">
                    Experience & Expertise
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Three decades of hands-on experience in IT infrastructure, 
                    telecommunications systems, and satellite communications.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Enterprise-grade infrastructure deployment</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Regulatory compliance and licensing</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">24/7 monitoring and support systems</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-8 lg:p-12">
                  <h3 className="text-lg font-semibold mb-6">Core Capabilities</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Shield className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Mission-Critical Systems</div>
                        <div className="text-sm text-muted-foreground">High-availability infrastructure design</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Globe className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">International Operations</div>
                        <div className="text-sm text-muted-foreground">Cross-border regulatory expertise</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Buzzwords Section */}
          <div className="text-center">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Technical Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-muted-foreground font-medium">Carrier-Grade</div>
                  <div className="text-muted-foreground font-medium">Enterprise Infrastructure</div>
                  <div className="text-muted-foreground font-medium">Mission-Critical</div>
                  <div className="text-muted-foreground font-medium">High-Availability</div>
                  <div className="text-muted-foreground font-medium">Fault-Tolerant</div>
                  <div className="text-muted-foreground font-medium">Redundant Systems</div>
                  <div className="text-muted-foreground font-medium">Professional-Grade</div>
                  <div className="text-muted-foreground font-medium">Industry Standards</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to Work Together?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Contact us to discuss your ground station requirements.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="group">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}