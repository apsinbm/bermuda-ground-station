import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TwitterEmbed } from '@/components/twitter-embed';
import { 
  Satellite, 
  Radio, 
  Globe,
  ArrowRight,
  Rocket,
  Building2,
  Wifi,
  Clock,
  Award
} from 'lucide-react';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Heritage & Infrastructure - Bermuda\'s Space and Telecom History',
  description: 'Explore Bermuda\'s rich heritage in space communications, submarine cables, and telecommunications infrastructure spanning over 150 years of innovation.',
});

export default function HeritagePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl mb-6 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
              Heritage & Infrastructure
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              Discover Bermuda's remarkable heritage in space communications, submarine cable systems, 
              and telecommunications infrastructure spanning over 150 years of innovation.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">

          {/* Space Heritage */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Space Communications Heritage</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From NASA's early space missions to modern ISS operations, Bermuda has played a crucial role in space communications
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">NASA Tracking Station Legacy</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Bermuda hosted NASA's tracking station from 1961-1997, supporting Mercury, Gemini, and Apollo missions. 
                    The station provided critical communications during humanity's first steps on the moon.
                  </p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div>• Mercury missions: First American orbital flights</div>
                    <div>• Gemini program: Spacewalk and rendezvous operations</div>
                    <div>• Apollo missions: Lunar landing communications</div>
                    <div>• Space Shuttle era: Over 100 mission supports</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Satellite className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Modern Space Operations</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Today, Bermuda continues its space heritage with International Space Station visibility, 
                    Florida rocket launch tracking, and satellite ground station operations.
                  </p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div>• ISS passes visible 2-3 times per week</div>
                    <div>• SpaceX Falcon 9 launch trajectories</div>
                    <div>• Satellite deployment tracking</div>
                    <div>• Commercial space mission support</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ISS Visibility Tweets */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">ISS Visibility & Space Observations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TwitterEmbed 
                  tweetUrl="https://x.com/ISS_Research/status/1742978842826846322"
                  className="flex-1"
                />
                <TwitterEmbed 
                  tweetUrl="https://x.com/ISS_Research/status/1743011856817643908"
                  className="flex-1"
                />
                <TwitterEmbed 
                  tweetUrl="https://x.com/ISS_Research/status/1742615890506588362"
                  className="flex-1"
                />
                <TwitterEmbed 
                  tweetUrl="https://x.com/ISS_Research/status/1742604475316805906"
                  className="flex-1"
                />
                <TwitterEmbed 
                  tweetUrl="https://x.com/Cmdr_Hadfield/status/327047647489843201"
                  className="flex-1"
                />
              </div>
            </div>
          </div>

          {/* Telecommunications Evolution */}
          <div>
            <Card className="overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Radio className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Telecommunications Evolution</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    From the first transatlantic telegraph cable in 1866 to modern fiber optic networks, 
                    Bermuda has been at the forefront of global communications for over 150 years.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <div className="font-semibold text-sm text-primary mb-1">1866 - Telegraph Era</div>
                      <div className="text-sm text-muted-foreground">
                        First successful transatlantic telegraph cable landed in Bermuda, connecting Europe and North America
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-primary mb-1">1920s - Wireless Revolution</div>
                      <div className="text-sm text-muted-foreground">
                        Imperial Wireless Chain established Bermuda as a key relay point for British Empire communications
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-primary mb-1">1956 - TAT-1 Cable</div>
                      <div className="text-sm text-muted-foreground">
                        First transatlantic telephone cable (TAT-1) with Bermuda as a crucial repeater station
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-primary mb-1">1990s - Fiber Optics</div>
                      <div className="text-sm text-muted-foreground">
                        Multiple submarine fiber optic cables established Bermuda as a major telecommunications hub
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 p-8 lg:p-12">
                  <h3 className="text-lg font-semibold mb-6">Current Cable Infrastructure</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/20 pl-4">
                      <div className="font-medium text-sm">Challenger Bermuda-1</div>
                      <div className="text-xs text-muted-foreground">New York to London via Bermuda - 2022</div>
                    </div>
                    <div className="border-l-2 border-primary/20 pl-4">
                      <div className="font-medium text-sm">CBUS</div>
                      <div className="text-xs text-muted-foreground">Caribbean-Bermuda-US connectivity</div>
                    </div>
                    <div className="border-l-2 border-primary/20 pl-4">
                      <div className="font-medium text-sm">Gemini Bermuda</div>
                      <div className="text-xs text-muted-foreground">Transatlantic submarine cable system</div>
                    </div>
                    <div className="border-l-2 border-primary/20 pl-4">
                      <div className="font-medium text-sm">360 Atlantic</div>
                      <div className="text-xs text-muted-foreground">Ring topology connecting multiple countries</div>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-background rounded-lg">
                    <div className="text-xs font-medium mb-2">Total Capacity</div>
                    <div className="text-2xl font-bold text-primary">400+ Tbps</div>
                    <div className="text-xs text-muted-foreground">Combined submarine cable capacity</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Digital Infrastructure */}
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Modern Digital Infrastructure</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Today's Bermuda combines its historical telecommunications legacy with cutting-edge digital infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3">Internet Exchange</h3>
                <p className="text-sm text-muted-foreground">
                  Neutral internet exchange point facilitating efficient data routing between continents
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3">Data Centers</h3>
                <p className="text-sm text-muted-foreground">
                  Carrier-neutral facilities hosting critical infrastructure for global service providers
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Wifi className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3">Satellite Teleports</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple satellite earth stations providing global connectivity and broadcasting services
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3">24/7 Operations</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock monitoring and maintenance of critical communications infrastructure
                </p>
              </div>
            </div>
          </div>

          {/* Legacy of Innovation */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Legacy of Innovation</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Bermuda's unique position in communications history makes it the ideal location for next-generation satellite and space operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">150+ Years</h3>
                  <p className="text-sm text-muted-foreground">
                    Of continuous telecommunications innovation, from telegraph to fiber optics to satellite communications
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">First in Class</h3>
                  <p className="text-sm text-muted-foreground">
                    Home to many firsts: transatlantic cable landing, NASA tracking station, and modern submarine cable hub
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Future Ready</h3>
                  <p className="text-sm text-muted-foreground">
                    Positioned for the next era of space commercialization and global satellite constellation operations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Build on Our Legacy</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Join the next chapter of Bermuda's communications story with your satellite operations and space missions
            </p>
            <Link href="/services">
              <Button size="lg" className="inline-flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}