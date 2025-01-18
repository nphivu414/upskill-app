'use client';

import React from 'react';
import { Button } from "@heroui/react";
import { ComponentWithChildren } from '@upskill-app/shared';
import { Subtle } from '@upskill-app/ui/web';
import { Minus, Plus } from 'lucide-react';

import { useContentSectionQueryState } from './use-content-section-query-state';

type ContentSectionProps = {
  introText: string;
  totalSections: number;
} & ComponentWithChildren;

export const ContentSection = ({
  introText,
  totalSections,
  children,
}: ContentSectionProps) => {
  const { selectedSections, setSelectedSections } =
    useContentSectionQueryState();
  const [toggleExpand, setToggleExpand] = React.useState(false);

  React.useEffect(() => {
    if (selectedSections.length === totalSections) {
      setToggleExpand(true);
    }
  }, [selectedSections.length, totalSections]);

  const handleToggleExpand = () => {
    setToggleExpand(!toggleExpand);
    if (toggleExpand) {
      setSelectedSections(['empty']);
    } else {
      setSelectedSections(
        Array.from(Array(totalSections).keys()).map((num) => String(num + 1))
      );
    }
  };

  return (
    <section className="w-full px-4">
      <div className="space-y-6">
        <div className="flex justify-between">
          <div className="flex shrink-0 flex-col">
            <p className="text-xl font-bold lg:text-2xl">Tutorial Content</p>
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
