export default function customImageLoader({ src }: { src: string }) {
  const isProduction = process.env.NODE_ENV === "production" || false;

  return isProduction ? `https://realchakrawarti.github.io/aham` : "";
}
