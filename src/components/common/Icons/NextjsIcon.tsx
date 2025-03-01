import { SVGProps } from 'react';

const NextjsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 84 84" {...props}>
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={84}
        height={84}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill="#fff" d="M0 0h84v84H0V0Z" />
      </mask>
      <g mask="url(#b)">
        <path
          fill="currentColor"
          d="M39.249.021c-.182.018-.756.077-1.274.116-11.928 1.078-23.1 7.514-30.184 17.409a41.58 41.58 0 0 0-7.413 18.35C.042 38.206 0 38.886 0 42.014c0 3.13.042 3.812.378 6.118C2.66 63.907 13.888 77.158 29.11 82.068c2.726.879 5.6 1.477 8.865 1.841 1.274.14 6.776.14 8.05 0 5.639-.626 10.42-2.023 15.13-4.427.725-.368.865-.47.767-.55a740.36 740.36 0 0 1-6.842-9.17l-6.717-9.075-8.414-12.457a1200.03 1200.03 0 0 0-8.477-12.446c-.032-.01-.063 5.523-.08 12.285-.025 11.83-.035 12.306-.183 12.586a1.49 1.49 0 0 1-.72.746c-.263.133-.49.157-1.733.157h-1.421l-.378-.238a1.54 1.54 0 0 1-.55-.602l-.174-.367.017-16.464.024-16.471.256-.322a2.26 2.26 0 0 1 .609-.5c.336-.165.466-.18 1.89-.18 1.673 0 1.953.064 2.387.54.122.133 4.68 7 10.132 15.267l16.57 25.102 6.65 10.073.339-.22a43.113 43.113 0 0 0 8.627-7.571 41.814 41.814 0 0 0 9.888-21.473c.336-2.31.378-2.989.378-6.118 0-3.129-.042-3.808-.378-6.118C81.34 20.126 70.112 6.871 54.891 1.96A44.1 44.1 0 0 0 46.148.13c-.792-.084-6.217-.175-6.896-.105m17.196 25.41a1.654 1.654 0 0 1 .83.966c.063.21.08 4.777.063 15.067l-.025 14.763-2.6-3.99-2.611-3.99v-10.73c0-6.941.031-10.84.08-11.03a1.675 1.675 0 0 1 .812-1.035c.34-.175.462-.19 1.75-.19 1.215 0 1.428.018 1.701.165"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h84v84H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default NextjsIcon;
