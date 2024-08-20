import { Image } from '@shared/components';
import { Section } from '@shared/layout';

const BannerImage = () => {
  return (
    <Section id="ar-2023" className="relative w-full">
      <Image
        src="/images/banner/ar-2023-cover.webp"
        className="w-full object-contain object-center"
        alt="Accomplishment Report 2023 Cover"
      />
    </Section>
  );
};
export default BannerImage;
