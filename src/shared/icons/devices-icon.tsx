import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgDevicesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <circle cx={21} cy={21} r={21} fill="#B51F26" />
    <path
      fill="#fff"
      d="M11 29v-2.25h2.15V14.5c0-.412.147-.766.44-1.06.294-.293.648-.44 1.06-.44h15.5v1.5h-15.5v12.25h5.85V29H11Zm11.975 0a.869.869 0 0 1-.695-.337A1.162 1.162 0 0 1 22 27.9V16.975c0-.276.093-.508.28-.695a.943.943 0 0 1 .695-.28h6.794c.32 0 .606.087.856.262.25.175.375.413.375.713v10.932c0 .31-.12.57-.363.779-.241.21-.529.314-.862.314h-6.8Zm.525-2.25h6V17.5h-6v9.25Z"
    />
  </svg>
);
const Memo = memo(SvgDevicesIcon);
export default Memo;
