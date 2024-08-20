import { Image } from '@shared/components';
import { Section } from '@shared/layout';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type ChannelProps = {
  heading: ReactNode;
  content: ReactNode;
};
const Channel = ({ heading, content }: ChannelProps) => {
  return (
    <div className="space-y-4 rounded-br-50 rounded-tl-50 bg-white p-6">
      {heading}
      <div className="border-t border-gainsboro" />
      {content}
    </div>
  );
};

const DonationChannels = () => {
  const { t } = useTranslation('ace/index');
  return (
    <Section
      id="ace-donation-channels"
      className="space-y-4 rounded-br-50 rounded-tl-50 bg-teal p-6 lg:p-8"
    >
      <p className="text-2xl font-black text-white">{t('donate')}</p>
      <div className="grid gap-y-4 lg:grid-cols-4 lg:gap-x-8">
        <Channel
          heading={
            <p className="text-2xl font-black text-red">
              {t('donationChannel.bankTransfer.title')}
            </p>
          }
          content={
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold">
                  {t('donationChannel.bankTransfer.accountName')}
                </p>
                <p>{t('donationChannel.bankTransfer.accountNameValue')}</p>
              </div>
              <div>
                <p className="font-bold">
                  {t('donationChannel.bankTransfer.bank.metrobank.label')}
                </p>
                <p>
                  {t(
                    'donationChannel.bankTransfer.bank.metrobank.accountNumber'
                  )}
                </p>
                <p>
                  {t('donationChannel.bankTransfer.bank.metrobank.swiftCode')}
                </p>
              </div>
              <div>
                <p className="font-bold">
                  {t('donationChannel.bankTransfer.bank.rcbc.label')}
                </p>
                <p>
                  {t('donationChannel.bankTransfer.bank.rcbc.accountNumber')}
                </p>
              </div>
            </div>
          }
        />
        <Channel
          heading={
            <p className="text-2xl font-black text-green-pantone">
              {t('donationChannel.maya.title')}
            </p>
          }
          content={
            <div className="space-y-4 text-center">
              <p className="text-sm">{t('donationChannel.maya.scan')}</p>
              <Image src="/images/branding/maya-qr.webp" className="mx-auto" />
            </div>
          }
        />
        <Channel
          heading={
            <p className="text-2xl font-black text-blue">
              {t('donationChannel.gcash.title')}
            </p>
          }
          content={
            <div className="space-y-4 text-center">
              <p className="text-sm">{t('donationChannel.gcash.scan')}</p>
              <Image src="/images/branding/gcash-qr.webp" className="mx-auto" />
            </div>
          }
        />
        <Channel
          heading={
            <p className="text-2xl font-black text-green-pantone">
              {t('donationChannel.grabRewards.title')}
            </p>
          }
          content={
            <div className="space-y-4">
              <p className="text-sm">
                {t('donationChannel.grabRewards.donate')}
              </p>
              <ul className="space-y-4 text-sm">
                <li>{t('donationChannel.grabRewards.point.50')}</li>
                <li>{t('donationChannel.grabRewards.point.200')}</li>
              </ul>
            </div>
          }
        />
      </div>
      <p className="text-xs text-white">DSWD-SB-SP-00035-2022</p>
    </Section>
  );
};
export default DonationChannels;
