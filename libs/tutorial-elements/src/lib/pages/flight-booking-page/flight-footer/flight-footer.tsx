import { FlightFilterDrawer } from '../flight-filter-drawer';
import { FlightSortMenu } from '../flight-sort-menu';

export const FlightFooter = () => {
  return (
    <div className="bg-content1 border-t-1 border-divider sticky bottom-0 z-10 flex flex-1 items-center justify-between gap-2 p-4">
      <FlightFilterDrawer
        airlines={[
          {
            id: '1',
            name: 'Singapore Airlines',
            logo: 'https://avatar.vercel.sh/singapore-airlines',
          },
          {
            id: '2',
            name: 'American Airlines',
            logo: 'https://avatar.vercel.sh/american-airlines',
          },
          {
            id: '3',
            name: 'Delta Airlines',
            logo: 'https://avatar.vercel.sh/delta-airlines',
          },
          {
            id: '4',
            name: 'United Airlines',
            logo: 'https://avatar.vercel.sh/united-airlines',
          },
        ]}
      />
      <FlightSortMenu />
    </div>
  );
};
