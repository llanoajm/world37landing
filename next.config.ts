
// next.config.ts - UPDATE THIS FILE
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect all paths from world37.app to w37.ai
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'world37.app',
          },
        ],
        destination: 'https://w37.ai/:path*',
        permanent: true,
      },
      // Also handle www subdomain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.world37.app',
          },
        ],
        destination: 'https://w37.ai/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;