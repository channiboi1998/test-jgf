import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { RoutePath } from '../constants/route-path';
import { ChevronIcon, HomeIcon } from '../icons';
import { Container } from '../layout/container';
import { scrollToTop } from '../utilities/scroll';
import { Button } from './button';

const BackToHome = () => {
  const { t } = useTranslation('globals');
  return (
    <Link
      to={RoutePath.Home}
      aria-label="scroll-to-top-button"
      className="text-dark-liver flex items-center gap-x-1"
    >
      <span>
        <HomeIcon />
      </span>
      <p className="text-sm text-carmine-pink">{t('home')}</p>
    </Link>
  );
};

const BackToTop = () => {
  const { t } = useTranslation('globals');
  const location = useLocation();
  const atHomePage = location.pathname === RoutePath.Home;
  return (
    <Button
      variant="unstyled"
      onClick={() => scrollToTop()}
      aria-label="scroll-to-top-button"
      className="text-dark-liver flex items-center"
    >
      <span>
        <ChevronIcon className="fill-carmine-pink" />
      </span>
      <p className="text-sm text-carmine-pink">
        {atHomePage ? `${t('backTo')} ${t('top')}` : t('top')}
      </p>
    </Button>
  );
};

export const HomeTopNavigation = () => {
  const { t } = useTranslation('globals');
  const location = useLocation();
  const atHomePage = location.pathname === RoutePath.Home;

  return (
    <Container className="flex items-center justify-end gap-x-2 py-10">
      {!atHomePage && (
        <>
          <p className="text-sm text-carmine-pink">{t('backTo')}:</p>
          <BackToHome />|
        </>
      )}

      <BackToTop />
    </Container>
  );
};
