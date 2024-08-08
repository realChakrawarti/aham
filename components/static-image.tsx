import type { ImageProps } from 'next/image';
import Image from 'next/image';
import nextConfig from '../next.config.js';

const CustomImage = ({ src, ...props }: ImageProps) => {
  const { basePath } = nextConfig;
  return <Image src={`${basePath}${src}`} {...props} />;
};

export default CustomImage;
