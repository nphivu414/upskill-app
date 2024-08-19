import { Chip } from '@nextui-org/react';

import { FlightBenefitsProps } from '../types';

export const FlightBenefits = ({ benefits }: FlightBenefitsProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto">
      {benefits.map((benefit) => (
        <Chip
          key={benefit.id}
          size="sm"
          variant="dot"
          className="text-xs"
          startContent={
            benefit.icon ? (
              <div className="px-1">{benefit.icon}</div>
            ) : undefined
          }
        >
          {benefit.title}
        </Chip>
      ))}
    </div>
  );
};
