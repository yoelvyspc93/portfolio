import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

const isProduction = process.env.NODE_ENV === 'production';

export const CustomImage = ({
  src,
  alt,
  fill = false,
  width,
  height,
}: Props) => {
  const customSrc = isProduction ? `/portfolio${src}` : src;

  return (
    <Image
      src={customSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVR42mPsnHBckgEIGGEMACysA/U4E8v3AAAAAElFTkSuQmCC"
    />
  );
};
