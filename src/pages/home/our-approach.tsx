import { Card } from '@shared/components';
import { AtomIcon, GearIcon, HelpingHandIcon } from '@shared/icons';
import { Container, Section } from '@shared/layout';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type PrincipleCardProps = {
  icon: ReactNode;
  heading: string;
  description: string;
};
const PrincipleCard = ({ description, heading, icon }: PrincipleCardProps) => {
  return (
    <Card className="px-4 py-8">
      <div className="mb-7 flex items-center gap-x-3 text-2xl font-bold">
        <span>{icon}</span>
        <h3 className="text-lg font-black">{heading}</h3>
      </div>
      <p className="whitespace-pre-line leading-6">{description}</p>
    </Card>
  );
};

const OurApproach = () => {
  const { t } = useTranslation('home/our-approach');
  return (
    <Section id="our-approach" className="bg-white pb-16 pt-10">
      <Container>
        <h2 className="mb-4 text-left text-2xl font-black text-red md:text-left lg:text-4xl">
          {t('ourApproach')}
        </h2>
        <p className="mb-4 md:text-base">{t('description')}</p>

        <div className="grid gap-y-6 md:gap-x-6 lg:grid-cols-3">
          <PrincipleCard
            heading={t('principle.think.heading')}
            description={t('principle.think.description')}
            icon={<GearIcon />}
          />
          <PrincipleCard
            heading={t('principle.harness.heading')}
            description={t('principle.harness.description')}
            icon={<AtomIcon />}
          />
          <PrincipleCard
            heading={t('principle.collaborate.heading')}
            description={t('principle.collaborate.description')}
            icon={<HelpingHandIcon />}
          />
        </div>
      </Container>
    </Section>
  );
};
export default OurApproach;
