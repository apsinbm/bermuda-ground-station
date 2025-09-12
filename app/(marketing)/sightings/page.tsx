import { Card, CardContent } from '@/components/ui/card';
import { 
  Rocket, 
  Camera,
  MapPin,
  Clock,
  Globe
} from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Space Operations from Bermuda - Mission Coverage & Launch Visibility',
  description: 'Track SpaceX launches and spacecraft operations from Bermuda. Our strategic North Atlantic position provides exceptional mission coverage and operational awareness.',
});

const mediaItems = [
  {
    type: 'youtube',
    videoId: 'BIDwYE-GUVw',
    title: 'SpaceX Falcon 9 Launch Visibility from Bermuda',
    date: 'September 11, 2025',
    description: 'Latest SpaceX Falcon 9 mission captured from Bermuda\'s strategic North Atlantic position. Excellent visibility of the launch trajectory and staging sequence as observed from our ground station facilities.'
  },
  {
    type: 'youtube',
    videoId: 'x9zIuyUkk6g',
    title: 'SpaceX Crew-10 Dragon "Endurance" - Jellyfish Effect Over Bermuda',
    date: 'March 14, 2025',
    description: 'Incredible dual perspective: SpaceX live broadcast on laptop alongside real rocket creating spectacular "jellyfish effect" in Bermuda\'s night sky. Crew-10 mission with NASA astronauts Anne McClain, Nichole Ayers, JAXA\'s Takuya Onishi, and Roscosmos\' Kirill Peskov heading to the ISS. Visible just 8 minutes after launch from Kennedy Space Center.'
  },
  {
    type: 'youtube',
    videoId: '-lK3fSBu6n0',
    title: 'SpaceX Crew-10 Launch - Additional Bermuda Perspective',
    date: 'March 14, 2025',
    description: 'Alternative view of the SpaceX Crew-10 Dragon launch captured from Bermuda. This footage provides a different perspective of the same historic mission, showing the rocket\'s trajectory and exhaust plume as observed from our North Atlantic vantage point.'
  },
  {
    type: 'youtube',
    videoId: 'pxYuRxF21mk',
    title: 'SpaceX Crew-10 Mission - Extended Bermuda Coverage',
    date: 'March 14, 2025',
    description: 'Extended coverage of the SpaceX Crew-10 Dragon mission from Bermuda\'s strategic position. Comprehensive documentation of the launch sequence and visual phenomena as the spacecraft headed to the International Space Station with its crew of four astronauts.'
  },
  {
    type: 'youtube-shorts',
    videoId: '_umRXaSBypU',
    title: 'SpaceX Falcon 9 Bandwagon-1 Launch Over Bermuda',
    date: 'April 7, 2024',
    description: 'Historic first Bandwagon rideshare mission filmed from our neighbor\'s home in Bermuda. Just minutes after liftoff from Kennedy Space Center LC-39A, the Falcon 9 became visible cutting a bright path across our night sky with glowing exhaust trail. This groundbreaking mission deployed 11 spacecraft including South Korea\'s first military reconnaissance satellite and multiple commercial payloads to mid-inclination orbit - perfect for regional coverage between 60°N and 60°S. A rare Atlantic perspective of SpaceX\'s newest rideshare program launch.'
  },
  {
    type: 'twitter',
    tweetId: '1394099587347066882',
    username: 'PSingleton33',
    title: 'NASA KiNet-X Black Brant XII - Barium Vapor Experiment',
    date: 'May 16, 2021',
    description: 'Historic NASA Black Brant XII sounding rocket experiment filmed from my house in Bermuda. The KiNETic-scale energy and momentum transport eXperiment (KiNet-X) released barium vapor creating distinctive green-violet plasma clouds 217-249 miles high over the Atlantic. This space plasma physics research studied energy transport between magnetically connected space regions, with clouds visible from Nova Scotia to Florida.'
  },
  {
    type: 'photo',
    src: '/images/sightings/rocket-trail-photo.jpg',
    title: 'SpaceX Rocket Jellyfish Effect Over Bermuda',
    date: '2022',
    description: 'Spectacular jellyfish phenomenon created by SpaceX rocket exhaust illuminated by sunlight, visible over Bermuda\'s night skyline'
  }
];

export default function SightingsPage() {
  return (
    <>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      <div className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-black tracking-tight sm:text-7xl mb-6 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
              Space Operations from Bermuda
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              Bermuda's strategic North Atlantic position provides exceptional operational coverage of 
              rocket launches, spacecraft passes, and satellite deployments. Our facilities 
              actively monitor the space missions we help support.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-16">
          
          {/* Media Gallery */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Recent Sightings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaItems.map((item, index) => (
                <Card key={index} className="overflow-hidden h-full flex flex-col">
                  {item.type === 'youtube' || item.type === 'youtube-shorts' ? (
                    <div className="aspect-video bg-muted">
                      <iframe
                        src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1&showinfo=0`}
                        title={item.title}
                        className="w-full h-full rounded-lg border-0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </div>
                  ) : item.type === 'twitter' ? (
                    <div className="aspect-video bg-muted rounded-lg p-4">
                      <blockquote 
                        className="twitter-tweet" 
                        data-theme="light"
                        data-width="100%"
                        data-height="400"
                      >
                        <a href={`https://twitter.com/${item.username}/status/${item.tweetId}`}></a>
                      </blockquote>
                    </div>
                  ) : (
                    <div className="aspect-video bg-muted rounded-lg p-4">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* NASA KiNet-X Experiment Details */}
          <div>
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold tracking-tight mb-6">
                  Historic NASA KiNet-X Barium Vapor Experiment
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-muted-foreground mb-6">
                      On May 16, 2021, NASA's Black Brant XII sounding rocket carried the KiNETic-scale 
                      energy and momentum transport eXperiment (KiNet-X) from Wallops Flight Facility. 
                      This groundbreaking space plasma physics research studied how energy and momentum 
                      transport between magnetically connected space regions.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Rocket className="mr-3 mt-1 h-4 w-4 text-primary flex-shrink-0" />
                        <div>
                          <div className="font-medium">Mission Details</div>
                          <div className="text-sm text-muted-foreground">Four-stage Black Brant XII launched 8:44 PM EDT</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Camera className="mr-3 mt-1 h-4 w-4 text-primary flex-shrink-0" />
                        <div>
                          <div className="font-medium">Barium Vapor Clouds</div>
                          <div className="text-sm text-muted-foreground">Green-violet plasma clouds at 217-249 miles altitude</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Globe className="mr-3 mt-1 h-4 w-4 text-primary flex-shrink-0" />
                        <div>
                          <div className="font-medium">Visibility Range</div>
                          <div className="text-sm text-muted-foreground">Halifax to Cape Canaveral, inland to Ohio</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Scientific Collaboration</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Led by University of Alaska Fairbanks' Peter Delamere, with ground observations 
                      conducted from Bermuda by Don Hampton. The experiment included researchers from:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div>• UAF Geophysical Institute</div>
                      <div>• Dartmouth University</div>
                      <div>• University of New Hampshire</div>
                      <div>• Clemson University</div>
                      <div>• University of Maryland</div>
                      <div>• NASA Goddard Space Flight Center</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bermuda Rocket Tracker */}
          <div className="text-center">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Track Future Launches from Bermuda
                </h3>
                <p className="text-muted-foreground mb-6">
                  Want to catch future rocket launches visible from Bermuda? Our strategic North Atlantic 
                  position offers unique viewing opportunities for launches from Cape Canaveral and Wallops. 
                  Many SpaceX and NASA missions become visible over Bermuda within minutes of launch.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="https://bermuda-rocket-tracker.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Rocket className="h-5 w-5 mr-2" />
                    Launch Bermuda Rocket Tracker App
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Connection to Services */}
          <div className="text-center">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Supporting These Missions
                </h3>
                <p className="text-muted-foreground mb-6">
                  These spectacular sightings represent the space missions that depend on ground 
                  infrastructure like ours. From tracking stations to communication relays, 
                  Bermuda's satellite facilities play a vital role in keeping spacecraft 
                  connected to Earth.
                </p>
                <div className="flex justify-center">
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm">
                    <Rocket className="h-4 w-4 mr-2 text-primary" />
                    Supporting Space Operations Since 1990s
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}