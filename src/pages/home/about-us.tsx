import { Image } from '@shared/components';
import { Container, Section } from '@shared/layout';
import { Trans, useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation('home/about-us');
  return (
    <Section id="about-us">
      <Container className="py-4 md:py-8">
        <div className="flex flex-col items-center gap-x-10 gap-y-4 lg:flex-row">
          <div className="flex basis-full lg:basis-1/2">
            <Image
              src="/images/people/about-us-cover.webp"
              alt="women teaching some people"
              className="w-full rounded-20"
            />
          </div>
          <div className="basis-full bg-white lg:basis-1/2">
            <h2 className="mb-3 text-left text-2xl font-black text-red md:text-left lg:mb-6 lg:text-4xl">
              {t('aboutUs')}
            </h2>
            <p className="leading-6">
              <Trans
                key="description"
                defaults={`${t('description')}`}
                components={{ b: <b /> }}
              />
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
export default AboutUs;
