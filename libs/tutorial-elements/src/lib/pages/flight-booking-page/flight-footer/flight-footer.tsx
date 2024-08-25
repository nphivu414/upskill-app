import React from 'react';
import { Button } from '@nextui-org/react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@upskill-app/ui/web';
import { ArrowDownNarrowWide, SlidersHorizontal } from 'lucide-react';

import { FlightFooterProps } from '../types';
import { FlightFilterForm } from './flight-filter-form';

export const FlightFooter = ({ portalContainer }: FlightFooterProps) => {
  return (
    <div className="bg-content1 border-t-1 border-divider sticky bottom-0 z-10 flex flex-1 items-center justify-between gap-2 p-4">
      <Drawer shouldScaleBackground setBackgroundColorOnScale>
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
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
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
