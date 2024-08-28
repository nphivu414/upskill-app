import { Chip } from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';

import { Flight } from '../types';
import { getBenefitIcon } from '../utils';

export type FlightBenefitsProps = Pick<Flight, 'benefits'>;

export const FlightBenefits = ({ benefits }: FlightBenefitsProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto">
      {benefits.map((benefit) => (
        <Chip
          key={benefit.id}
          size="sm"
          variant="dot"
          className="text-muted"
          startContent={
            benefit.icon ? (
              <div className="text-muted mx-1">
                {getBenefitIcon(benefit.icon, 12)}
              </div>
            ) : null
          }
        >
          <Subtle className="text-xs">{benefit.title}</Subtle>
        </Chip>
      ))}
    </div>
  );
};
