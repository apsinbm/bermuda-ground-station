import { NextRequest } from 'next/server';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const rateLimitStore: RateLimitStore = {};

export function rateLimit(
  request: NextRequest,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000 // 15 minutes
): { success: boolean; reset: number; remaining: number } {
  const ip = request.ip || 
    request.headers.get('x-forwarded-for')?.split(',')[0] || 
    request.headers.get('x-real-ip') || 
    'unknown';

  const now = Date.now();
  const key = `rate-limit:${ip}`;

  if (!rateLimitStore[key] || rateLimitStore[key].resetTime < now) {
    rateLimitStore[key] = {
      count: 1,
      resetTime: now + windowMs,
    };
    return {
      success: true,
      reset: rateLimitStore[key].resetTime,
      remaining: limit - 1,
    };
  }

  rateLimitStore[key].count++;

  const isSuccess = rateLimitStore[key].count <= limit;
  const remaining = Math.max(0, limit - rateLimitStore[key].count);

  return {
    success: isSuccess,
    reset: rateLimitStore[key].resetTime,
    remaining,
  };
}

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now();
  Object.keys(rateLimitStore).forEach(key => {
    if (rateLimitStore[key].resetTime < now) {
      delete rateLimitStore[key];
    }
  });
}, 5 * 60 * 1000); // Cleanup every 5 minutes