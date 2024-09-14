import { CodeWithTabs } from '../code-renderer';
import { Code } from '../content-code-block';
import { StepConfig } from '../types';
import FlightBookingPageCodeContent from './content/flight-booking-page.mdx';
import FlightCardCodeContent from './content/flight-card.mdx';
import FlightFilterDrawerCodeContent from './content/flight-filter-drawer.mdx';
import FlightFilterFormCodeContent from './content/flight-filter-form.mdx';
import FlightHeaderCodeContent from './content/flight-header.mdx';
import FlightListCodeContent from './content/flight-list.mdx';
import FlightPreferencesCodeContent from './content/flight-preferences.mdx';
import FlightSortMenuCodeContent from './content/flight-sort-menu.mdx';
import IntroContent from './content/intro-content.mdx';

const codeContentProps = {
  components: { CodeWithTabs, Code },
};

export const steps: StepConfig[] = [
  {
    index: 0,
    content: <IntroContent {...codeContentProps} />,
  },
  {
    index: 1,
    content: <FlightHeaderCodeContent {...codeContentProps} />,
  },
  {
    index: 2,
    content: <FlightCardCodeContent {...codeContentProps} />,
  },
  {
    index: 3,
    content: <FlightListCodeContent {...codeContentProps} />,
  },
  {
    index: 4,
    content: <FlightFilterFormCodeContent {...codeContentProps} />,
  },
  {
    index: 5,
    content: <FlightFilterDrawerCodeContent {...codeContentProps} />,
  },
  {
    index: 6,
    content: <FlightSortMenuCodeContent {...codeContentProps} />,
  },
  {
    index: 7,
    content: <FlightPreferencesCodeContent {...codeContentProps} />,
  },
  {
    index: 8,
    content: <FlightBookingPageCodeContent {...codeContentProps} />,
  },
];
