import clsx from 'clsx';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export const styles = {
  primary:
    'bg-orange-yellow px-6 py-4 font-bold text-sm h-max text-dark-charcoal rounded-full',
  secondary:
    'bg-white px-6 py-4 font-bold text-base text-dark-charcoal rounded-full',
  tertiary: 'px-6 py-4 font-bold text-base text-dark-charcoal',
  icon: 'rounded-lg border p-4 rounded-none border-0',
  link: 'border-0 border-none p-0 font-semibold text-persian-red text-xs',
  light: 'border-0 border-none font-semibold',
  unstyled: ''
};

export type ButtonType = keyof typeof styles;

export type ButtonProps = ButtonHTMLAttributes<unknown> &
  AnchorHTMLAttributes<unknown> & {
    variant?: ButtonType;
    children?: ReactNode;
    as?: 'button' | 'a';
  };

export const Button = ({
  children,
  variant = 'primary',
  as = 'button',
  className,
  ...rest
}: ButtonProps) => {
  const As = as;
  return (
    <As
      {...rest}
      className={clsx('cursor-pointer text-center', styles[variant], className)}
    >
      {children}
    </As>
  );
};
