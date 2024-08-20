import AEStories from '@assets/data/ae-stories.json';
import { Breadcrumbs, Image, StoryView } from '@shared/components';
import { useHashScroll } from '@shared/hooks';
import { Container, Section } from '@shared/layout';
import { useTranslation } from 'react-i18next';

const Ae = () => {
  useHashScroll();
  const { t } = useTranslation('ae/index');

  return (
    <main id="ae">
      <Breadcrumbs pageTitle={t('heading')} twBgClass="bg-orange" />
      <Section id="ae-cover-photo" className="bg-cultured py-6">
        <Container className="space-y-4">
          <div>
            <img
              src="/images/people/ae-cover.webp"
              className="w-full rounded-br-50 rounded-tl-50"
            />
          </div>
        </Container>
      </Section>

      <Section id="ae-description" className="py-6">
        <Container className="space-y-6">
          <h1 className="mb-6 text-center text-2xl font-black text-orange lg:text-left lg:text-3xl">
            {t('heading')}
          </h1>
          <p className="whitespace-pre-line">{t('description')}</p>
          <div className="flex flex-col-reverse gap-y-4 lg:flex-row lg:gap-x-4">
            <div className="shrink-0 space-y-2 lg:basis-2/5">
              <Image
                src="/images/people/ae-award.webp"
                className="w-full rounded-br-20 rounded-tl-20 lg:h-64"
              />
              <p className="italic">{t('aeivc')}</p>
            </div>
            <p className="whitespace-pre-line">{t('descriptionFollowUp')}</p>
          </div>

          <h2 className="text-center text-3xl font-black text-orange lg:text-left">
            {t('stories')}
          </h2>

          {AEStories.map((story) => (
            <StoryView
              key={story.id}
              story={story}
              twBorderColorClass="border-orange"
              twTextColorClass="text-orange"
              viewMoreIconHexColor="#FFA000"
            />
          ))}
        </Container>
      </Section>
    </main>
  );
};
export default Ae;
