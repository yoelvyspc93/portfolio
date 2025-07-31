import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/navigation';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Generate nonce for CSP
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Content Security Policy
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ''};
    style-src 'self' https://fonts.googleapis.com;
    img-src 'self' data: blob: https:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' ${process.env.NODE_ENV === 'development' ? 'ws: wss:' : ''};
    media-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, ' ')
    .trim();

  // Set security headers
  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload',
  );
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  );

  // Add nonce to request headers for components to access
  response.headers.set('x-nonce', nonce);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/',
    '/(en|es)/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
