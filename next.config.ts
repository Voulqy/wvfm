/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any image domains you need
    formats: ['image/avif', 'image/webp'],
  },
  // Enable production source maps (optional)
  productionBrowserSourceMaps: false,
};

export default nextConfig;