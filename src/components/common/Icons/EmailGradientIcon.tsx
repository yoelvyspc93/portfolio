import { SVGProps } from 'react';

const EmailGradientIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="url(#a)"
      d="M20.4 0H3.6c-.955 0-1.87.474-2.546 1.318C.38 2.162 0 3.307 0 4.5v15c0 1.194.38 2.338 1.054 3.182C1.73 23.526 2.645 24 3.6 24h16.8c.955 0 1.87-.474 2.546-1.318C23.62 21.838 24 20.694 24 19.5v-15c0-1.193-.38-2.338-1.054-3.182C22.27.474 21.355 0 20.4 0Zm-.804 3L12 10.125 4.404 3h15.192Zm.804 18H3.6c-.318 0-.623-.158-.849-.44A1.709 1.709 0 0 1 2.4 19.5V4.875l8.88 8.325c.208.195.46.3.72.3.26 0 .512-.105.72-.3l8.88-8.325V19.5c0 .398-.126.78-.352 1.06-.225.282-.53.44-.848.44Z"
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
export default EmailGradientIcon;
