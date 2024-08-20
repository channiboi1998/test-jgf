import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgHomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#FE1C22"
      d="M2.833 13.813V6.905a1.055 1.055 0 0 1 .425-.85l4.604-3.453c.185-.142.397-.212.635-.212s.451.07.64.212l4.604 3.453a1.056 1.056 0 0 1 .425.85v6.907c0 .292-.104.542-.312.75a1.023 1.023 0 0 1-.75.312h-2.656a.514.514 0 0 1-.379-.153.514.514 0 0 1-.153-.378v-3.896c0-.15-.05-.277-.152-.379a.514.514 0 0 0-.379-.152h-1.77c-.151 0-.277.05-.38.152a.514.514 0 0 0-.152.379v3.896c0 .15-.05.276-.153.378a.514.514 0 0 1-.378.153H3.896c-.293 0-.543-.104-.75-.312a1.023 1.023 0 0 1-.313-.75Z"
    />
  </svg>
);
const Memo = memo(SvgHomeIcon);
export default Memo;
