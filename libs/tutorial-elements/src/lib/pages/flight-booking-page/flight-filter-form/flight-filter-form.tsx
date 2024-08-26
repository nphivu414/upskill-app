import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/react';
import { DrawerFooter } from '@upskill-app/ui/web';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Airline, FlightFilterFormData } from '../types';
import { AirlineSelector } from './airline-selector';
import { PriceRangeSlider } from './price-range-slider';
import { flightFilterSchema } from './schema';
import { TimeRangeSlider } from './time-range-slider';

type FlightFilterFormProps = {
  initialData: FlightFilterFormData;
  airlines: Airline[];
  onSubmit: (data: FlightFilterFormData) => void;
};

export const defaultFlightFilterValues: FlightFilterFormData = {
  departureTimeRange: undefined,
  arrivalTimeRange: undefined,
  priceRange: undefined,
  airlines: undefined,
  stops: 'any',
  cabinClass: 'economy',
  isRoundTrip: false,
};

export const FlightFilterForm = ({
  airlines,
  initialData,
  onSubmit,
}: FlightFilterFormProps) => {
  const formReturns = useForm<FlightFilterFormData>({
    defaultValues: defaultFlightFilterValues,
    mode: 'onChange',
    resolver: zodResolver(flightFilterSchema),
  });

  const { reset, handleSubmit } = formReturns;

  const minPrice = initialData.priceRange?.[0];
  const maxPrice = initialData.priceRange?.[1];
  const minDepartureTime = initialData.departureTimeRange?.[0];
  const maxDepartureTime = initialData.departureTimeRange?.[1];
  const minArrivalTime = initialData.arrivalTimeRange?.[0];
  const maxArrivalTime = initialData.arrivalTimeRange?.[1];

  React.useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);

  const handleOnSubmit: SubmitHandler<FlightFilterFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...formReturns}>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="flex flex-col gap-6 px-4">
          <PriceRangeSlider minValue={minPrice} maxValue={maxPrice} />
          <TimeRangeSlider
            name="departureTimeRange"
            label="Departure Time"
            minValue={minDepartureTime}
            maxValue={maxDepartureTime}
          />
          <TimeRangeSlider
            name="arrivalTimeRange"
            label="Arrival Time"
            minValue={minArrivalTime}
            maxValue={maxArrivalTime}
          />
          <AirlineSelector data={airlines} />
        </div>
        <DrawerFooter className="bg-content1 sticky bottom-0 mt-2 px-4 py-2">
          <Button type="submit" color="primary" fullWidth>
            Save
          </Button>
        </DrawerFooter>
      </form>
    </FormProvider>
  );
};
