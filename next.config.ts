import type { NextConfig } from "next";

const basePath = "";


const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
