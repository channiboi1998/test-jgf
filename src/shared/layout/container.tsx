import clsx from 'clsx';
import { ReactNode } from 'react';

type Width = 'normal' | 'full';

type ContainerProps = {
  children?: ReactNode;
  sm?: Width;
  md?: Width;
  lg?: Width;
  xl?: Width;
  xxl?: Width;
  xxxl?: Width;
  className?: string;
  id?: string;
};

export const Container = ({
  children,
  sm = 'normal',
  md = 'normal',
  lg = 'normal',
  xl = 'normal',
  xxl = 'normal',
  xxxl = 'normal',
  className = '',
  id
}: ContainerProps) => {
  const buildClass = (): string => {
    let containerClass = '';

    if (xxxl === 'full') {
      containerClass = `${containerClass} xxxl:max-w-full`;
    } else {
      containerClass = `${containerClass} xxxl:mx-auto xxxl:max-w-7xl`;
    }

    if (xxl === 'full') {
      containerClass = `${containerClass} xxl:max-w-full`;
    } else {
      containerClass = `${containerClass} xxl:mx-auto xxl:max-w-6xl`;
    }

    if (xl === 'full') {
      containerClass = `${containerClass} xl:max-w-full`;
    } else {
      containerClass = `${containerClass} xl:mx-auto xl:max-w-5xl`;
    }

    if (lg === 'full') {
      containerClass = `${containerClass} lg:max-w-full`;
    } else {
      containerClass = `${containerClass} lg:mx-auto lg:max-w-4xl`;
    }

    if (md === 'full') {
      containerClass = `${containerClass} md:max-w-full`;
    } else {
      containerClass = `${containerClass} md:mx-auto md:max-w-2xl`;
    }

    if (sm === 'full') {
      containerClass = `${containerClass} max-w-full`;
    } else {
      containerClass = `${containerClass} mx-4`;
    }

    return containerClass.trim();
  };

  return (
    <div id={id} className={clsx(buildClass(), className)}>
      {children}
    </div>
  );
};
