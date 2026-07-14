import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // static export
    formats: ['image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  output: 'export' as const,
  trailingSlash: true,
  basePath: '/dog_grooming_website',
  distDir: 'out',
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;