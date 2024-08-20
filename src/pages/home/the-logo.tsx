import { Container, Section } from '@shared/layout';
import { Card, Image } from '@src/shared/components';
import { useIsMobile } from '@src/shared/hooks';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

type ContentProps = HTMLAttributes<HTMLDivElement>;
const Content = ({ className }: ContentProps) => {
  const { t } = useTranslation('home/the-logo', { keyPrefix: 'component' });
  return (
    <div className={clsx('flex flex-col justify-between', className)}>
      <div>
        <h3 className="text-base font-bold uppercase text-firebrick md:text-lg">
          {t('theHill.heading')}
        </h3>
        <p>{t('theHill.description')}</p>
      </div>
      <div>
        <h3 className="text-base font-bold uppercase text-firebrick md:text-lg">
          {t('theRisingSun.heading')}
        </h3>
        <p>{t('theRisingSun.description')}</p>
      </div>
      <div>
        <h3 className="text-base font-bold uppercase text-firebrick md:text-lg">
          {t('theStones.heading')}
        </h3>
        <p>{t('theStones.description')}</p>
      </div>
    </div>
  );
};

const MobileLayout = () => {
  return (
    <Card className="overflow-hidden">
      <div className="h-4 bg-vivid-orange-peel" />
      <div className="flex flex-col gap-4 px-4 py-6">
        <Image
          className="mx-auto"
          src="/images/art/sunrise-horizon-desktop.webp"
          alt="sunrise horizon"
        />
        <Content className="gap-4" />
      </div>
    </Card>
  );
};

const DesktopLayout = () => {
  return (
    <div className="flex gap-6">
      <Image
        src="/images/art/sunrise-horizon-mobile.webp"
        alt="sunrise horizon art"
      />
      <Content className="flex-1" />
    </div>
  );
};

const TheLogo = () => {
  const { t } = useTranslation('home/the-logo');
  const isMobile = useIsMobile();
  return (
    <Section id="the-logo" className="bg-white-lilac py-6 md:py-16">
      <Container className="flex flex-col gap-4 md:gap-8">
        <h2 className="text-left text-2xl font-black text-red md:text-4xl">
          {t('heading')}
        </h2>
        <p className="text-sm md:text-base">{t('description')}</p>
        {isMobile ? <MobileLayout /> : <DesktopLayout />}
      </Container>
    </Section>
  );
};
export default TheLogo;
