import { APP_CONFIG } from '@core/config/app';
import { BrandLogo, HomeTopNavigation, Image } from '@shared/components';
import { FacebookIcon, FooterWaveDivider, YoutubeIcon } from '@shared/icons';
import { Container } from '@shared/layout/container';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const SocialMedia = ({ className }: { className: string }) => {
  const { t } = useTranslation('/components/footer');
  const { fb: fbLink, yt: ytLink } = APP_CONFIG.link;
  return (
    <div className={clsx(className)}>
      <p className="mb-1 font-bold">{t('connectWithUs')}</p>
      <div className="flex flex-row items-center justify-center space-x-4 md:justify-start">
        <a
          href={fbLink}
          target="_blank"
          rel="noreferrer"
          aria-label="jgf facebook link"
        >
          <FacebookIcon />
        </a>
        <a
          href={ytLink}
          target="_blank"
          rel="noreferrer"
          aria-label="jgf youtube link"
        >
          <YoutubeIcon />
        </a>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const { t } = useTranslation('/components/footer');
  const {
    link: { jgf: jgfLink, pp: ppLink },
    email: { jgf: jgfEmail },
    phone: { jgf: jgfPhone }
  } = APP_CONFIG;

  return (
    <div className="text-left">
      <h3 className="font-bold">{t('contactUs')}</h3>
      <div className="flex flex-col gap-y-2 text-sm md:gap-y-4">
        <address className="not-italic leading-6">{t('address')}</address>
        <a href={`tel:${jgfPhone}`} className="whitespace-pre-line">
          {t('telephone')}
        </a>
        <div className="flex flex-col gap-x-2 gap-y-2">
          <a href={`mailto:${jgfEmail}`}>{t('email')}</a>
          <a href={jgfLink} target="_blank" rel="noreferrer">
            {t('website')}
          </a>
        </div>
        <a href={ppLink} target="_blank" className="font-bold" rel="noreferrer">
          {t('privacyPolicy')}
        </a>
      </div>
    </div>
  );
};

const NpcSeal = () => {
  const {
    link: { pp: ppLink }
  } = APP_CONFIG;

  return (
    <a href={ppLink} target="_blank" rel="noreferrer">
      <Image
        src="/images/npc/seal.webp"
        width={401}
        height={531}
        className="w-full object-contain"
      />
    </a>
  );
};

export const Footer = () => {
  const { t } = useTranslation('/components/footer');

  return (
    <>
      <HomeTopNavigation />
      <div className="wave-divider">
        <FooterWaveDivider />
      </div>
      <footer>
        <div className="bg-red py-7 text-center text-white md:text-left">
          <Container lg="full" xl="full" xxl="full" className="lg:px-10">
            <div className="flex flex-col gap-x-10 gap-y-4 lg:flex-row">
              <div className="flex shrink-0 items-end justify-center gap-x-4 lg:items-start">
                <BrandLogo className="mx-auto w-52 md:mx-0 md:w-56" />
                <span className="block w-32 lg:hidden">
                  <NpcSeal />
                </span>
              </div>
              <hr className="text-orange-yellow opacity-50 lg:hidden" />
              <div className="space-y-4">
                <p className="text-left text-sm leading-6">
                  {t('description')}
                </p>
                <SocialMedia className="hidden md:block" />
              </div>
              <ContactUs />
              <hr className="text-orange-yellow opacity-50 lg:hidden" />
              <SocialMedia className="md:hidden" />
              <span className="mx-auto -mt-24 hidden w-56 shrink-0 lg:block">
                <NpcSeal />
              </span>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};
