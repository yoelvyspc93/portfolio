import { SVGProps } from 'react';

const CloseOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" {...props}>
    <path
      fill="currentColor"
      d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14 14-6.2 14-14S23.8 2 16 2Zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12-5.4 12-12 12Z"
    />
    <path
      fill="#fff"
      d="M21.4 23 16 17.6 10.6 23 9 21.4l5.4-5.4L9 10.6 10.6 9l5.4 5.4L21.4 9l1.6 1.6-5.4 5.4 5.4 5.4-1.6 1.6Z"
    />
  </svg>
);
export default CloseOutlineIcon;
