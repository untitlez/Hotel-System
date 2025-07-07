import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "readdy.ai",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
