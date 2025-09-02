import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://atlanticground.com';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function generateSEO({
  title,
  description = 'Your 24/7 Atlantic teleport partner. Professional ground station and earth station hosting from Bermuda with 30+ years experience. Hurricane-rated facilities, 700+ miles offshore, minimal RF interference.',
  image = `${siteUrl}/og-image.jpg`,
  noIndex = false,
  canonical,
}: SEOProps = {}): Metadata {
  const fullTitle = title 
    ? `${title} | Atlantic Ground Station Hosting`
    : 'Atlantic Ground Station Hosting | North Atlantic Satellite Gateway | 24/7 Support';

  return {
    metadataBase: new URL(siteUrl),
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
      siteName: 'Atlantic Ground Station Hosting',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || 'Atlantic Ground Station Hosting',
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