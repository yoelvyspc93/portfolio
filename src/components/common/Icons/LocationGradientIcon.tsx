import { SVGProps } from 'react';

const LocationGradientIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="url(#a)"
      d="M12 0C5.4 0 0 4.32 0 9.6c0 6.48 10.5 13.8 10.95 14.16.3.12.75.24 1.05.24.3 0 .75-.12 1.05-.24C13.5 23.4 24 16.08 24 9.6 24 4.32 18.6 0 12 0Zm0 21.24c-3.15-2.4-9-7.56-9-11.64 0-3.96 4.05-7.2 9-7.2s9 3.24 9 7.2-5.85 9.24-9 11.64ZM12 4.8c-3.3 0-6 2.16-6 4.8 0 2.64 2.7 4.8 6 4.8s6-2.16 6-4.8c0-2.64-2.7-4.8-6-4.8Zm0 7.2c-1.65 0-3-1.08-3-2.4 0-1.32 1.35-2.4 3-2.4s3 1.08 3 2.4c0 1.32-1.35 2.4-3 2.4Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={24}
        y1={12}
        y2={12}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D78FE3" />
        <stop offset={0.5} stopColor="#7779E7" />
        <stop offset={1} stopColor="#9BCFFC" />
      </linearGradient>
    </defs>
  </svg>
);
export default LocationGradientIcon;
