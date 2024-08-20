import { APP_CONFIG } from '@core/config/app';
import { Image } from '@shared/components';
import { Container, Section } from '@shared/layout';
import { useTranslation } from 'react-i18next';

const LatestAR = () => {
  const { t } = useTranslation(['home/accomplishment-reports', 'globals']);
  const latestReport = APP_CONFIG.annualReports.find((report) => report.latest);

  return (
    <Section id="accomplishment-reports" className="py-10">
      <Container className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-x-14">
        {!!latestReport && (
          <>
            <div>
              <Image
                src={latestReport.thumbnail}
                className="w-full rounded-xl"
              />
            </div>

            <div className="col-span-2 flex flex-col">
              <p className="mb-4 text-center text-2xl font-black text-red lg:text-left lg:text-4xl">
                {t(latestReport.title, { ns: 'globals' })}
              </p>
              <p className="mb-14 text-center text-sm lg:text-left">
                {t('downloadJgfAr')}
              </p>
              <a
                className="rounded-full bg-red p-4 text-center text-white lg:w-1/2"
                href={latestReport.link}
                target="_blank"
                rel="noreferrer"
              >
                {t('downloadPdf')}
              </a>
            </div>
          </>
        )}
      </Container>
    </Section>
  );
};
export default LatestAR;
