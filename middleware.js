import { NextResponse } from 'next/server'

// This middleware runs before requests to /admin routes
export function middleware(request) {
  // Get the token from cookies
  const token = request.cookies.get('token')?.value
  
  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  // In production, you should verify the token and check role
  // For now, we'll allow access if token exists
  // TODO: Add proper JWT verification and role checking
  
  return NextResponse.next()
}

// Configure which routes this middleware applies to
export const config = {
  matcher: '/admin/:path*',  // Protects all /admin routes
}
