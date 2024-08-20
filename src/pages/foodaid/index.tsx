import foodAidStories from '@assets/data/foodaid-stories.json';
import { Breadcrumbs, StoryView } from '@shared/components';
import { useHashScroll } from '@shared/hooks';
import { Container, Section } from '@shared/layout';
import { Trans, useTranslation } from 'react-i18next';
import Achievements from './achievements';
import Sdg from './sdg';

const FoodAid = () => {
  useHashScroll();
  const { t } = useTranslation('foodaid/index');

  return (
    <main id="foodaid">
      <Breadcrumbs pageTitle={t('heading')} twBgClass="bg-firebrick" />
      <Section id="foodaid-sdg" className="bg-cultured py-6">
        <Container className="space-y-4">
          <div>
            <img
              src="/images/people/foodaid-cover.webp"
              className="w-full rounded-br-50 rounded-tl-50"
            />
          </div>
          <Sdg />
        </Container>
      </Section>

      <Section id="fep-achievements" className="py-6">
        <Container className="space-y-6">
          <h1 className="mb-6 text-center text-2xl font-black text-firebrick lg:text-left lg:text-3xl">
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

          <h2 className="text-center text-3xl font-black text-firebrick lg:text-left">
            {t('stories')}
          </h2>
          {foodAidStories.map((story) => (
            <StoryView
              key={story.id}
              story={story}
              twBorderColorClass="border-firebrick"
              twTextColorClass="text-firebrick"
              viewMoreIconHexColor="#008025"
            />
          ))}
        </Container>
      </Section>
    </main>
  );
};
export default FoodAid;
