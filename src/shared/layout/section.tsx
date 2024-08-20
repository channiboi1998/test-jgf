import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

type SectionProps = HTMLAttributes<HTMLDivElement> & {
  id: string;
  className?: string;
  children: ReactNode;
};
export const Section = ({ id, className, children, ...rest }: SectionProps) => {
  return (
    <section
      id={id}
      className={clsx(
        'scroll-m-header lg:scroll-m-header-lg xl:scroll-m-header-xl',
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};
