import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // We can add logic here if we have multiple locales again in the future.
  return NextResponse.next();
}
 
export const config = {
  // Match all paths
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
