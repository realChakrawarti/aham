/**
 * @type {import('next').NextConfig}
 */

const isProduction = process.env.NODE_ENV === "production" || false;
const prefixPath = process.env.BASE_PATH;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
