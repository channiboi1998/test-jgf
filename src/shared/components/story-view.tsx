import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronIcon } from '../icons';
import { Story } from '../models/app-config';
import { toKebabCase } from '../utilities/string';
import { Button } from './button';
import { Image } from './image';

type StoryImageProps = {
  thumbnail: string;
  credits?: string;
  twBgColorClass?: string;
  twTextColorClass?: string;
  position?: Story['thumbnail']['position'];
};
export const StoryImage = ({
  twTextColorClass,
  thumbnail,
  position,
  credits
}: StoryImageProps) => {
  return (
    <div
      className={clsx('relative float-none mb-8 block', {
        'lg:float-right lg:ml-4': position === 'right',
        'lg:float-left lg:mr-4': position === 'left'
      })}
    >
      <Image
        src={thumbnail}
        className={clsx(
          'rounded-br-20 rounded-tl-20 lg:h-64',
          position === 'center' && '!h-auto w-full object-cover'
        )}
      />
      {credits && (
        <p
          className={clsx(
            'max-w-1/2 right-01 absolute bottom-2 right-2 rounded-lg bg-gainsboro bg-opacity-60 p-2 text-sm font-bold italic text-white',
            !twTextColorClass ? 'text-white' : twTextColorClass
          )}
        >
          {credits}
        </p>
      )}
    </div>
  );
};

type StoryViewProps = {
  story: Story;
  twTextColorClass: string;
  twBorderColorClass: string;
  viewMoreIconHexColor: string;
};
export const StoryView = ({
  story,
  twTextColorClass,
  twBorderColorClass,
  viewMoreIconHexColor
}: StoryViewProps) => {
  const { t } = useTranslation('globals');
  const [viewAll, setViewAll] = useState(true);
  return (
    <div
      id={toKebabCase(story.title)}
      className={clsx(
        'flex h-fit flex-col rounded-br-30 rounded-tl-30 border-3 px-6 py-6 lg:py-8',
        twBorderColorClass
      )}
    >
      <p className={clsx('mb-6 text-2xl font-black', twTextColorClass)}>
        {story.title}
      </p>
      <div>
        <StoryImage
          thumbnail={story.thumbnail.src}
          position={story.thumbnail.position}
          credits={story.thumbnail.credits?.text}
          twTextColorClass={story.thumbnail.credits?.twTextColorClass}
        />
        <p
          className={clsx('whitespace-pre-line', { 'line-clamp-10': !viewAll })}
          dangerouslySetInnerHTML={{
            __html: story.preview.concat(story.followup)
          }}
        ></p>
        <Button
          variant="unstyled"
          className={clsx(
            'mt-2 flex items-center gap-x-1 text-sm font-black uppercase',
            twTextColorClass
          )}
          onClick={() => setViewAll(!viewAll)}
        >
          {t(!viewAll ? 'viewMore' : 'viewLess')}
          <span
            className={clsx(
              'transition-transform',
              !viewAll ? 'rotate-90' : 'rotate-0'
            )}
          >
            <ChevronIcon
              color={viewMoreIconHexColor}
              className="!fill-orange"
            />
          </span>
        </Button>
      </div>
    </div>
  );
};
