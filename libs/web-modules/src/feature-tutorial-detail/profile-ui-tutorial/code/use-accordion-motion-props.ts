import { useResponsive } from '@upskill-app/ui/web';
import { HTMLMotionProps } from 'framer-motion';

export const useAccordionMotionProps = ():
  | HTMLMotionProps<'section'>
  | undefined => {
  const { isMobile } = useResponsive();
  return isMobile
    ? {
        variants: {
          enter: {
            opacity: 1,
            height: 'auto',
            transition: {
              opacity: {
                easings: 'ease',
                duration: 0.2,
              },
            },
          },
          exit: {
            opacity: 0,
            height: 0,
            transition: {
              height: {
                duration: 0,
              },
              opacity: {
                easings: 'ease',
                duration: 0.2,
              },
            },
          },
        },
      }
    : undefined;
};
