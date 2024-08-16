import { Button } from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';
import { ChevronLeft, Ellipsis } from 'lucide-react';

interface FlightHeaderProps {
  origin: string;
  destination: string;
  cabinClass: string;
  departureDate: string; // Assuming you have the date in a suitable format
}

export const FlightHeader = ({
  origin,
  destination,
  cabinClass,
  departureDate,
}: FlightHeaderProps) => {
  return (
    <div className="flex flex-1 px-4">
      <Button isIconOnly variant="ghost">
        <ChevronLeft size={14} />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <div className="flex grow flex-col items-center justify-center">
        <div className="flex items-center justify-around gap-4 font-semibold">
          <span>{origin}</span>
          <span>→</span>
          <span>{destination}</span>
        </div>
        <div className="flex items-center justify-around gap-4">
          <Subtle>{cabinClass}</Subtle>
          <Subtle>{departureDate}</Subtle>
        </div>
      </div>
      <Button isIconOnly variant="ghost">
        <Ellipsis size={14} />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};
