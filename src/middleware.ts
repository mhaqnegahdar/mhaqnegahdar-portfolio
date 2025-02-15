import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/blog/bookmarks",
  "/blog/favorites",
  "/profile",
]);

const isAuthRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Protected routes
  if (isAuthRoute(req) && (await auth()).userId) {
    const url = new URL("/blog", req.url);
    return NextResponse.redirect(url);
  }

  // Protected routes
  if (isProtectedRoute(req) && !(await auth()).userId) {
    const url = new URL("/blog", req.url);
    return NextResponse.redirect(url);
  }

  // Protect all routes starting with `/admin`
  if (
    isAdminRoute(req) &&
    (await auth()).sessionClaims?.metadata?.role !== "admin"
  ) {
    const url = new URL("/blog", req.url);
    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
