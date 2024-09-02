import { CodeWithTabs } from '../code-renderer';
import { Code } from '../content-code-block';
import { StepConfig } from '../types';
import FlightCardCodeContent from './content/flight-card.mdx';
import FlightHeaderCodeContent from './content/flight-header.mdx';
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
];
