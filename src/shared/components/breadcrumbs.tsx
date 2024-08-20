import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { RoutePath } from '../constants/route-path';
import { Container } from '../layout/container';

export const Breadcrumbs = ({
  pageTitle,
  twBgClass
}: {
  pageTitle: string;
  twBgClass?: string;
}) => {
  return (
    <div className={clsx('rounded-bl-50 py-4', twBgClass)}>
      <Container className="h-full">
        <div className="flex items-center">
          <p className="text-left text-sm text-white">
            <Link to={RoutePath.Home}>Home</Link>
            <span className="font-bold"> / {pageTitle}</span>
          </p>
        </div>
      </Container>
    </div>
  );
};
