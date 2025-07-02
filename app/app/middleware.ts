import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = Boolean(request.cookies.get("your_auth_cookie")); // Adjust as per your auth logic

  if (
    (request.nextUrl.pathname.startsWith("/cart") ||
      request.nextUrl.pathname.startsWith("/checkout")) &&
    !isLoggedIn
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cart/:path*", "/checkout/:path*"],
};