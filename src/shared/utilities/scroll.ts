export const scrollToTop = (behavior: ScrollBehavior = 'smooth') =>
  scrollTop(0, behavior);

export const scrollLeft = (el: HTMLElement, left: number | undefined) => {
  el.scrollTo({
    left,
    behavior: 'smooth'
  });
};

export const scrollTop = (top: number, behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top,
    behavior
  });
};

export const getMaxScrollLeft = (el: HTMLElement): number => {
  return el.scrollWidth - el.clientWidth;
};
export const getScrollLeft = (el: HTMLElement): number => {
  return el.scrollLeft;
};

export const getRemainingScrollLeft = (el: HTMLElement): number => {
  return el.scrollWidth - el.clientWidth - el.scrollLeft;
};

export type ScrollBarPosition = 'leftmost' | 'between' | 'rightmost' | 'middle';
export const getScrollBarPosition = (el: HTMLElement): ScrollBarPosition => {
  const PIXEL_TOLERANCE = 1;

  if (el.scrollWidth <= el.clientWidth) {
    return 'middle'; // No scrollbar present
  }

  if (el.scrollLeft <= PIXEL_TOLERANCE) {
    return 'leftmost'; // Scrollbar at the leftmost position
  }

  if (
    Math.abs(el.scrollLeft + el.clientWidth - el.scrollWidth) <= PIXEL_TOLERANCE
  ) {
    return 'rightmost'; // Scrollbar at the rightmost position
  }

  return 'between'; // Scrollbar in a middle position
};
