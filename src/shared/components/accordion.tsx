import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { ChevronIcon } from '../icons';

type AccordionProps = {
  title: ReactNode;
  children: ReactNode;
  buttonClass?: string;
  panelClass?: string;
  iconColor?: string;
  onClick?: () => void;
};

export const Accordion = ({
  title,
  children,
  buttonClass,
  panelClass,
  iconColor,
  onClick
}: AccordionProps) => {
  return (
    <Disclosure>
      <Disclosure.Button
        onClick={onClick}
        aria-label="show-hide-panel-button"
        className={clsx(
          'border-platinum flex w-full justify-between rounded-none border-x-0 border-b-0 border-t p-4 text-left',
          buttonClass
        )}
      >
        {({ open }) => (
          <>
            <span className="font-semibold">{title}</span>
            <span>
              <ChevronIcon
                color={iconColor}
                className={clsx('transform transition-all', {
                  'rotate-180': open,
                  'rotate-0': !open
                })}
              />
            </span>
          </>
        )}
      </Disclosure.Button>
      <Disclosure.Panel className={clsx('pl-4', panelClass)}>
        {children}
      </Disclosure.Panel>
    </Disclosure>
  );
};
