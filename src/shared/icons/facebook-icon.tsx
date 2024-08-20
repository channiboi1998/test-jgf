import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgFacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <g clipPath="url(#facebook-icon_svg__a)">
      <path
        fill="#fff"
        d="M14.482.165H12.4c-1.594 0-2.739.378-3.434 1.134-.696.757-1.044 1.871-1.044 3.344v1.403c0 .371-.3.672-.672.672h-.72c-.37 0-.671.3-.671.672v2.103c0 .37.3.671.672.671h.72c.37 0 .671.301.671.672v8.657c0 .37.3.672.672.672h2.795c.37 0 .671-.301.671-.672v-8.657c0-.37.301-.671.672-.671h1.412c.37 0 .703-.3.742-.668l.223-2.111a.591.591 0 0 0-.601-.668H12.73a.672.672 0 0 1-.672-.672V4.995c0-.26.012-.46.037-.601a1.17 1.17 0 0 1 .163-.419.67.67 0 0 1 .413-.285 2.94 2.94 0 0 1 .758-.079h1.052c.371 0 .672-.3.672-.672V.836c0-.37-.3-.671-.672-.671Z"
      />
    </g>
    <defs>
      <clipPath id="facebook-icon_svg__a">
        <path fill="#fff" d="M.506.165h20v20h-20z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgFacebookIcon);
export default Memo;
