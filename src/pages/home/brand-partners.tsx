import { Image } from '@shared/components';
import { Container, Section } from '@shared/layout';

const BrandPartners = () => {
  return (
    <Section id="brand-partners" className="py-6 lg:py-14">
      <Container className="flex flex-col justify-center gap-y-4">
        <div id="jfc-logo">
          {/** TODO: Should not use fix width for lighthouse */}
          <Image
            src="/images/branding/jfc-logo.webp"
            className="mx-auto"
            width={345}
          />
        </div>
        <div id="partner-logos" className="flex justify-center gap-8">
          <Image
            src="/images/branding/brand-partners.webp"
            className="scale-125"
          />
        </div>
      </Container>
    </Section>
  );
};
export default BrandPartners;
