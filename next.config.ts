import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/alessandro-paolini',
  images: {
    unoptimized: true,
    path: '/alessandro-paolini',
    loader: 'custom',
    loaderFile: './image-loader.ts',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
