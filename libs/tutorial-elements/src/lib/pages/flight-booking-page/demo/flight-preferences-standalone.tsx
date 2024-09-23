'use client';

import { defaultFlights } from '../data';
import { FlightPreferences } from '../flight-preferences';

export const FlightPreferencesStandalone = () => {
  return <FlightPreferences flights={defaultFlights} />;
};
