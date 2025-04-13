import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/alessandro-paolini',
    assetPrefix: '/alessandro-paolini',
  } : {}),
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
