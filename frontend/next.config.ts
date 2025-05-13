import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "**", // Allows any path under this hostname
      },
      // Add more external image hosts here if needed
    ],
  },
};

export default nextConfig;
