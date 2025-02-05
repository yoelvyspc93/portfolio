import { SVGProps } from 'react';

const EmailGradientIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path
      d="M20.4 0H3.6C2.64522 0 1.72955 0.474106 1.05442 1.31802C0.379285 2.16193 0 3.30653 0 4.5V19.5C0 20.6935 0.379285 21.8381 1.05442 22.682C1.72955 23.5259 2.64522 24 3.6 24H20.4C21.3548 24 22.2705 23.5259 22.9456 22.682C23.6207 21.8381 24 20.6935 24 19.5V4.5C24 3.30653 23.6207 2.16193 22.9456 1.31802C22.2705 0.474106 21.3548 0 20.4 0ZM19.596 3L12 10.125L4.404 3H19.596ZM20.4 21H3.6C3.28174 21 2.97652 20.842 2.75147 20.5607C2.52643 20.2794 2.4 19.8978 2.4 19.5V4.875L11.28 13.2C11.4877 13.3947 11.7404 13.5 12 13.5C12.2596 13.5 12.5123 13.3947 12.72 13.2L21.6 4.875V19.5C21.6 19.8978 21.4736 20.2794 21.2485 20.5607C21.0235 20.842 20.7183 21 20.4 21Z"
      fill="url(#paint0_linear_17_144)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_17_144"
        x1="0"
        y1="12"
        x2="24"
        y2="12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D78FE3" />
        <stop offset="0.5" stopColor="#7779E7" />
        <stop offset="1" stopColor="#9BCFFC" />
      </linearGradient>
    </defs>
  </svg>
);

export default EmailGradientIcon;
