import { Button, Card, Image } from '@shared/components';
import { Section } from '@shared/layout';
import { Story } from '@shared/models';
import { toKebabCase } from '@shared/utilities';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

type StoryCardProps = {
  story: Story;
  headingColorClass?: string;
};
const StoryCard = ({ story, headingColorClass }: StoryCardProps) => {
  const { t } = useTranslation('globals');
  return (
    <div className="flex flex-col gap-y-4 border-b border-bright-gray py-6 last-of-type:border-none last-of-type:pb-0 md:flex-row md:gap-x-6">
      <div className="shrink-0 md:w-1/4">
        <Image
          src={story.thumbnail.src}
          className="h-auto w-full rounded-bl-2xl  rounded-tr-2xl object-contain"
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <h3 className={clsx('text-lg font-bold', headingColorClass)}>
          {story.title}
        </h3>
        <p
          className="line-clamp-3 text-dark-charcoal"
          dangerouslySetInnerHTML={{
            __html: story.preview
          }}
        ></p>
        <Button
          as="a"
          href={`${story.path}#${toKebabCase(story.title)}`}
          className="w-full uppercase md:w-1/3"
        >
          {t('readMore', { ns: 'globals' })}
        </Button>
      </div>
    </div>
  );
};

type StoriesProps = {
  heading: string;
  stories: Story[];
  bgImageSrc: string;
  headingColorClass?: string;
};
const Stories = ({
  heading,
  stories,
  bgImageSrc,
  headingColorClass
}: StoriesProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Image src={bgImageSrc} className="w-full object-contain" />
      </div>
      <Card className="rounded-bl-none rounded-br-xl rounded-tl-none rounded-tr-none md:rounded-br-50">
        <Section id="stories" className="px-4 py-6 lg:p-10">
          <h2
            className={clsx(
              'text-2xl font-black lg:text-4xl',
              headingColorClass
            )}
          >
            {heading}
          </h2>
          <div className="flex flex-col">
            {!!stories &&
              stories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  headingColorClass={headingColorClass}
                />
              ))}
          </div>
        </Section>
      </Card>
    </div>
  );
};
export default Stories;
