import { Card, CardContent } from '@/components/ui/card';
import { 
  Rocket, 
  Camera,
  MapPin,
  Clock
} from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Space Activity Sightings from Bermuda - Rocket Launches & Spacecraft',
  description: 'Witness SpaceX launches and spacecraft passes from Bermuda. Our strategic North Atlantic position offers unique views of space missions.',
});

const mediaItems = [
  {
    type: 'youtube',
    videoId: 'x9zIuyUkk6g',
    title: 'SpaceX Launch from Bermuda',
    date: 'Recent',
    description: 'SpaceX rocket launch captured from Bermuda showing the spectacular ascent and trajectory'
  },
  {
    type: 'youtube-shorts',
    videoId: '_umRXaSBypU',
    title: 'Rocket Pass Over Bermuda',
    date: 'Recent',
    description: 'Quick view of rocket passing over Bermuda skies'
  },
  {
    type: 'twitter',
    tweetId: '1394099587347066882',
    username: 'PSingleton33',
    title: 'NASA KiNet-X Barium Vapor Clouds',
    date: 'May 16, 2021',
    description: 'Historic NASA Black Brant XII rocket experiment filmed from Bermuda. The mission released barium vapor creating green-violet plasma clouds visible across the Atlantic, demonstrating energy transport in space plasma physics.'
  },
  {
    type: 'photo',
    src: '/images/sightings/rocket-trail-photo.jpg',
    title: 'Rocket Trail at Dawn',
    date: 'February 2024',
    description: 'Early morning launch creating spectacular contrail visible from Hamilton'
  },
  {
    type: 'photo',
    src: '/images/sightings/multiple-satellites.jpg',
    title: 'Starlink Constellation',
    date: 'December 2023',
    description: 'Multiple Starlink satellites visible in formation over the Atlantic'
  }
];

export default function SightingsPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Space Activity from Bermuda
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              Bermuda's strategic North Atlantic position provides exceptional views of 
              rocket launches, spacecraft passes, and satellite deployments. Our facilities 
              regularly witness the space missions we help support.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          
          {/* Why Bermuda Sees So Much */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              Prime Viewing Location
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">ISS Flight Path</h3>
                <p className="text-sm text-muted-foreground text-center">
                  International Space Station passes directly over Bermuda multiple times per month
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Launch Trajectories</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Cape Canaveral launches often pass near Bermuda en route to polar and ISS orbits
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Clear Atlantic Skies</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Minimal light pollution and clear horizons provide excellent visibility
                </p>
              </div>
            </div>
          </div>

          {/* Media Gallery */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Recent Sightings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaItems.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-muted">
                    {item.type === 'youtube' || item.type === 'youtube-shorts' ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1&showinfo=0`}
                        title={item.title}
                        className="w-full h-full rounded-lg border-0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    ) : item.type === 'twitter' ? (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-lg">
                        <div className="text-center p-8">
                          <div className="mb-4">
                            <svg className="w-8 h-8 mx-auto text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">View on Twitter</p>
                          <a 
                            href={`https://twitter.com/${item.username}/status/${item.tweetId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                          >
                            @{item.username}
                          </a>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg"
                      />
                    )}
                  </div>
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