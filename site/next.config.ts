import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // basePath: "/portfolio",  // Décommenter si déployé sur username.github.io/portfolio
};

export default nextConfig;
