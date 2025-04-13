import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/alessandro-paolini',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
