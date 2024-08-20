import { Image } from '@shared/components';

const Achievements = () => {
  return (
    <div
      id="foodaid-achievements"
      className="grid items-center justify-center gap-y-4 md:grid-cols-3 md:gap-x-4"
    >
      <Image
        src="/images/art/foodaid-achievement-01.webp"
        className="aspect-square rounded-xl"
      />
      <div className="aspect-square">
        <Image
          src="/images/art/foodaid-achievement-02.webp"
          className="mx-auto h-full rounded-xl object-contain"
        />
      </div>
      <Image
        src="/images/art/foodaid-achievement-03.webp"
        className="aspect-square rounded-xl"
      />
    </div>
  );
};
export default Achievements;
