'use client';

import React from 'react';
import { Button } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/types';
import { Heading2, Subtle } from '@upskill-app/ui/web';
import { Minus, Plus } from 'lucide-react';

import { useContentAccordion } from './stores';

type ContentSectionProps = {
  introText: string;
} & ComponentWithChildren;

export const ContentSection = ({
  introText,
  children,
}: ContentSectionProps) => {
  const { collapseAll, expandAll } = useContentAccordion();
  const [toggleExpand, setToggleExpand] = React.useState(false);

  const handleToggleExpand = () => {
    setToggleExpand(!toggleExpand);
    if (toggleExpand) {
      collapseAll();
    } else {
      expandAll();
    }
  };

  return (
    <section className="w-full px-4">
      <div className="space-y-6">
        <div className="flex justify-between">
          <div className="flex shrink-0 flex-col">
            <Heading2>Tutorial Content</Heading2>
            <Subtle className="md:text-lg">{introText}</Subtle>
          </div>
          <div>
            <Button
              variant="light"
              color="primary"
              startContent={
                toggleExpand ? <Minus size={14} /> : <Plus size={14} />
              }
              onClick={handleToggleExpand}
            >
              {toggleExpand ? 'Collapse All' : 'Expand All'}
            </Button>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};
