# Bermuda Ground Station Hosting

A professional marketing website for satellite ground station hosting services in Bermuda's strategic North Atlantic location.

## 🌐 Live Site

- **Development**: http://localhost:3002
- **Production**: TBD

## 📋 Overview

This Next.js 14 website showcases comprehensive ground station hosting services in Bermuda, featuring:

- **Strategic Positioning**: Bermuda's unique North Atlantic location for satellite operations
- **Professional Services**: 24/7 NOC, remote hands, earth station support, data center services
- **Real Facilities**: Actual photos of satellite farms and rooftop installations
- **Space Activity**: Live sightings including SpaceX launches and NASA experiments
- **Enterprise Focus**: Carrier-grade services for satellite operators, broadcasters, and global enterprises

## 🚀 Key Features

### Pages
- **Home**: Strategic positioning and service overview
- **Services**: Comprehensive capabilities and technical excellence
- **Locations**: Satellite farms and rooftop hosting with real facility photos
- **Sightings**: Space activity videos and photos from Bermuda
- **About**: Strategic advantages and 30+ years experience
- **Contact**: Professional contact form with hCaptcha protection
- **Legal**: Privacy policy and terms of service

### Technical Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Security**: hCaptcha, CSP headers, security best practices

### Content Features
- **Real Media**: Actual satellite facility photos and space sighting videos
- **YouTube Integration**: Embedded SpaceX launch videos
- **Professional Imagery**: Dramatic space and satellite photography
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Structured data, meta tags, sitemap

## 🛠 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm start
```

### Key Scripts
- `npm run dev` - Development server (port 3002)
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - ESLint
- `npm run type-check` - TypeScript checking

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Marketing pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact form
│   │   ├── legal/          # Privacy & terms
│   │   ├── locations/      # Facility locations
│   │   ├── services/       # Service offerings
│   │   └── sightings/      # Space activity videos
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── ui/                 # shadcn/ui components
│   ├── contact-form.tsx    # Contact form
│   └── header.tsx          # Navigation
├── lib/                    # Utilities
│   ├── schema.ts           # JSON-LD structured data
│   └── seo.ts              # SEO utilities
├── public/                 # Static assets
│   ├── images/             # Satellite and space photos
│   └── videos/             # Video assets
└── next.config.js          # Next.js configuration
```

## 🖼 Media Assets

### Images
- **bermuda-atlantic-night.jpg**: Satellite view of North Atlantic (About page)
- **satellite-bermuda-orbit.jpg**: Satellite orbiting Bermuda (Services hero)
- **rocket-launch-trail.jpg**: Rocket launch at sunset (Locations hero)
- **bermuda-satellite-farm-2.jpg**: Actual satellite farm (Locations)
- **bermuda-rooftop-installation.jpg**: Professional rooftop setup (Locations)

### Videos
- **YouTube Embeds**: SpaceX launches and rocket passes
- **Twitter Integration**: NASA KiNet-X barium vapor experiment

## 🔒 Security Features

- **Content Security Policy**: Strict CSP with YouTube iframe allowlist
- **Security Headers**: HSTS, X-Frame-Options, etc.
- **Form Protection**: hCaptcha integration
- **Input Validation**: Zod schema validation
- **Rate Limiting**: API endpoint protection

## 🌟 Business Features

### Service Offerings
- 24/7 Network Operations Center (NOC)
- Remote hands & on-site engineering
- Earth station & VSAT support
- Data center & colocation (Tier-3 standards)
- Connectivity & backhaul
- Compliance & security

### Strategic Advantages
- Strategic North Atlantic location
- Resilient infrastructure
- UK-based legal framework
- Disaster recovery capabilities

### Credentials
- 30+ years IT/telecoms/broadcasting experience
- Award-winning track record
- World-class event support (Olympics, FIFA, Americas Cup, etc.)
- Major broadcaster partnerships (NBC, CBS, ABC, CNN, Fox)
- Satellite operator relationships (Intelsat, SES, Eutelsat)

## 📱 Responsive Design

- Mobile-first approach
- Responsive images and videos
- Touch-friendly navigation
- Optimized for all screen sizes

## 🔍 SEO Optimization

- Structured data (JSON-LD)
- Open Graph meta tags
- Twitter Card support
- Semantic HTML
- Fast loading times
- Accessibility compliance

## 📦 Deployment

Ready for deployment to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Traditional hosting

## 📄 License

Proprietary - All rights reserved

## 🤝 Contact

For questions about hosting services or technical support:
- **Email**: info@bermuda-ground-station.com
- **Phone**: +1 (441) 555-0123
- **Location**: Hamilton, Bermuda

---

*Professional satellite ground station hosting in Bermuda's strategic North Atlantic location.*