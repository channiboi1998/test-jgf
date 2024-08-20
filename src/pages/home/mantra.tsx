import { Card, CardProps } from '@shared/components';
import { BottomWaveDivider } from '@shared/icons';
import { Container, Section } from '@shared/layout';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

type ItemProps = CardProps & {
  heading: string;
  description: string;
};
const Item = ({ className, heading, description }: ItemProps) => {
  return (
    <Card
      className={clsx(
        'flex flex-col gap-y-4 rounded-bl-none rounded-br-20 rounded-tl-20 rounded-tr-none border-t-16',
        className
      )}
    >
      <h3 className="text-2xl font-black">{heading}</h3>
      <p className="leading-6">{description}</p>
    </Card>
  );
};

const Mantra = () => {
  const { t } = useTranslation('home/mantra');
  return (
    <>
      <Section id="mantra" className="bg-strawberry pb-4 pt-6 md:pt-16">
        <Container className="flex flex-wrap gap-6">
          <Item
            className="border-vivid-orange-peel p-4 md:flex-1"
            heading={t('vision.heading')}
            description={t('vision.description')}
          />
          <Item
            className="border-vivid-orange-peel p-4 md:flex-1"
            heading={t('mission.heading')}
            description={t('mission.description')}
          />
          <Item
            className="w-full border-vivid-orange-peel p-4"
            heading={t('values.heading')}
            description={t('values.description')}
          />
        </Container>
      </Section>
      <div className="wave-divider">
        <BottomWaveDivider fill="#EB3E40" />
      </div>
    </>
  );
};
export default Mantra;
