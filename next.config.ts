import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "https://icaroweiler.github.io/portfolio",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
