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
    <section className="w-full">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Heading2>Tutorial Content</Heading2>
              <Subtle className="md:text-lg">{introText}</Subtle>
            </div>
            <div>
              <Button
                variant="flat"
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
      </div>
    </section>
  );
};
