import { useEffect, useState } from 'react';
import {
  ScrollBarPosition,
  getScrollBarPosition,
  scrollLeft
} from '../utilities/scroll';

export const useButtonScroller = (containerId: string) => {
  const [containerElement, setContainerElement] = useState({} as HTMLElement);
  const [scrollPosition, setScrollPosition] =
    useState<ScrollBarPosition>('leftmost');

  const getScrollLeft = (): number => {
    return containerElement.firstElementChild?.scrollWidth || 0;
  };

  const handlePrevious = () =>
    scrollLeft(containerElement, containerElement.scrollLeft - getScrollLeft());

  const handleNext = () =>
    scrollLeft(containerElement, containerElement.scrollLeft + getScrollLeft());

  useEffect(() => {
    const el = document.getElementById(containerId);
    if (el) {
      setContainerElement(el);
      el.addEventListener('scroll', (e) => {
        const element = e.currentTarget as HTMLDivElement;
        setScrollPosition(getScrollBarPosition(element));
      });
    }
  }, []);

  return {
    handlePrevious,
    handleNext,
    scrollPosition
  };
};
