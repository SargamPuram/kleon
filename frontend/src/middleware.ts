import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value || '';

  // Logging for debugging
  // console.log('Request Path:', path);
  // console.log('Token:', token);

  // Always allow access to / and /hero regardless of login status
  if (path === '/' || path === '/hero') {
    return NextResponse.next();
  }

  // Allow access to /login and /signup only if not logged in
  if ((path === '/login' || path === '/signup') && !token) {
    return NextResponse.next();
  }

  // Redirect logged-in users from /login and /signup to /
  if ((path === '/login' || path === '/signup') && token) {
    console.log('Redirecting logged-in user from login/signup to /');
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  // Redirect non-logged-in users from /profile to /signup
  if (path === '/profile' && !token) {
    console.log('Redirecting non-logged-in user from profile to signup');
    return NextResponse.redirect(new URL('/signup', request.nextUrl));
  }

  // Redirect non-logged-in users from /query paths to /login
  if (path.startsWith('/query') && !token) {
    console.log('Redirecting to /login from protected query path');
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // Redirect non-logged-in users from other protected paths to /
  if (!token && path !== '/' && path !== '/login' && path !== '/signup') {
    console.log('Redirecting to / from other protected paths');
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  // Allow access to all other paths if logged in
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/query/:path*',  // Matches all paths starting with /query
  ],
};