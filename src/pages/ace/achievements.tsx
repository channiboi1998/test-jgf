import { Section } from '@shared/layout';

const Achievements = () => {
  return (
    <Section id="ace-achievements">
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-x-4 lg:gap-x-16">
        <img src="/images/art/ace-achievement-01.webp" className="w-full" />
        <img src="/images/art/ace-achievement-02.webp" className="w-full" />
        <img src="/images/art/ace-achievement-03.webp" className="w-full" />
      </div>
    </Section>
  );
};
export default Achievements;
