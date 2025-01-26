import { SVGProps } from 'react';

const StorybookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 42 42" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="m29.242.425-.21 4.743a.316.316 0 0 0 .508.262l1.855-1.4 1.575 1.225a.315.315 0 0 0 .49-.245L33.285.18l2.328-.175a2.1 2.1 0 0 1 2.238 2.1v37.793a2.101 2.101 0 0 1-2.205 2.1l-28.168-1.26a2.1 2.1 0 0 1-2.013-2.03L4.153 4.064A2.1 2.1 0 0 1 6.13 1.84L29.225.389l.017.036Zm-5.372 15.85c0 .823 5.53.42 6.282-.14 0-5.6-3.01-8.557-8.503-8.557-5.512 0-8.573 3.01-8.573 7.507 0 7.787 10.498 7.927 10.498 12.178 0 1.225-.56 1.925-1.837 1.925-1.68 0-2.363-.857-2.275-3.78 0-.63-6.386-.84-6.596 0-.473 7.053 3.902 9.1 8.923 9.1 4.883 0 8.696-2.607 8.696-7.315 0-8.347-10.673-8.12-10.673-12.248 0-1.697 1.26-1.925 1.977-1.925.788 0 2.188.123 2.083 3.273l-.002-.018Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h42v42H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default StorybookIcon;
