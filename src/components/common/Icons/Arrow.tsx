import { SVGProps } from 'react';

const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 14 24">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12.775 13.244-9.9 9.9L.4 20.67l8.663-8.663L.4 3.345 2.875.87l9.9 9.9a1.75 1.75 0 0 1 0 2.474Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Arrow;
