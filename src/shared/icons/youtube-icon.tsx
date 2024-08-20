import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgYoutubeicon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <g clipPath="url(#youtube_icon_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10.092 15.268V8.534c2.39 1.125 4.242 2.211 6.432 3.383-1.806 1.002-4.041 2.126-6.432 3.351ZM23.415 5.185c-.412-.544-1.115-.967-1.863-1.107-2.2-.417-15.921-.419-18.12 0-.6.113-1.134.385-1.593.807C-.095 6.68.511 16.307.978 17.866c.196.675.45 1.162.768 1.481.411.423.974.714 1.621.844 1.811.375 11.14.584 18.146.056a3.143 3.143 0 0 0 1.668-.853c1.788-1.788 1.666-11.955.234-14.21Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="youtube_icon_svg__a">
        <path fill="#fff" d="M.506.165h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgYoutubeicon);
export default Memo;
