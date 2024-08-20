import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useHashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionElement = document.getElementById(
        location.hash.replace('#', '')
      );
      const headerElement = document.getElementsByTagName('header')[0];
      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop - headerElement.offsetHeight,
          behavior: 'instant'
        });
      }
    }
  }, [location]);
};
