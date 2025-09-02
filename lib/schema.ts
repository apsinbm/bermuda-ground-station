const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bermuda-ground-station.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bermuda Ground Station Hosting',
  alternateName: 'BGS Hosting',
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: 'Strategic ground station hosting in Bermuda\'s North Atlantic location for satellite communications',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BM',
    addressRegion: 'Bermuda',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-441-555-0123',
    contactType: 'sales',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://linkedin.com/company/bermuda-ground-station',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}#organization`,
  name: 'Bermuda Ground Station Hosting',
  image: `${siteUrl}/og-image.jpg`,
  url: siteUrl,
  telephone: '+1-441-555-0123',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BM',
    addressRegion: 'Bermuda',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.3078,
    longitude: -64.7505,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    opens: '09:00',
    closes: '17:00',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}#website`,
  url: siteUrl,
  name: 'Bermuda Ground Station Hosting',
  description: 'Ground station hosting services in Bermuda',
  publisher: {
    '@id': `${siteUrl}#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ground Station Hosting',
  description: 'Professional satellite antenna hosting services across Bermuda',
  provider: {
    '@id': `${siteUrl}#organization`,
  },
  areaServed: {
    '@type': 'Place',
    name: 'Bermuda',
  },
  serviceType: 'Telecommunications Infrastructure',
  category: 'Satellite Communications',
};


