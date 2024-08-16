import { Button, Spacer } from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';
import { ChevronLeft, Ellipsis } from 'lucide-react';

import { formatDate } from '../../../utils';

interface FlightHeaderProps {
  origin: string;
  destination: string;
  cabinClass: string;
  departureDate: string;
}

export const FlightHeader = ({
  origin,
  destination,
  cabinClass,
  departureDate,
}: FlightHeaderProps) => {
  return (
    <div className="flex flex-1 items-center px-4">
      <div className="flex-none">
        <Button isIconOnly variant="ghost">
          <ChevronLeft size={14} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex items-center justify-around gap-2 font-semibold">
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
          <Subtle>{cabinClass}</Subtle>
          <Subtle>•</Subtle>
          <Subtle>{formatDate(departureDate)}</Subtle>
        </div>
      </div>
      <div className="flex-none">
        <Button isIconOnly variant="ghost">
          <Ellipsis size={14} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
};
