import { Image } from '@src/shared/components';
import { Container, Section } from '@src/shared/layout';
import { useTranslation } from 'react-i18next';

const CreatingModels = () => {
  const { t } = useTranslation('home/creating-models');
  return (
    <Section id="creating-models" className="bg-pale-pink py-10">
      <Container className="flex flex-col gap-8">
        <h2 className="text-2xl font-black uppercase md:text-4xl">
          {t('title')}
        </h2>
        <div className="overflow-hidden rounded-b-xl rounded-t-xl bg-white md:rounded-t-50">
          <Image
            className="w-full"
            src="/images/people/fep-onion-business-planning.webp"
          />
          <div className="flex flex-col gap-4 px-4 py-6 md:px-6 md:py-8">
            <p className="text-sm md:text-justify md:text-base">{t('p_1')}</p>
            <p className="text-sm md:text-justify md:text-base">{t('p_2')}</p>
            <p className="text-sm md:text-justify md:text-base">{t('p_3')}</p>
            <p className="text-sm md:text-justify md:text-base">{t('p_4')}</p>
            <p className="text-sm md:text-justify md:text-base">{t('p_5')}</p>
            <p className="text-sm md:text-justify md:text-base">{t('p_6')}</p>
            <p className="text-sm md:text-justify md:text-base">{t('p_7')}</p>
            <p className="text-sm md:text-justify md:text-base">{t('p_8')}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CreatingModels;
