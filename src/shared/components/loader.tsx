import { LoadingIcon } from '../icons';

export const Loader = () => {
  return (
    <div className="mb-52 mt-20 flex h-full w-full items-start justify-center">
      <div role="status" className="absolute">
        <LoadingIcon />
      </div>
    </div>
  );
};
