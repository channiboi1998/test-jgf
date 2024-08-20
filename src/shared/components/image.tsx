import { ImgHTMLAttributes } from 'react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt?: string;
};

export const Image = ({ ...rest }: ImageProps) => {
  return <img loading="eager" {...rest} />;
};
