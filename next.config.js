/** @type {import('next').NextConfig} */

const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig = {
  reactStrictMode: true,
  distDir: isDevelopment ? ".next-dev" : ".next",
  webpack: (config) => {
    if (isDevelopment) {
      config.optimization.minimize = false;
    }

    return config;
  },
};

module.exports = nextConfig;
