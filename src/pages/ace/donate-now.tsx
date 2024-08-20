import { Image } from '@shared/components';
import { Section } from '@shared/layout';
import { Trans, useTranslation } from 'react-i18next';

const DonateNow = () => {
  const { t } = useTranslation('ace/index');
  return (
    <Section
      id="ace-donate-now"
      className="items flex flex-col gap-x-14 gap-y-4 lg:flex-row"
    >
      <div className="flex flex-col gap-y-4 lg:w-2/3">
        <p className="text-2xl font-black text-teal">
          {t('scholarshipCoinBank')}
        </p>
        <div className="my-auto rounded-bl-50 rounded-tr-50 bg-orange-yellow p-4 text-center lg:p-6 lg:text-left">
          <p className="whitespace-pre-line">
            <Trans
              key="coinBankDescription"
              defaults={`${t('coinBankDescription')}`}
              components={{ b: <b /> }}
            />
          </p>
        </div>
      </div>
      <div className="shrink-0 lg:w-1/3">
        <Image src="/images/art/ace-coinbank-poster.webp" className="w-full" />
      </div>
    </Section>
  );
};
export default DonateNow;
