import { Container, Section } from '@shared/layout';
import { Image } from '@src/shared/components';
import { useTranslation } from 'react-i18next';
const Heading = () => {
  const { t } = useTranslation('home/food-aid');
  return (
    <div className="flex flex-col items-center gap-y-4 lg:flex-row lg:gap-x-6">
      <h2 className="text-center text-2xl font-black text-teal lg:text-left lg:text-4xl">
        {t('heading')}
      </h2>
    </div>
  );
};
const Banner = () => {
  return (
    <Section id="busog-lusog-talino-banner">
      <div className="flex flex-col items-center gap-y-4">
        <Image
          src="/images/branding/jgf-foodaid-logo.webp"
          className="inline-block"
        />
        <div className="flex justify-center gap-x-20">
          <Image
            src="/images/art/foodaid-achievement-04.webp"
            className="inline-block rounded-2xl"
          />
          <Image
            src="/images/art/foodaid-achievement-05.webp"
            className="inline-block rounded-2xl"
          />
        </div>
      </div>
    </Section>
  );
};
const FoodAid = () => {
  const { t } = useTranslation('home/food-aid');
  return (
    <Section id="busog-lusog-talino" className="space-y-8 pt-6 lg:py-14">
      <Container className="flex flex-col gap-y-8">
        <Heading />
        <Banner />
        <Container>
          <div className="flex flex-col gap-4 px-4 py-6 md:px-6 md:py-8">
            <p className="text-sm md:text-justify md:text-base">{t('p_1')}</p>
            <p className="text-sm md:text-justify md:text-base">{t('p_2')}</p>
          </div>
        </Container>
      </Container>
    </Section>
  );
};
export default FoodAid;