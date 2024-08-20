import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgBottomWaveDivider = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 1280 99"
    {...props}
  >
    <path
      fill={props.fill || '#F6F6F6'}
      d="M0 0h1280v97C819 112 395-16 0 97V0Z"
    />
  </svg>
);
const Memo = memo(SvgBottomWaveDivider);
export default Memo;
