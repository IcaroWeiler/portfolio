import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "./",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
