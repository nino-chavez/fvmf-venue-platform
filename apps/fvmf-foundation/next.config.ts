import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  // For Vercel monorepo deployments
  outputFileTracingRoot: path.join(__dirname, '../../'),
}

export default nextConfig
