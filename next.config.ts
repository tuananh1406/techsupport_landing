import type { NextConfig } from "next";
// import path from "path";
const nextConfig: NextConfig = {
  // For local development, basePath is '/'
  // This file will be overwritten during deployment with the appropriate basePath
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // output: "export",
  distDir: "dist",
  productionBrowserSourceMaps: false,
  // turbopack: {
  //   root: path.join(__dirname, ".."),
  // },
};

export default nextConfig;
