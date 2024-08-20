import FEPStories from '@assets/data/fep-stories.json';
import { Breadcrumbs, StoryView } from '@shared/components';
import { useHashScroll } from '@shared/hooks';
import { Container, Section } from '@shared/layout';
import { Trans, useTranslation } from 'react-i18next';
import { Achievements } from './achievements';
import Sdg from './sdg';

const Fep = () => {
  useHashScroll();
  const { t } = useTranslation('fep/index');

  return (
    <main id="fep">
      <Breadcrumbs pageTitle={t('heading')} twBgClass="bg-castleton-green" />
      <Section id="fep-sdg" className="bg-cultured py-6">
        <Container className="space-y-4">
          <div>
            <img
              src="/images/people/fep-cover.webp"
              className="w-full rounded-br-50 rounded-tl-50"
            />
          </div>
          <Sdg />
        </Container>
      </Section>

      <Section id="fep-achievements" className="py-6">
        <Container className="space-y-6">
          <h1 className="mb-6 text-center text-2xl font-black text-la-salle-green lg:text-left lg:text-3xl">
            {t('heading')}
          </h1>
          <Achievements />
          <p className="whitespace-pre-line">
            <Trans
              key="description"
              defaults={`${t('description')}`}
              components={{ b: <b /> }}
            />
          </p>

          <h2 className="text-2xl font-black text-la-salle-green">
            {t('headingEfficiency')}
          </h2>
          <p className="whitespace-pre-line">{t('efficiencyDescription')}</p>

          <h2 className="text-center text-3xl font-black text-la-salle-green lg:text-left">
            {t('stories')}
          </h2>
          {FEPStories.map((story) => (
            <StoryView
              key={story.id}
              story={story}
              twBorderColorClass="border-la-salle-green"
              twTextColorClass="text-la-salle-green"
              viewMoreIconHexColor="#008025"
            />
          ))}
        </Container>
      </Section>
    </main>
  );
};
export default Fep;
