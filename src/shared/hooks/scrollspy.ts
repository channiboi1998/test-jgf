import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds: string[]) => {
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.scrollY || document.documentElement.scrollTop;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionElement = document.getElementById(sectionIds[i]);
        const PIXEL_TOLERANCE = 10;
        const headerElement = document.getElementsByTagName('header')[0];
        if (
          sectionElement &&
          headerElement &&
          sectionElement.offsetTop -
            (headerElement.clientHeight + PIXEL_TOLERANCE) <=
            currentScrollPos
        ) {
          setCurrentSectionId(sectionIds[i]);
          break;
        }
      }
    };

    // Attach the scroll and resize event listener
    window.addEventListener('resize', handleScroll);
    window.addEventListener('scroll', handleScroll);

    // Call the handler initially to set the current section
    setTimeout(() => {
      handleScroll();
    }, 200);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return currentSectionId;
};
