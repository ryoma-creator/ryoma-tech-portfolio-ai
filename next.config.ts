import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudinaryの画像を許可
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
