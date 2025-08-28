import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
 
const intlMiddleware = createMiddleware({
  locales: ['en', 'id'],
  defaultLocale: 'en',
});

export default function middleware(req: NextRequest) {
  return intlMiddleware(req);
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|en)/:path*']
};