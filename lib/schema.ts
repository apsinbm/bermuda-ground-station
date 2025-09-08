const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://atlanticground.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Atlantic Ground Station',
  alternateName: ['AGS', 'Atlantic Teleport Services'],
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: 'Professional teleport and earth station hosting from Bermuda\'s strategic North Atlantic location for satellite communications',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BM',
    addressRegion: 'Bermuda',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Technical Support',
    areaServed: ['North Atlantic', 'Caribbean', 'Americas', 'Europe'],
    availableLanguage: ['English'],
    contactOption: ['24/7 Support'],
  },
  sameAs: [
    'https://linkedin.com/company/atlantic-ground-station',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}#organization`,
  name: 'Atlantic Ground Station',
  image: `${siteUrl}/og-image.jpg`,
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BM',
    addressRegion: 'Bermuda',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.3078,
    longitude: -64.7505,
    name: 'Bermuda - Strategic North Atlantic Position',
    description: '700+ miles from US mainland, minimal RF interference',
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
  name: 'Atlantic Ground Station',
  description: 'Atlantic ground station hosting services from Bermuda',
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
  description: 'Professional satellite antenna hosting services from Bermuda across the Atlantic',
  provider: {
    '@id': `${siteUrl}#organization`,
  },
  areaServed: {
    '@type': 'Place',
    name: 'Bermuda',
  },
  serviceType: 'Satellite Ground Station Hosting',
  category: 'Telecommunications Infrastructure',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ground Station Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Antenna Hosting',
          description: 'Professional hosting of receive and transmit antennas',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 NOC Support',
          description: 'Round-the-clock monitoring and remote hands',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Licensing Support',
          description: 'Regulatory compliance and transmit licensing assistance',
        },
      },
    ],
  },
};


