import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Antenna,
  Clock,
  Award,
  Users,
  Building2
} from 'lucide-react';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'About Atlantic Ground Station - Satellite Teleport Services',
  description: 'Leading satellite ground station and teleport services provider with 30+ years experience. Professional earth station hosting, 24/7 NOC, and carrier-grade infrastructure.',
});

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl mb-6 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
              About Atlantic Ground Station
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              We are a leading satellite ground station and teleport services provider, delivering 
              mission-critical infrastructure and support for satellite operators worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">

          {/* Our Mission */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              To provide world-class satellite ground station services that enable seamless global 
              communications, backed by decades of expertise and cutting-edge infrastructure.
            </p>
          </div>

          {/* Experience & Expertise */}
          <div>
            <Card className="overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">30+ Years of Excellence</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Three decades of hands-on experience in IT infrastructure, telecommunications systems, 
                    and satellite communications operations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Enterprise-grade infrastructure deployment and management</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Regulatory compliance and international licensing expertise</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">24/7 monitoring and professional support systems</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-3 mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Mission-critical operations for global events</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 p-8 lg:p-12">
                  <h3 className="text-lg font-semibold mb-6">Our Capabilities</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Antenna className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Ground Station Operations</div>
                        <div className="text-sm text-muted-foreground">Professional earth station hosting and management</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Shield className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Mission-Critical Systems</div>
                        <div className="text-sm text-muted-foreground">High-availability infrastructure design and operation</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Globe className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Global Operations</div>
                        <div className="text-sm text-muted-foreground">International satellite and telecom expertise</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">24/7 Support</div>
                        <div className="text-sm text-muted-foreground">Round-the-clock monitoring and technical support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Our Track Record */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Proven Track Record</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Trusted by major broadcasters, satellite operators, and global enterprises for critical communications infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Global Events</h3>
                  <p className="text-muted-foreground text-sm">
                    World-class event support for Olympics, FIFA World Cup, Americas Cup, and other major international events requiring reliable satellite communications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Broadcaster Partnerships</h3>
                  <p className="text-muted-foreground text-sm">
                    Trusted partnerships with major broadcasters including NBC, CBS, ABC, CNN, and Fox for critical satellite uplink and downlink operations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Satellite Operators</h3>
                  <p className="text-muted-foreground text-sm">
                    Long-standing relationships with major satellite operators including Intelsat, SES, and Eutelsat for reliable ground station services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Atlantic Ground Station</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our commitment to excellence, proven expertise, and strategic advantages make us the ideal partner for your satellite operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Technical Excellence</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 text-primary flex-shrink-0" />
                    <span>Carrier-grade infrastructure and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 text-primary flex-shrink-0" />
                    <span>Advanced monitoring and control systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 text-primary flex-shrink-0" />
                    <span>Redundant power and connectivity systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 text-primary flex-shrink-0" />
                    <span>Professional earth station facilities</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Service Commitment</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 text-primary flex-shrink-0" />
                    <span>24/7 Network Operations Center (NOC)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 text-primary flex-shrink-0" />
                    <span>Rapid response remote hands support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 text-primary flex-shrink-0" />
                    <span>Proactive maintenance and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 text-primary flex-shrink-0" />
                    <span>Flexible service level agreements</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/contact">
                <Button size="lg" className="inline-flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}