import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export const CustomImage = ({
  src,
  alt,
  fill = false,
  width,
  height,
}: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVR42mPsnHBckgEIGGEMACysA/U4E8v3AAAAAElFTkSuQmCC"
    />
  );
};
