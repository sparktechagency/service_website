import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**', // allow all images under /photos/
      },
      // {
      //   protocol: 'http',
      //   hostname: '10.0.60.118',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
