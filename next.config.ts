import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // Assets are already compressed WebP files; Pages has no image server.
  images: { unoptimized: true },
  agentRules: false,
  devIndicators: false,
};

export default nextConfig;
