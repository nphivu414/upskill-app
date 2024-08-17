import { Button, Divider, Spacer } from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';
import { ChevronLeft, Share2 } from 'lucide-react';

import { formatDate } from '../../../utils';
import { FlightHeaderProps } from '../types';

export const FlightHeader = ({
  origin,
  destination,
  cabinClass,
  departureDate,
  handleBack,
  handleShare,
}: FlightHeaderProps) => {
  return (
    <div className="bg-content1">
      <div className="flex flex-1 items-center px-2 pt-2">
        <div className="flex-none">
          <Button isIconOnly variant="light" onPress={handleBack}>
            <ChevronLeft size={14} />
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
            <Share2 size={14} />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
      <Spacer y={2} />
      <Divider />
    </div>
  );
};
