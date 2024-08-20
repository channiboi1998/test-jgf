import clsx from 'clsx';

type CoverPhotoProps = {
  imageSrc: string;
  className?: string;
  twBorderColorClass?: string;
};
const CoverPhoto = ({ className, imageSrc }: CoverPhotoProps) => {
  return (
    <div className={clsx('relative w-full', className)}>
      <img
        src={imageSrc}
        className="relative w-full rounded-br-50 rounded-tl-50"
      />
    </div>
  );
};
export default CoverPhoto;
