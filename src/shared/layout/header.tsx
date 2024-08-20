import { APP_CONFIG } from '@core/config/app';
import { Popover, Transition } from '@headlessui/react';
import { Accordion, BrandLogo } from '@shared/components';
import { useScrollSpy } from '@shared/hooks';
import { MenuIcon } from '@shared/icons';
import { Container } from '@shared/layout';
import clsx from 'clsx';
import { Fragment, MouseEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DesktopMenu = () => {
  const { t } = useTranslation('globals');
  const [isShowing, setIsShowing] = useState(false);
  const focusedSectionId = useScrollSpy(
    APP_CONFIG.navItems.map((navItem) => navItem.id)
  );

  const onLinkClick = (e: MouseEvent, sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView(true);
    }
  };

  return (
    <div className="hidden gap-x-9 lg:flex">
      <ul className="flex items-center gap-x-7">
        {APP_CONFIG.navItems.map((link, index) =>
          !Array.isArray(link.children) ? (
            <li key={index}>
              <Link
                to={link.path}
                className={clsx(
                  'bg whitespace-nowrap text-sm font-black transition-all',
                  {
                    'rounded-full bg-orange-yellow px-2 py-1':
                      link.id === focusedSectionId
                  }
                )}
                onClick={(e) => onLinkClick(e, link.id)}
              >
                {t(link.name)}
              </Link>
            </li>
          ) : (
            <li
              key={index}
              onMouseEnter={() => setIsShowing(true)}
              onMouseLeave={() => setIsShowing(false)}
            >
              <Popover className="relative">
                <Popover.Button
                  className="text-sm font-black"
                  onClick={(e) => {
                    onLinkClick(e, link.id);
                  }}
                >
                  {t(link.name)}
                </Popover.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                  show={isShowing}
                  onMouseEnter={() => setIsShowing(true)}
                  onMouseLeave={() => setIsShowing(false)}
                >
                  <Popover.Panel className="absolute w-max min-w-max rounded-xl bg-white p-4 text-sm font-semibold shadow-card">
                    <ul>
                      {!!link.children?.length &&
                        link.children.map((link, index) => (
                          <li key={index}>
                            <Link
                              onClick={(e) => {
                                onLinkClick(e, link.id);
                              }}
                              className="block py-4 text-sm font-semibold"
                              to={link.path}
                            >
                              {t(link.name)}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

const MobileMenu = ({ isOpen = false }: { isOpen: boolean }) => {
  const { t } = useTranslation('globals');
  return (
    <Transition
      as={Fragment}
      show={isOpen}
      enter="transition ease-in-out duration-500 transform"
      enterFrom="-translate-y-[1000px] opacity-0"
      enterTo="translate-y-[0] opacity-100"
      leave="transition ease-in-out duration-500 transform"
      leaveFrom="translate-y-[0] opacity-100"
      leaveTo="-translate-y-[1000px] opacity-0"
    >
      <ul className="fixed left-0 z-10 w-screen translate-x-0 bg-white px-6 drop-shadow-lg">
        {APP_CONFIG.navItems.map((link, index) =>
          !Array.isArray(link.children) ? (
            <li
              className="border-b border-cultured last-of-type:border-0"
              key={index}
            >
              <Link className="flex py-4 text-sm font-bold" to={link.path}>
                {t(link.name)}
              </Link>
            </li>
          ) : (
            <Accordion
              buttonClass="pl-0 !border-b-[0.15px] border-t-0 border-white"
              key={index}
              title={link.name}
            >
              <ul>
                {link.children.map((link, index) => (
                  <li
                    className="border-b-[0.15px] border-white last-of-type:border-0"
                    key={index}
                  >
                    <Link
                      className="block py-3 text-sm font-semibold"
                      to={link.path}
                    >
                      {t(link.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion>
          )
        )}
      </ul>
    </Transition>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    ['resize', 'scroll'].forEach((type) => {
      window.addEventListener(type, () => setIsOpen(false));
    });
  }, []);

  return (
    <>
      <header className="sticky top-0 z-20 w-full bg-white shadow-header transition-all">
        <Container
          id="header-nav"
          md="full"
          lg="full"
          className="flex !items-center justify-between gap-x-4 py-4 transition-all"
        >
          <BrandLogo className="w-32 shrink-0 md:w-52" />
          <DesktopMenu />
          <button
            className="p-4 pr-0 lg:hidden"
            aria-label="menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </button>
        </Container>
      </header>
      <MobileMenu isOpen={isOpen} />
    </>
  );
};
