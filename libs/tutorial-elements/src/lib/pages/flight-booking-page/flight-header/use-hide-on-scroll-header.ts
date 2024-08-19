import React from 'react';
import { HTMLMotionProps, MotionValue } from 'framer-motion';

import { HEADER_HEIGHT, HEADER_TRANSITION_DURATION } from '../constants';

export const useHideOnScrollHeader = (
  parentScrollY: MotionValue<number>,
  shouldHideOnScroll?: boolean
): HTMLMotionProps<'div'> => {
  const [showHeader, setShowHeader] = React.useState(true);
  const lastScrollYRef = React.useRef(0);

  React.useEffect(() => {
    if (!shouldHideOnScroll) return;

    const unsubscribe = parentScrollY.on('change', (latest) => {
      if (latest < 0 || latest > 1) {
        return;
      }

      if (latest > lastScrollYRef.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollYRef.current = latest;
    });

    return () => unsubscribe();
  }, [parentScrollY, shouldHideOnScroll]);

  if (!shouldHideOnScroll) {
    return {};
  }

  return {
    initial: { y: -HEADER_HEIGHT },
    animate: { y: showHeader ? 0 : -HEADER_HEIGHT },
    transition: { duration: HEADER_TRANSITION_DURATION },
  };
};
