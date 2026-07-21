import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    unoptimized: true,
    qualities: [75, 85, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  allowedDevOrigins: [
    "*.ngrok-free.dev",
    "*.ngrok.io",
    "*.ngrok.app",
  ],
};

export default nextConfig;
