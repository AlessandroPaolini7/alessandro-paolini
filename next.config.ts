import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/alessandro-paolini' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/alessandro-paolini' : '',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
};

export default nextConfig;
