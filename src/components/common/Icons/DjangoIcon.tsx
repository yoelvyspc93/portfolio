import { SVGProps } from 'react';

const DjangoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 42 42" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M26.551 0h-7.308v10.381a12.614 12.614 0 0 0-3.178-.35C8.428 10.029 3.5 14.534 3.5 21.478c0 7.206 4.646 10.96 13.571 10.969 2.98 0 5.737-.263 9.48-.928V0Zm-9.516 15.71c.902 0 1.61.087 2.463.35v10.934c-1.043.131-1.7.175-2.509.175-3.745 0-5.784-1.999-5.784-5.618 0-3.718 2.135-5.841 5.83-5.841Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M38.5 26.658V10.876h-7.297v13.432c0 5.927-.33 8.179-1.374 10.125-.998 1.902-2.559 3.15-5.784 4.56L30.826 42c3.225-1.508 4.786-2.875 5.971-5.04 1.27-2.254 1.703-4.868 1.703-10.302ZM37.774 0h-7.308v6.988h7.308V0Z"
    />
  </svg>
);
export default DjangoIcon;
