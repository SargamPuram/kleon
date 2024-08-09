import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value || '';

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

  // Redirect non-logged-in users from /queries and its subpaths to /login
  if (path.startsWith('/queries') && !token) {
    console.log('Redirecting to /login from protected queries path');
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // Redirect non-logged-in users from /query to /login
  if (path === '/query' && !token) {
    console.log('Redirecting to /login from /query path');
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // Allow access to all other paths if logged in
  if (token) {
    return NextResponse.next();
  }

  // Redirect non-logged-in users from any other protected paths to /
  console.log('Redirecting to / from other protected paths');
  return NextResponse.redirect(new URL('/', request.nextUrl));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/query',
    '/queries/:path*',  // Matches all paths starting with /queries
  ],
};
