import { APP_CONFIG } from '@core/config/app';
import { Card } from '@shared/components';
import { useButtonScroller } from '@shared/hooks';
import { ChevronIcon, ImageIcon } from '@shared/icons';
import { Container, Section } from '@shared/layout';
import { Report } from '@shared/models';
import clsx from 'clsx';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

type ReportCardProps = {
  className?: string;
  report: Report;
};
const ReportCard = ({ className, report }: ReportCardProps) => {
  const { t } = useTranslation(['/home/accomplishment-reports', 'globals']);
  return (
    <Card className={clsx('p-4', className)}>
      <figure className="w-full">
        {report.thumbnail ? (
          <img
            src={report.thumbnail}
            className="mb-6 h-52 w-full rounded-xl object-cover object-top"
          />
        ) : (
          <div className="mb-6 flex h-52 w-full items-center justify-center rounded-xl bg-light-silver">
            <ImageIcon />
          </div>
        )}
        <figcaption className="flex flex-col gap-y-6 text-center">
          <p>{t(report.title, { ns: 'globals' })}</p>
          <a
            className="w-full rounded-full bg-carmine-pink p-4 text-white"
            href={report.link}
            target="_blank"
            rel="noreferrer"
          >
            {t('downloadPdf')}
          </a>
        </figcaption>
      </figure>
    </Card>
  );
};

const AccomplishmentReports = () => {
  const { t } = useTranslation('/home/accomplishment-reports');
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);
  const { handleNext, handlePrevious, scrollPosition } =
    useButtonScroller('ar-container');

  return (
    <Section
      id="previous-accomplishment-reports"
      className="lg: bg-cultured py-6 lg:py-14"
    >
      <Container>
        <h2 className="mb-4 text-center text-2xl font-black text-carmine-pink md:text-left md:text-3xl">
          {t('pastAccomplishmentReports')}
        </h2>
        <p className="mb-7">{t('accomplishmentReportsCaption')}</p>

        <div className="relative">
          <button
            className="absolute -left-7 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-70 drop-shadow-lg md:flex"
            aria-label="prev"
            onClick={handlePrevious}
            disabled={scrollPosition === 'leftmost'}
          >
            <ChevronIcon
              className="-rotate-90 scale-150"
              color={scrollPosition === 'leftmost' ? '#CECBCB' : '#D9291C'}
            />
          </button>
          <div
            ref={ref}
            id="ar-container"
            className="flex snap-x snap-mandatory flex-col gap-4 overflow-x-scroll whitespace-nowrap scrollbar-hide md:flex-row md:py-5"
          >
            {APP_CONFIG.annualReports
              .sort((a, b) => b.year - a.year)
              .map((report, index) => (
                <ReportCard
                  key={index}
                  report={report}
                  className="basis-full snap-start md:inline-flex md:shrink-0 md:grow-0 md:basis-[30%]"
                />
              ))}
          </div>
          <button
            className="absolute -right-7 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-70 drop-shadow-lg md:flex"
            aria-label="prev"
            onClick={handleNext}
            disabled={scrollPosition === 'rightmost'}
          >
            <ChevronIcon
              className="rotate-90 scale-150"
              color={scrollPosition === 'rightmost' ? '#CECBCB' : '#D9291C'}
            />
          </button>
        </div>
      </Container>
    </Section>
  );
};
export default AccomplishmentReports;
