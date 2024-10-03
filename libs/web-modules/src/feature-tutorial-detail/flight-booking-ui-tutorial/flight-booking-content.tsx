import React from 'react';

import { CodeWithAccoridions, CodeWithTooltips } from '../code-renderer';
import { Code } from '../content-code-block';
import FlightBookingMdx from './content/main-content.mdx';

export const FlightBookingContent = () => {
  return (
    <FlightBookingMdx
      components={{ CodeWithAccoridions, CodeWithTooltips, Code }}
    />
  );
};
