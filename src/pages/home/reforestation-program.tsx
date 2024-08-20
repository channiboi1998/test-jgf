import { Image } from '@src/shared/components';
import { Container, Section } from '@src/shared/layout';
import { useTranslation } from 'react-i18next';

const Details = () => {
  const { t } = useTranslation('home/mangrove-reforestation-program');
  return (
    <>
      <p className="whitespace-pre-line font-semibold leading-6 text-dark-charcoal">
        {t(`p_1`)}
      </p>
      <p className="whitespace-pre-line font-semibold leading-6 text-dark-charcoal">
        {t(`p_2`)}
      </p>
      <p className="whitespace-pre-line font-semibold leading-6 text-dark-charcoal">
        {t(`p_3`)}
      </p>
      <p className="whitespace-pre-line font-semibold leading-6 text-dark-charcoal">
        {t(`p_4`)}
      </p>
      <p className="whitespace-pre-line font-semibold leading-6 text-dark-charcoal">
        {t(`p_5`)}
      </p>
      <p className="whitespace-pre-line font-semibold leading-6 text-dark-charcoal">
        {t(`p_6`)}
      </p>
      <p className="whitespace-pre-line font-semibold leading-6 text-dark-charcoal">
        {t(`p_7`)}
      </p>
    </>
  );
};

const ReforestationProgramImage = () => {
  return (
    <Image
      src="/images/people/mangrove-reforestation-program.webp"
      className="mx-auto w-full rounded-br-50 rounded-tl-50"
    />
  );
};

const ReforestationProgram = () => {
  const { t } = useTranslation('home/mangrove-reforestation-program');
  return (
    <Section id="mangrove" className="bg-white py-6 md:py-10">
      <Container className="flex flex-col gap-4">
        <h2 className="text-left text-2xl font-black text-dark-charcoal md:text-left lg:text-3xl">
          {t('heading')}
        </h2>
        <div>
          <ReforestationProgramImage />
          <div className="flex flex-col gap-y-4 rounded-b-xl lg:bg-white lg:p-6">
            <Details />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ReforestationProgram;
