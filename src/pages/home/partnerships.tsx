import { Container, Section } from '@shared/layout';
import { Image } from '@src/shared/components';
import { useIsMobile } from '@src/shared/hooks';
import { useTranslation } from 'react-i18next';

const PartnershipsImage = () => {
  const isMobile = useIsMobile();
  return (
    <Image
      src={
        isMobile
          ? '/images/people/partnerships-mobile.webp'
          : '/images/people/partnerships-desktop.webp'
      }
      className="mx-auto"
    />
  );
};

const Partnerships = () => {
  const { t } = useTranslation('home/partnerships');
  return (
    <Section id="theme" className="bg-fire-opal py-6 md:py-10">
      <Container className="flex flex-col gap-4">
        <PartnershipsImage />
        <h2 className=" text-left text-2xl font-black text-white md:text-left lg:text-4xl">
          {t('title')}
        </h2>
        <p className="text-sm text-white md:text-justify md:text-base">
          {t('p_1')}
        </p>
        <p className="text-sm text-white md:text-justify md:text-base">
          {t('p_2')}
        </p>
        <p className="text-sm text-white md:text-justify md:text-base">
          {t('p_3')}
        </p>
        <p className="text-sm text-white md:text-justify md:text-base">
          {t('p_4')}
        </p>
        <p className="text-sm text-white md:text-justify md:text-base">
          {t('p_5')}
        </p>
        <p className="text-sm text-white md:text-justify md:text-base">
          {t('p_6')}
        </p>
      </Container>
    </Section>
  );
};
export default Partnerships;
