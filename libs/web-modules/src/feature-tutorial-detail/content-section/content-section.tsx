import React from 'react';
import { ComponentWithChildren } from '@upskill-app/types';
import { Heading2 } from '@upskill-app/ui/web';

type ContentSectionProps = {
  introText: string;
} & ComponentWithChildren;

export const ContentSection = ({
  introText,
  children,
}: ContentSectionProps) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div>
            <Heading2>Tutorial Content</Heading2>
            <p className="md:text-xl">{introText}</p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};
