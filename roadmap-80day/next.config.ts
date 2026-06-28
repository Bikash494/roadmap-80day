import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  // Next.js 16: ESLint is skipped automatically during builds by default
};

export default nextConfig;
