import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // For Vercel monorepo deployments
  outputFileTracingRoot: path.join(__dirname, "../../"),

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.evbuc.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.evbuc.com',
      },
      {
        protocol: 'https',
        hostname: '*.eventbrite.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
};

export default nextConfig;
