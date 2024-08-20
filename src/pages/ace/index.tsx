import aceStories from '@assets/data/ace-stories.json';
import { Breadcrumbs, StoryView } from '@shared/components';
import { useHashScroll } from '@shared/hooks';
import { Container, Section } from '@shared/layout';
import { Trans, useTranslation } from 'react-i18next';
import Achievements from './achievements';
import DonateNow from './donate-now';
import DonationChannels from './donation-channels';
import Sdg from './sdg';

const Ace = () => {
  const { t } = useTranslation('ace/index');
  useHashScroll();

  return (
    <main id="ace">
      <Breadcrumbs pageTitle={t('heading')} twBgClass="bg-teal" />
      <Section id="ace-sdg" className="bg-cultured py-6">
        <Container className="space-y-4">
          <div>
            <img
              src="/images/people/ace-cover.webp"
              className="w-full rounded-br-50 rounded-tl-50"
            />
          </div>
          <Sdg />
        </Container>
      </Section>

      <Section id="ace-achievements" className="py-6">
        <Container className="space-y-6">
          <h1 className="mb-6 text-center text-2xl font-black text-teal lg:text-left lg:text-3xl">
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
          <h2 className="text-center text-3xl font-black text-teal lg:text-left">
            {t('stories')}
          </h2>
          {aceStories.map((story) => (
            <StoryView
              key={story.id}
              story={story}
              twBorderColorClass="border-teal"
              twTextColorClass="text-teal"
              viewMoreIconHexColor="#008025"
            />
          ))}
          <DonateNow />
          <DonationChannels />
        </Container>
      </Section>
    </main>
  );
};
export default Ace;
