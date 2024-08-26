import React from 'react';
import { Button } from '@nextui-org/react';
import { ArrowDownNarrowWide } from 'lucide-react';

import { FlightFilterDrawer } from '../flight-filter-drawer';

export const FlightFooter = () => {
  return (
    <div className="bg-content1 border-t-1 border-divider sticky bottom-0 z-10 flex flex-1 items-center justify-between gap-2 p-4">
      <FlightFilterDrawer />
      <Button
        fullWidth
        variant="bordered"
        size="sm"
        color="primary"
        startContent={<ArrowDownNarrowWide size={14} />}
      >
        Sort
      </Button>
    </div>
  );
};
