import { Button, Spacer } from '@nextui-org/react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@upskill-app/ui/web';
import { SlidersHorizontal } from 'lucide-react';

import { FlightFilterForm } from '../flight-filter-form';
import { Airline, FlightFilterFormData } from '../types';

type FlightFilterDrawerProps = {
  airlines: Airline[];
};

export const FlightFilterDrawer = ({ airlines }: FlightFilterDrawerProps) => {
  const handleSubmit = (data: FlightFilterFormData) => {
    console.log('🚀 ~ handleSubmit ~ data:', data);
  };

  return (
    <Drawer shouldScaleBackground closeThreshold={200}>
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
      <DrawerContent className="max-h-[90%]">
        <div className="overflow-auto">
          <DrawerHeader>
            <DrawerTitle>Filter</DrawerTitle>
            <DrawerDescription>
              See flights that match your preferences.
            </DrawerDescription>
          </DrawerHeader>
          <Spacer y={4} />
          <FlightFilterForm
            airlines={airlines}
            initialData={{
              airlines: [],
              arrivalTimeRange: [0, 23],
              cabinClass: 'economy',
              departureTimeRange: [0, 23],
              isRoundTrip: false,
              priceRange: [0, 1000],
              stops: 'any',
            }}
            onSubmit={handleSubmit}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
