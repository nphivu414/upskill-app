import { Chip } from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';

import { FlightBenefitsProps } from '../types';

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
              <div className="text-muted px-1">{benefit.icon}</div>
            ) : undefined
          }
        >
          <Subtle className="text-xs">{benefit.title}</Subtle>
        </Chip>
      ))}
    </div>
  );
};
