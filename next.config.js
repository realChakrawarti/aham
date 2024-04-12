/**
 * @type {import('next').NextConfig}
 */

const isDevelopement = process.env.NODE_ENV === "development" || false;
const prefixPath = "/aham";

const nextConfig = {
  reactStrictMode: true,
  basePath: isDevelopement ? "" : prefixPath,
  assetPrefix: isDevelopement ? "" : prefixPath,
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
