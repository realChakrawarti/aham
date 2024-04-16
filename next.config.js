/**
 * @type {import('next').NextConfig}
 */

const isProduction = process.env.NODE_ENV === "production" || false;
const prefixPath = "/aham";

const nextConfig = {
  reactStrictMode: true,
  basePath: isProduction ? prefixPath : "",
  assetPrefix: isProduction ? prefixPath : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
