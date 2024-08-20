import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgThinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#F8A519"
      d="M22.5 27.5h3v-13h-3v13Zm6-3h3v-8h-3v8Zm-12-1h3v-7h-3v7ZM12 44v-8.6a18.464 18.464 0 0 1-4.425-6.075A17.543 17.543 0 0 1 6 22c0-5 1.75-9.25 5.25-12.75S19 4 24 4c4.167 0 7.858 1.225 11.075 3.675 3.217 2.45 5.308 5.642 6.275 9.575l2.75 10.9c.133.467.05.892-.25 1.275-.3.383-.7.575-1.2.575H38v7c0 .825-.294 1.531-.881 2.119A2.889 2.889 0 0 1 35 40h-5v4H12Z"
    />
  </svg>
);
const Memo = memo(SvgThinkIcon);
export default Memo;
