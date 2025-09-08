import { NextRequest, NextResponse } from 'next/server';

// Bot user agents to block (be more specific to avoid blocking legitimate users)
const BLOCKED_USER_AGENTS = [
  'scrapy',
  'python-requests',
  'wget',
  'spider',
  'scraper',
  'harvest',
  'extract',
  'email',
  'collect',
];

// Countries to de-prioritize (Bermuda)
const DEPRIORITIZED_COUNTRIES = ['BM', 'bermuda'];

// Rate limiting map (simple in-memory for basic protection)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const ip = request.ip || 'unknown';
  const country = request.geo?.country?.toLowerCase() || '';
  
  // Block malicious user agents
  const isBot = BLOCKED_USER_AGENTS.some(agent => userAgent.includes(agent));
  if (isBot && !userAgent.includes('googlebot') && !userAgent.includes('bingbot')) {
    return new NextResponse('Access Denied', { status: 403 });
  }
  
  // Rate limiting (100 requests per hour per IP)
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const limit = 100;
  
  const key = `${ip}-${Math.floor(now / windowMs)}`;
  const current = rateLimitMap.get(key) || { count: 0, resetTime: now + windowMs };
  
  if (current.count >= limit) {
    return new NextResponse('Rate limit exceeded', { 
      status: 429,
      headers: {
        'Retry-After': Math.ceil((current.resetTime - now) / 1000).toString(),
      },
    });
  }
  
  current.count++;
  rateLimitMap.set(key, current);
  
  // Clean up old entries
  const entries = Array.from(rateLimitMap.entries());
  for (const [key, value] of entries) {
    if (value.resetTime < now) {
      rateLimitMap.delete(key);
    }
  }
  
  // Add security headers
  const response = NextResponse.next();
  
  response.headers.set('X-Robots-Tag', 'noarchive, nosnippet');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Discourage Bermuda crawlers (subtle)
  if (DEPRIORITIZED_COUNTRIES.includes(country)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};