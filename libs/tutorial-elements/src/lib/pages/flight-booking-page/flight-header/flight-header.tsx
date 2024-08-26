import React from 'react';
import { Button, cn, Spacer } from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';
import { motion, MotionValue } from 'framer-motion';
import { ChevronLeft, Share2 } from 'lucide-react';

import { formatDate } from '../../../utils';
import { Flight } from '../types';
import { useHideOnScrollHeader } from './use-hide-on-scroll-header';

type FlightHeaderProps = {
  sticky?: boolean;
  shouldHideOnScroll?: boolean;
  parentScrollY: MotionValue<number>;
  handleBack: () => void;
  handleShare: () => void;
} & Pick<Flight, 'origin' | 'destination' | 'cabinClass' | 'departureDate'>;

export const FlightHeader = ({
  origin,
  destination,
  cabinClass,
  departureDate,
  handleBack,
  handleShare,
  sticky,
  shouldHideOnScroll,
  parentScrollY,
}: FlightHeaderProps) => {
  const motionsProps = useHideOnScrollHeader(parentScrollY, shouldHideOnScroll);

  return (
    <motion.div
      {...motionsProps}
      className={cn('bg-content1 shadow-md', {
        'sticky top-0 z-50': sticky,
      })}
    >
      <div className="flex flex-1 items-center px-2 pt-2">
        <div className="flex-none">
          <Button isIconOnly variant="light" onPress={handleBack}>
            <ChevronLeft size={16} />
            <span className="sr-only">Back</span>
          </Button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex items-center justify-around gap-2 text-sm font-semibold">
            <span className="max-w-[100px] overflow-x-hidden truncate whitespace-nowrap text-wrap">
              {origin}
            </span>
            <span className="text-muted">⟶</span>
            <span className="max-w-[100px] overflow-x-hidden truncate whitespace-nowrap text-wrap">
              {destination}
            </span>
          </div>
          <Spacer y={0.5} />
          <div className="flex items-center justify-around gap-1">
            <Subtle className="text-xs">{cabinClass}</Subtle>
            <Subtle className="text-xs">•</Subtle>
            <Subtle className="text-xs">{formatDate(departureDate)}</Subtle>
          </div>
        </div>
        <div className="flex-none">
          <Button isIconOnly variant="light" onPress={handleShare}>
            <Share2 size={16} />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
      <Spacer y={2} />
    </motion.div>
  );
};
