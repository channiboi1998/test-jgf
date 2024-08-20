import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, className }: CardProps) => (
  <div className={clsx('rounded-xl bg-white shadow-card', className)}>
    {children}
  </div>
);
