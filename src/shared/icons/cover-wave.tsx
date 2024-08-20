import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgCoverWave = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 1440 204"
    {...props}
  >
    <path
      fill="#f5f5f5"
      d="M1440 4.005C544.757 432.001 328-45-.002 4.005v199.001H1440v-199Z"
    />
  </svg>
);
const Memo = memo(SvgCoverWave);
export default Memo;
