import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  // For Vercel monorepo deployments
  outputFileTracingRoot: path.join(__dirname, '../../'),

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/media/**',
      },
    ],
  },
}

export default nextConfig
