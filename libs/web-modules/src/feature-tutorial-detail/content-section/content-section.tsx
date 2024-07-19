import React from 'react';
import { Heading2 } from '@upskill-app/ui/web';

import { CurriculumSection } from './curriculum-section';

export const ContentSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div>
            <Heading2>Tutorial Content</Heading2>
            <p className="md:text-xl">
              Explore the comprehensive curriculum and dive into the world of
              React.
            </p>
          </div>

          <CurriculumSection />
        </div>
      </div>
    </section>
  );
};
