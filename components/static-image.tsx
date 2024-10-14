import type { ImageProps } from 'next/image';
import Image from 'next/image';

const CustomImage = ({ src, ...props }: ImageProps) => {
  return <Image src={src} {...props} />;
};

export default CustomImage;
