import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bermuda-ground-station.com';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function generateSEO({
  title,
  description = 'Strategic ground station hosting in Bermuda\'s North Atlantic location. Host satellite antennas on rooftops, dedicated farms, and secure datacenters with regulatory support and transatlantic connectivity.',
  image = `${siteUrl}/og-image.jpg`,
  noIndex = false,
  canonical,
}: SEOProps = {}): Metadata {
  const fullTitle = title 
    ? `${title} | Bermuda Ground Station Hosting`
    : 'Bermuda Ground Station Hosting - North Atlantic Satellite Antenna Solutions';

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonical || siteUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_BM',
      url: canonical || siteUrl,
      title: fullTitle,
      description,
      siteName: 'Bermuda Ground Station Hosting',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || 'Bermuda Ground Station Hosting',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}