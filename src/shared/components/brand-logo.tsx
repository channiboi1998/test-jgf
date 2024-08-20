import { Image } from '@shared/components';
import { RoutePath } from '@shared/constants';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export const BrandLogo = ({ className }: { className?: string }) => (
  <Link to={RoutePath.Home}>
    <span>
      <Image
        src="/images/branding/jgf-logo.webp"
        alt="brand logo"
        className={clsx('rounded-xl', className)}
        width={272}
      />
    </span>
  </Link>
);
