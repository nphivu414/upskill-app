import { z } from 'zod';

export const flightFilterSchema = z.object({
  departureTimeRange: z
    .tuple([z.number().min(0).max(23), z.number().min(0).max(23)])
    .refine(([start, end]) => start <= end, {
      message: 'Departure start time must be before or equal to end time',
    })
    .optional(),
  arrivalTimeRange: z
    .tuple([z.number().min(0).max(23), z.number().min(0).max(23)])
    .refine(([start, end]) => start <= end, {
      message: 'Arrival start time must be before or equal to end time',
    })
    .optional(),
  priceRange: z
    .tuple([z.number().min(0).max(2000), z.number().min(0).max(2000)])
    .refine(([min, max]) => min <= max, {
      message: 'Minimum price must be less than or equal to maximum price',
    })
    .optional(),
  airlines: z.array(z.string()).min(0).max(4).optional(),
  stops: z.enum(['any', 'nonstop', '1stop', '2+stops']).optional(),
  cabinClass: z.enum(['economy', 'premium', 'business', 'first']).optional(),
  isRoundTrip: z.boolean().optional(),
});
