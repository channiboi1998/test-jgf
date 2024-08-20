import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgFocusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#4499AC"
      d="M24 33.35c-2.587 0-4.792-.912-6.615-2.735-1.823-1.823-2.735-4.028-2.735-6.615 0-2.587.912-4.792 2.735-6.615 1.823-1.823 4.028-2.735 6.615-2.735 2.587 0 4.792.912 6.615 2.735 1.823 1.823 2.735 4.028 2.735 6.615 0 2.587-.912 4.792-2.735 6.615-1.823 1.823-4.028 2.735-6.615 2.735ZM9 42c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1v-8.6h3V39h8.6v3H9Zm21.4 0v-3H39v-8.6h3V39c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9h-8.6ZM6 17.6V9c0-.8.3-1.5.9-2.1C7.5 6.3 8.2 6 9 6h8.6v3H9v8.6H6Zm33 0V9h-8.6V6H39c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v8.6h-3Z"
    />
  </svg>
);
const Memo = memo(SvgFocusIcon);
export default Memo;
