/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
      appDir: true,
  },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: false,
  transpilePackages: [],
  typescript: {
    ignoreBuildErrors: true,
  }
};

module.exports = nextConfig;
