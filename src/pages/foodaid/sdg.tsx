import { Image } from '@shared/components';

const Sdg = () => (
  <div className="flex flex-col justify-center gap-x-10 gap-y-4 lg:flex-row">
    <div className="flex items-baseline justify-end">
      <Image
        src="/images/sdg/sustainable-development-goals.webp"
        className="mx-auto lg:mx-0"
        width={300}
      />
    </div>
    <div className="grid grid-cols-2 justify-center gap-x-4 lg:flex">
      {[
        '/images/sdg/no-poverty.webp',
        '/images/sdg/sustainable-cities.webp'
      ].map((src, index) => (
        <Image key={index} src={src} className="lg:mx-auto lg:w-27.5" />
      ))}
    </div>
  </div>
);
export default Sdg;
