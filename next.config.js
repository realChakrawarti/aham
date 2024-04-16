/**
 * @type {import('next').NextConfig}
 */

console.log(">>>>>>>", process.env.NODE_ENV);
const isProduction = process.env.NODE_ENV === "production" || false;
const prefixPath = "/aham";

const nextConfig = {
  reactStrictMode: true,
  basePath: isProduction ? prefixPath : "",
  assetPrefix: isProduction ? prefixPath : "",
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/customImageLoader.ts",
    unoptimized: true,
  },
};

module.exports = nextConfig;
