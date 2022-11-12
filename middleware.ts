import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, response: NextResponse) {
  if (request.nextUrl.pathname.startsWith("/api/v1/attendances")) {
    console.log("hi")
    return NextResponse.next()
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  }
}

// See "Matching Paths" below to learn more

export const config = {
  matcher: "/api/v1/:path*",
};
