import { APP_CONFIG } from '@core/config/app';
import { Card } from '@shared/components';
import { Container, Section } from '@shared/layout';
import { Trans, useTranslation } from 'react-i18next';

const AboutJollibeeGroup = () => {
  const { t } = useTranslation(['home/about-jollibee-group', 'globals']);
  return (
    <Section id="about-jollibee-group" className="py-6 lg:py-14">
      <Container>
        <Card className="flex flex-col gap-y-6 border-t-16 border-red px-6 py-8 lg:p-10">
          <h2 className="text-2xl font-black text-red lg:text-4xl">
            {t('aboutJollibeeGroup')}
          </h2>
          <p className="whitespace-pre-line text-dark-charcoal">
            <Trans
              key="description"
              defaults={`${t('description')}`}
              components={{
                b: <b />,
                a: (
                  <a
                    href={APP_CONFIG.link.jfc}
                    target="_blank"
                    rel="noreferrer"
                  />
                )
              }}
            />
          </p>
        </Card>
      </Container>
    </Section>
  );
};
export default AboutJollibeeGroup;
