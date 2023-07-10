/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
