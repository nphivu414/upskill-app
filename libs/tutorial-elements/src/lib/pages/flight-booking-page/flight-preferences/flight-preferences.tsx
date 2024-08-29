import { FlightFilterDrawer } from '../flight-filter-drawer';
import { FlightSortMenu } from '../flight-sort-menu';
import { Flight, FlightFilterFormData } from '../types';

type FlightPreferencesProps = {
  flights: Flight[];
};

export const FlightPreferences = ({ flights }: FlightPreferencesProps) => {
  const airlines = flights.map((flight) => flight.airline);
  const cabinClasses = flights
    .map((flight) => flight.cabinClass)
    .filter((value, index, self) => self.indexOf(value) === index);
  const benefits = flights
    .flatMap((flight) => flight.benefits.map((benefit) => benefit.name))
    .filter((value, index, self) => self.indexOf(value) === index);
  const minFlightPrice = Math.min(...flights.map((flight) => flight.price));
  const maxFlightPrice = Math.max(...flights.map((flight) => flight.price));

  const initialFilterData: FlightFilterFormData = {
    airlines: [],
    departureTimeRange: [0, 23],
    arrivalTimeRange: [0, 23],
    priceRange: [minFlightPrice, maxFlightPrice],
    cabinClasses: [],
    stops: [],
    benefits: [],
  };

  return (
    <div className="bg-content1 border-t-1 border-divider sticky bottom-0 z-10 flex flex-1 items-center justify-between gap-2 p-4">
      <FlightFilterDrawer
        airlines={airlines}
        cabinClasses={cabinClasses}
        benefits={benefits}
        initialFilterData={initialFilterData}
      />
      <FlightSortMenu />
    </div>
  );
};
