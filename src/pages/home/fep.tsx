import { Container, Section } from '@shared/layout';
import { Image } from '@src/shared/components';
import { useIsMobile } from '@src/shared/hooks';
import { Trans, useTranslation } from 'react-i18next';

const FepHeader = () => {
  const { t } = useTranslation('home/fep');
  return (
    <Section
      className="py-6 md:bg-white-smoke md:py-10"
      id="farmer-entrepreneurship-program-header"
    >
      <Container className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
        <Image src="/images/branding/fep-logo.webp" />
        <h2 className="text-center text-2xl font-black text-la-salle-green md:text-left md:text-4xl">
          {t('title')}
        </h2>
      </Container>
    </Section>
  );
};

const FepImageGroup = () => {
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col justify-between gap-6 py-4 md:flex-row">
      <Image
        src={
          isMobile
            ? '/images/art/fep-30-farmer-groups-mobile.webp'
            : '/images/art/fep-30-farmer-groups-desktop.webp'
        }
      />
      <Image
        src={
          isMobile
            ? '/images/art/fep-1-million-kilos-vegetables-mobile.webp'
            : '/images/art/fep-1-million-kilos-vegetables-desktop.webp'
        }
      />
      <Image
        src={
          isMobile
            ? '/images/art/fep-107-million-pesos-mobile.webp'
            : '/images/art/fep-107-million-pesos-desktop.webp'
        }
      />
    </div>
  );
};

const FepContent = () => {
  const { t } = useTranslation('home/fep');
  return (
    <Section id="farmer-entrepreneurship-program-content">
      <Container className="flex flex-col gap-4 pb-10 md:flex-col-reverse md:py-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm md:text-justify md:text-base">
            <Trans
              t={t}
              i18nKey="p_1"
              components={{ b: <b className="font-bold" /> }}
            />
          </p>
          <p className="text-sm md:text-justify md:text-base">{t('p_2')}</p>
          <p className="text-sm md:text-justify md:text-base">{t('p_3')}</p>
          <p className="text-sm md:text-justify md:text-base">{t('p_4')}</p>
          <p className="text-sm md:text-justify md:text-base">{t('p_5')}</p>
          <p className="text-sm md:text-justify md:text-base">{t('p_6')}</p>
        </div>
        <FepImageGroup />
      </Container>
    </Section>
  );
};

const Fep = () => {
  return (
    <>
      <FepHeader />
      <FepContent />
    </>
  );
};
export default Fep;
