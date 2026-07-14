import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // static export
    formats: ['image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // GitHub Pages
  ...(isProd && {
    output: 'export' as const,
    trailingSlash: true,
    basePath: '/dog_grooming_website',
  }),
};

export default nextConfig;