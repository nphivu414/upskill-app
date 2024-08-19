import { Button } from '@nextui-org/react';
import { Drawer, DrawerContent, DrawerTrigger } from '@upskill-app/ui/web';
import { ArrowDownNarrowWide, SlidersHorizontal } from 'lucide-react';

import { FlightFilterForm } from './flight-filter-form';

export const FlightFooter = () => {
  return (
    <div className="bg-content1 border-t-1 border-divider sticky bottom-0 z-10 flex flex-1 items-center justify-between gap-2 p-4">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            fullWidth
            variant="bordered"
            size="sm"
            color="primary"
            startContent={<SlidersHorizontal size={14} />}
          >
            Filter
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <FlightFilterForm />
        </DrawerContent>
      </Drawer>
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
