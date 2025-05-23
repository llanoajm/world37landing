import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  
  // Check if the request is coming to world37.app
  if (host.includes('world37.app')) {
    const url = request.nextUrl.clone()
    url.hostname = 'w37.ai'
    url.protocol = 'https:'
    
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}