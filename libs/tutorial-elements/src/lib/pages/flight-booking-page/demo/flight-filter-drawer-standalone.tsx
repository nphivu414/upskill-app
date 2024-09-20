'use client';

import { defaultAirlines, defaultBenefits, defaultCabinClasses } from '../data';
import { FlightFilterDrawer } from '../flight-filter-drawer';

export const FlightFilterDrawerStandalone = () => {
  const props = {
    airlines: defaultAirlines,
    benefits: defaultBenefits,
    cabinClasses: defaultCabinClasses,
    initialFilterData: {
      airlines: [],
      benefits: [],
      cabinClasses: [],
    },
    onFormSubmit: (data: unknown) => {
      alert(JSON.stringify(data, null, 2));
    },
  };
  return <FlightFilterDrawer {...props} />;
};
