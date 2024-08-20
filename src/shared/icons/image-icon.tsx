import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <path
      fill="#888383"
      d="M10.313 48.125c-.917 0-1.72-.344-2.407-1.031-.687-.688-1.031-1.49-1.031-2.407V10.313c0-.917.344-1.72 1.031-2.407.688-.687 1.49-1.031 2.407-1.031h34.374c.917 0 1.72.344 2.407 1.031.687.688 1.031 1.49 1.031 2.407v34.374c0 .917-.344 1.72-1.031 2.407-.688.687-1.49 1.031-2.407 1.031H10.313Zm0-3.438h34.374V10.313H10.313v34.374Zm3.208-5.557h28.015l-8.421-11.229-7.563 9.797-5.328-7.276-6.703 8.708Z"
    />
  </svg>
);
const Memo = memo(SvgImageIcon);
export default Memo;
