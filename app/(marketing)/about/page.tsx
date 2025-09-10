import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Antenna,
  Satellite,
  Cable,
  Signal,
  Rocket,
  Building,
  Clock,
  MapPin
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
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl mb-6 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
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

          {/* Bermuda's Space & Satellite Legacy */}
          <div>
            <div className="text-center mb-16">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Bermuda's Space & Satellite Legacy
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Over six decades of space operations, satellite tracking, and telecommunications infrastructure development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Satellite className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">NASA Heritage</h3>
                  <p className="text-muted-foreground text-sm">
                    Historical NASA tracking station operations supporting Mercury, Gemini, and Apollo missions. 
                    Legacy infrastructure established in the 1960s for space program communications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">ITU Orbital Slots</h3>
                  <p className="text-muted-foreground text-sm">
                    Four satellite orbital slots allocated by the International Telecommunication Union in 1983. 
                    Strategic positioning for global satellite operations and communications coverage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">National Space Strategy</h3>
                  <p className="text-muted-foreground text-sm">
                    2020-2025 strategy positioning Bermuda as a space business hub. Streamlined ITU satellite filing 
                    process with $12,000 flat administrative fee and efficient regulatory framework.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">ISS Visibility & Space Observations</h3>
                    <p className="text-muted-foreground mb-6">
                      Bermuda's strategic location provides exceptional visibility for International Space Station passes, 
                      rocket launches, and spacecraft operations. Historical ISS photography includes notable captures 
                      during Expedition 17 (2008) and by astronaut Chris Hadfield (2013).
                    </p>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium text-sm">250-mile orbital altitude coverage</div>
                        <div className="text-xs text-muted-foreground">90-minute orbital periods with optimal viewing windows</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Space Activity Tracking</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">SpaceX launches visible</span>
                        <span className="font-medium">8 min post-launch</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">NASA experiments tracked</span>
                        <span className="font-medium">250+ mi altitude</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ISS pass frequency</span>
                        <span className="font-medium">Every 90 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Digital Infrastructure Hub */}
          <div>
            <div className="text-center mb-16">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Cable className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Digital Infrastructure Hub
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Strategic subsea cable landing point connecting three continents with enterprise-grade infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="mr-2 h-5 w-5" />
                    Google's Atlantic Investment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Nuvem Cable (2026)</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• South Carolina → Bermuda → Portugal</li>
                        <li>• First transatlantic fiber optic route via Bermuda</li>
                        <li>• Up to 20 new jobs created</li>
                        <li>• Enhanced network reliability and reduced latency</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Sol Cable</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Florida → Bermuda → Azores → Spain</li>
                        <li>• Only direct fiber connection Florida-Europe</li>
                        <li>• Cloud traffic and AI model transmission</li>
                        <li>• Unprecedented transatlantic redundancy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">$48M</div>
                        <div className="text-sm text-muted-foreground">Google Investment</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">4</div>
                        <div className="text-sm text-muted-foreground">Cable Capacity</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">St. David's Landing Station</h3>
                  <p className="text-muted-foreground text-sm">
                    Purpose-built cable landing station at Southside capable of accommodating up to four subsea 
                    fiber optic cables with redundant power and climate control systems.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Signal className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Existing Cable Systems</h3>
                  <p className="text-muted-foreground text-sm">
                    Five operational subsea cables: GlobeNet, Challenger, Gemini, CBUS, and CB-1 providing 
                    established connectivity to Americas, Europe, and Caribbean regions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Global Network Architecture</h3>
                  <p className="text-muted-foreground text-sm">
                    Permanent fixture in global routing architecture supporting cloud traffic, expanded local 
                    provider capacity, and next-generation digital infrastructure requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Telecommunications Evolution */}
          <div>
            <div className="text-center mb-16">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Antenna className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Telecommunications Evolution
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From monopoly to competitive market leadership driving innovation in the "Silicon Valley of the Caribbean"
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Market Development Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <div className="font-medium">1983 - ITU Orbital Allocations</div>
                        <div className="text-sm text-muted-foreground">Four satellite slots allocated for telecommunications</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <div className="font-medium">2013 - Market Liberalization</div>
                        <div className="text-sm text-muted-foreground">End of Cable & Wireless monopoly, competitive market opens</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <div className="font-medium">2020 - Submarine Cable Legislation</div>
                        <div className="text-sm text-muted-foreground">Clear framework attracts international investment</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <div className="font-medium">2024+ - Digital Hub Vision</div>
                        <div className="text-sm text-muted-foreground">5G networks and global cable investments</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Current Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Mobile Networks</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>• 3 operators: Digicel, One Communications, Paradise Mobile</div>
                        <div>• 5G deployment with "world's fastest" network ambition</div>
                        <div>• Paradise Mobile targeting Silicon Valley comparison</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Internet & Data</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>• 4 Internet Service Providers with fiber networks</div>
                        <div>• Expanded cloud and cybersecurity services</div>
                        <div>• Enhanced infrastructure investments post-2020</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Regulatory Innovation</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>• Streamlined satellite filing process</div>
                        <div>• Clear timeline and fee structures</div>
                        <div>• Competitive international frameworks</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Strategic Advantages */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Strategic Advantages Summary
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive advantages that position Bermuda as the premier Atlantic telecommunications hub
              </p>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">Geographic Positioning</h3>
                    <p className="text-sm text-muted-foreground">
                      700+ miles from mainland, optimal coverage for North America and Europe with minimal RF interference
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">Regulatory Framework</h3>
                    <p className="text-sm text-muted-foreground">
                      English common law, streamlined ITU processes, and competitive international compliance standards
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Building className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">Infrastructure Investment</h3>
                    <p className="text-sm text-muted-foreground">
                      $48M Google commitment, hurricane-rated facilities, and enterprise-grade power systems
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">Time Zone Alignment</h3>
                    <p className="text-sm text-muted-foreground">
                      Atlantic Standard Time optimal for US East Coast coordination and European business hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Excellence */}
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

    </>
  );
}