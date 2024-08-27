import { BenefitEnum, StopEnum } from './types';

export const HEADER_HEIGHT = 60;
export const HEADER_TRANSITION_DURATION = 0.3;
export const CABIN_CLASS_MAPPING = {
  economy: 'Economy',
  premium: 'Premium Economy',
  business: 'Business Class',
  first: 'First Class',
};
export const STOP_MAPPING: Record<StopEnum, string> = {
  any: 'Any',
  nonstop: 'Nonstop',
  '1stop': '1 Stop',
  '2+stops': '2+ Stops',
};
export const BENEFIT_MAPPING: Record<BenefitEnum, string> = {
  meal: 'Meal Included',
  baggage: 'Baggage Included',
  entertainment: 'In-flight Entertainment',
  wifi: 'Wi-Fi',
};
