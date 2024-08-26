import { z } from 'zod';

import { flightFilterSchema } from './flight-filter-form/schema';

export interface Benefit {
  id: string;
  title: string;
  icon?: React.ReactNode;
  description?: string;
}

export interface Airline {
  id: string;
  name: string;
  logo: string;
}

export interface Flight {
  id: string;
  origin: string;
  price: number;
  destination: string;
  cabinClass: string;
  departureDate: string;
  airline: Airline;
  aircraftType: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureAirport: string;
  arrivalAirport: string;
  benefits: Benefit[];
  stops: string[];
  isRoundTrip: boolean;
}

export type FlightFilterFormData = z.infer<typeof flightFilterSchema>;
