import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || '#E64242'}
      d="M7.075 15.075 6 14l6-6 6 6-1.075 1.075L12 10.15l-4.925 4.925Z"
    />
  </svg>
);
const Memo = memo(SvgChevronIcon);
export default Memo;
