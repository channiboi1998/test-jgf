import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgFooterWaveDivider = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 1439 180"
    {...props}
  >
    <path
      fill="#FFA600"
      d="M1439.51 388.164v-379C1027.79-42.655 501.935 162.612-.494 142.163v246.5l1440.004-.499Z"
    />
    <path
      fill="#FE1C22"
      d="m1439.51 388.164-1093.422.38c-150.505.069-274.143.12-346.583.12V163.665C500.883 183.592 1028.44-21.625 1439.51 29.5v358.664Z"
    />
  </svg>
);
const Memo = memo(SvgFooterWaveDivider);
export default Memo;
