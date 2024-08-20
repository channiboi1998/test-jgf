import { Image } from '@shared/components';
import { Container, Section } from '@shared/layout';
import { Trans, useTranslation } from 'react-i18next';
import Achievements from '../ace/achievements';

const Heading = () => {
  const { t } = useTranslation('ace/index');
  return (
    <div className="flex flex-col items-center gap-y-4 lg:flex-row lg:gap-x-6">
      <span>
        <Image src="/images/branding/ace-logo.webp" />
      </span>
      <h2 className="text-center text-2xl font-black text-red lg:text-left lg:text-4xl">
        {t('heading')}
      </h2>
    </div>
  );
};

const Ace = () => {
  const { t } = useTranslation('ace/index');
  return (
    <Section id="ace-scholarship-program" className="space-y-8 pt-6 lg:py-14">
      <Container className="flex flex-col gap-y-8">
        <Heading />
        <Achievements />
        <Container>
          <p className="whitespace-pre-line">
            <Trans
              key="description"
              defaults={`${t('description')}`}
              components={{ b: <b /> }}
            />
          </p>
        </Container>
      </Container>
    </Section>
  );
};
export default Ace;
