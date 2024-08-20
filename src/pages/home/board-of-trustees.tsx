import { Container, Section } from '@shared/layout';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

type NameAndPositionProps = {
  name: string;
  position: string;
  className?: string;
};
const NameAndPosition = ({
  name,
  position,
  className
}: NameAndPositionProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center rounded xl:whitespace-nowrap',
        className
      )}
    >
      <div className="relative z-0 flex w-fit flex-1 flex-col whitespace-nowrap rounded text-center text-dark-charcoal">
        <p className="font-bold">{name}</p>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
};

const BoardOfTrustees = () => {
  const { t } = useTranslation('home/board-of-trustees');
  return (
    <Section id="board-of-trustees" className="pt-6 lg:pt-14">
      <Container className="flex flex-col">
        <h2 className="rounded-t-xl bg-la-salle-green p-6 text-2xl font-black text-white lg:text-4xl">
          {t('boardOfTrustees')}
        </h2>
        <div className="rounded-b-xl bg-orange-yellow lg:grid lg:grid-cols-7">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8  py-7 lg:col-span-5 lg:col-start-2 lg:grid-cols-3 lg:gap-6 lg:py-10">
            <div className="col-span-1 grid grid-cols-1 lg:col-span-3">
              <NameAndPosition
                name="Tony Tan Caktiong"
                position="Chairman Emeritus"
                className="w-full"
              />
            </div>
            <div className="grid gap-x-6 gap-y-8 lg:col-span-3 lg:grid-cols-7">
              <NameAndPosition
                name="Grace Tan Caktiong"
                position="Chairperson"
                className="col-span-1 lg:col-start-3"
              />
              <NameAndPosition
                name="Ma. Gisela Tiongson"
                position="President"
                className="col-span-1 lg:col-start-5"
              />
            </div>
            <div className="grid gap-x-6 gap-y-8 lg:col-span-3 lg:grid-cols-7">
              <NameAndPosition
                name="William Tan Untiong"
                position="Secretary"
                className="lg:col-start-3"
              />
              <NameAndPosition
                name="Ysmael Baysa"
                position="Treasurer"
                className="lg:col-start-5"
              />
            </div>
            <div className="grid gap-x-6 gap-y-8 lg:col-span-3 lg:grid-cols-7">
              <NameAndPosition
                name="Senen Bacani"
                position="Trustee"
                className="col-span-1 lg:col-start-2"
              />
              <NameAndPosition
                name="Belen Rillo"
                position="Trustee"
                className="col-span-1 lg:col-start-4"
              />
              <NameAndPosition
                name="Joseph Tanbuntiong"
                position="Trustee"
                className="col-span-1 lg:col-start-6"
              />
            </div>
            <div className="grid gap-x-6 gap-y-8 lg:col-span-3 lg:grid-cols-7">
              <NameAndPosition
                name="Carl Brian Tancaktiong"
                position="Trustee"
                className="col-span-1 lg:col-start-2"
              />
              <NameAndPosition
                name="Ernesto Tanmantiong"
                position="Trustee"
                className="col-span-1 lg:col-start-4"
              />
              <NameAndPosition
                name="Cecille Dominguez-Yujuico"
                position="Trustee"
                className="col-span-1 lg:col-start-6"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
export default BoardOfTrustees;
