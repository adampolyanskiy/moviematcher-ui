import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  async rewrites() {
    const apiBaseUrl = process.env.API_BASE_URL;
    return [
      {
        source: '/api/:path*',
        destination: `${apiBaseUrl}/api/:path*`,
      },
      {
        source: '/movieMatcherHub/:path*',
        destination: `${apiBaseUrl}/movieMatcherHub/:path*`,
      },
    ];
  },
};

export default nextConfig;
