# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Atlantic Ground Station** website - a professional Next.js marketing site showcasing satellite ground station hosting services from Bermuda's strategic North Atlantic location. The site targets satellite operators, broadcasters, and global enterprises needing reliable ground infrastructure.

## Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: TailwindCSS with custom design system
- **Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Security**: hCaptcha, comprehensive CSP headers
- **Analytics**: Vercel Analytics (environment-gated)
- **Deployment**: Vercel-ready

### Project Structure
```
app/
├── (marketing)/           # Marketing page group
│   ├── about/            # Strategic advantages
│   ├── contact/          # Contact form with hCaptcha
│   ├── legal/            # Privacy & terms pages
│   ├── locations/        # Ground station facilities & teleports
│   ├── services/         # Comprehensive service offerings
│   └── sightings/        # Space operations videos & photos
├── layout.tsx            # Root layout with analytics
├── page.tsx             # Homepage
└── sitemap.ts           # Dynamic sitemap generation

components/
├── ui/                  # shadcn/ui components
├── contact-form.tsx     # Contact form with validation
└── header.tsx           # Main navigation

lib/
├── schema.ts           # JSON-LD structured data
└── seo.ts              # SEO utilities and meta generation

public/
├── images/             # Satellite facilities & space photos
└── robots.txt          # SEO robots file
```

## Key Features

### Business Pages
- **Services**: 24/7 NOC, remote hands, earth station support, data center services
- **Locations**: Real ground station facilities and rooftop installations with professional photos
- **Space Operations**: SpaceX launches, NASA experiments, rocket passes from Bermuda
- **About**: Strategic positioning, 30+ years experience, world-class credentials

### Technical Excellence
- **Security Headers**: CSP, HSTS, X-Frame-Options, comprehensive security policy
- **Performance**: Next.js image optimization, responsive design, fast loading
- **SEO**: Structured data (JSON-LD), meta tags, OpenGraph, Twitter Cards
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Design Consistency**: Standardized typography with `text-5xl font-black sm:text-7xl` across all page titles

### Media Integration
- **YouTube**: Embedded SpaceX launch videos with CSP-secured iframes
- **Twitter**: NASA experiment tweets with official widget integration
- **Images**: Professional satellite facility photography, space imagery

## Development Commands

### Setup & Development
```bash
npm install              # Install dependencies
npm run dev             # Development server (localhost:3002)
npm run build           # Production build
npm start               # Production server
```

### Quality Assurance
```bash
npm run typecheck       # TypeScript validation
npm run lint            # ESLint checking
npm run a11y            # Accessibility testing with Pa11y
npm run lighthouse      # Lighthouse performance audit
npm run audit:all       # Run typecheck, lint, and build concurrently
```

### Testing
```bash
npm run test            # Playwright end-to-end tests
npm run test:headed     # Playwright tests with browser UI
```

## Security Configuration

### Bot Protection & Anti-Spam
- **Middleware Rate Limiting**: 100 requests/hour per IP address
- **User Agent Blocking**: Blocks common scrapers and bots
- **hCaptcha Integration**: Contact form protection with honeypot fields
- **Email Obfuscation**: Contact information protected from scrapers
- **Contact Phone**: +1-310-363-6000 (California number for international appeal)

### Content Security Policy
Configured in `next.config.js` with specific allowlists for:
- **YouTube**: `https://www.youtube.com`, `https://youtube.com`, `https://www.youtube-nocookie.com`
- **Twitter**: `https://platform.twitter.com`, `https://syndication.twitter.com`, `https://twitter.com`, `https://x.com`
- **hCaptcha**: `https://hcaptcha.com`, `https://*.hcaptcha.com`
- **Vercel**: `https://va.vercel-scripts.com`, `https://vitals.vercel-insights.com`

### Security Headers
- **HSTS**: Strict Transport Security with preload
- **CSP**: Comprehensive Content Security Policy
- **Frame Options**: DENY to prevent clickjacking
- **Content Type**: nosniff protection
- **Referrer Policy**: strict-origin-when-cross-origin

## Known Issues & Solutions

### Twitter Embeds
- **Issue**: Twitter widgets can have display issues in fixed-height containers
- **Solution**: Use flexible containers without height constraints, let Twitter handle sizing

### CSP for External Media
- **Issue**: Embedded content (YouTube, Twitter) requires specific CSP configuration
- **Solution**: Maintain whitelist of trusted domains in CSP frame-src and script-src

### Environment Variables
- **Analytics**: Gate `@vercel/analytics` with `NEXT_PUBLIC_ENABLE_ANALYTICS=true`
- **Site URL**: Use `NEXT_PUBLIC_SITE_URL` for canonical URLs and sitemap

## Content Guidelines

### Service Positioning
- Emphasize **strategic North Atlantic location**
- Highlight **24/7 professional support**
- Showcase **real facilities and credentials**
- Target **enterprise and satellite operators**

### Media Standards
- Use **high-quality space and satellite imagery**
- Include **actual facility photographs**
- Embed **relevant space activity videos**
- Maintain **professional, technical tone**

## Testing Strategy

- **End-to-end**: Playwright tests for critical user flows
- **Accessibility**: Pa11y CI for WCAG compliance
- **Performance**: Lighthouse audits for Core Web Vitals
- **Security**: Manual CSP and header validation

## Deployment Notes

- **Platform**: Optimized for Vercel deployment
- **Live URL**: https://bermuda-ground-station.vercel.app
- **Environment**: Production builds require environment variables
- **Performance**: Next.js optimizations enabled (images, fonts, compression)
- **Monitoring**: Vercel Analytics integration for performance tracking
- **Auto-Deploy**: GitHub pushes to main branch trigger automatic Vercel deployments

### Recent Updates
- **Phone Number**: Updated to +1-310-363-6000 across all contact points
- **Typography**: Standardized page title headers for visual consistency
- **Security**: Comprehensive bot protection and spam prevention measures

## Business Context

This website represents a **professional satellite ground station hosting service** in Bermuda, leveraging:
- Strategic North Atlantic positioning for satellite coverage
- 30+ years of IT/telecom/broadcasting experience
- World-class event support credentials (Olympics, FIFA, Americas Cup)
- Partnerships with major broadcasters and satellite operators
- Real facilities including ground station teleports and rooftop installations

The target audience includes satellite operators, broadcasters, enterprises requiring ground infrastructure, and organizations needing reliable North Atlantic satellite services.