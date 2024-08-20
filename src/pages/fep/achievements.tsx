import { Section } from '@shared/layout';

export const Achievements = () => (
  <Section id="fep-achievements">
    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4 md:gap-x-4 lg:gap-x-16">
      <img src="/images/art/fep-achievement-01.webp" className="w-full" />
      <img src="/images/art/fep-achievement-02.webp" className="w-full" />
      <img src="/images/art/fep-achievement-03.webp" className="w-full" />
    </div>
  </Section>
);
