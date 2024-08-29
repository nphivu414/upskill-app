import { z } from 'zod';

import {
  benefitSchema,
  cabinClassSchema,
  flightFilterSchema,
  stopSchema,
} from './flight-filter-form/schema';

export interface Benefit {
  id: string;
  name: BenefitEnum;
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
  cabinClass: CabinClassEnum;
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
export type StopEnum = z.infer<typeof stopSchema>;
export type BenefitEnum = z.infer<typeof benefitSchema>;
export type CabinClassEnum = z.infer<typeof cabinClassSchema>;

export type SearchFlightParams = {
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  cabinClass: string;
};
