/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = { fs: false };
    // config.experiments = { topLevelAwait: true };
    return config;
  },
  images: {
    domains: ['openweathermap.org'],
  },
};

module.exports = nextConfig;
