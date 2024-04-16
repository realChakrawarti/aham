"use client";

import Image, { ImageLoaderProps, ImageProps } from "next/image";

const isProduction = process.env.NODE_ENV === "production" || false;

const myCustomLoader = ({ src }: ImageLoaderProps) => {
  return `https://realchakrawarti.github.io/aham/${src}`;
};

const CustomImage = (props: ImageProps) => {
  if (isProduction) return <Image loader={myCustomLoader} {...props} />;

  return <Image {...props} />;
};

export default CustomImage;
