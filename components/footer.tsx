import Link from 'next/link';
import Image from 'next/image';
import { Satellite, Mail, Phone, MapPin } from 'lucide-react';

const footerNavigation = {
  main: [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Ground Locations', href: '/locations' },
    { name: 'Space Operations', href: '/sightings' },
    { name: 'Why Bermuda', href: '/why-bermuda' },
    { name: 'Legacy', href: '/heritage' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center space-x-3">
              <Satellite className="h-10 w-10 text-primary" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  Atlantic Ground Station
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  Teleport Services
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Strategic teleport and earth station hosting from Bermuda&apos;s North Atlantic location. 
              Professional ground station services with regulatory support and 
              carrier-grade transatlantic connectivity.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Hamilton, Bermuda</span>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Navigation
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Atlantic Ground Station. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Proudly serving from Bermuda&apos;s strategic North Atlantic location
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}