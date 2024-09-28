'use client';

import React from 'react';
import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { LivePreview } from '@upskill-app/ui/web';
import { useScroll } from 'framer-motion';
import { useTheme } from 'next-themes';

import { defaultSearchFlightParams } from '../data';
import { FlightHeader } from '../flight-header';

export const FlightHeaderPreview = () => {
  const { theme } = useTheme();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(
        TUTORIAL_STORIES.FLIGHT_BOOKING_UI.FLIGHT_HEADER,
        theme
      )}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.FLIGHT_BOOKING_UI,
        'blob/main/src/components/flight-booking/flight-header/flight-header.tsx'
      )}
    >
      <div
        ref={containerRef}
        className="relative max-h-[300px] w-[350px] overflow-y-scroll"
      >
        <FlightHeader
          {...defaultSearchFlightParams}
          sticky
          shouldHideOnScroll
          parentScrollY={scrollYProgress}
          handleBack={() => {
            console.log('Back clicked');
          }}
          handleShare={() => {
            console.log('Share clicked');
          }}
        />
        <div className="flex h-[500px] flex-1 flex-col px-4 pt-4 text-sm">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
          <br />
          <b>[Scroll to see the sticky header]</b>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </LivePreview>
  );
};
