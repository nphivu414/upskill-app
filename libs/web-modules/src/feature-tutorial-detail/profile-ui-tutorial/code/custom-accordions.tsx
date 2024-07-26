'use client';

import React from 'react';
import { Accordion, AccordionItem, Image } from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';
import StickyBox from 'react-sticky-box';

import FeaturePhotosCodeContent from '../content/feature-photos-content.mdx';
import ProfileInfoCodeContent from '../content/profile-info-content.mdx';
import ProfileStatsContent from '../content/profile-stats-content.mdx';
import { Code } from '../profile-content';
import { CodeWithTabs } from './tutorial-code';

export function CustomAccordion({
  data,
}: {
  data: {
    title?: string | undefined;
    children?: React.ReactNode;
  }[];
}) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['3']));

  const renderStepSide = () => {
    if (selectedKeys.has('0')) {
      return (
        <div className="flex flex-col items-center justify-center">
          <Subtle className="mb-2">
            Expected outcome after completing this step
          </Subtle>
          <Image
            src="/startup-screen.png"
            className="mx-auto w-[400px] border"
            alt="Profile UI Project Startup Screen"
          />
          <Subtle className="mt-2">(NextUI Startup Screen)</Subtle>
        </div>
      );
    } else if (selectedKeys.has('1')) {
      return <FeaturePhotosCodeContent components={{ CodeWithTabs, Code }} />;
    } else if (selectedKeys.has('2')) {
      return <ProfileInfoCodeContent components={{ CodeWithTabs, Code }} />;
    } else if (selectedKeys.has('3')) {
      return <ProfileStatsContent components={{ CodeWithTabs, Code }} />;
    }
  };

  return (
    <div className="flex items-start gap-4">
      <div className="w-full flex-1 ">
        <Accordion
          variant="shadow"
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
          itemClasses={{
            base: 'accordion-item',
          }}
        >
          {data.map((accordionItem, index) => (
            <AccordionItem
              key={index}
              data-key={index}
              aria-label={accordionItem.title}
              title={accordionItem.title}
            >
              <div className="prose prose-zinc dark:prose-invert max-w-full">
                {accordionItem.children}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <StickyBox className="w-1/2" offsetTop={80}>
        <div className="flex flex-col items-center justify-center">
          {renderStepSide()}
        </div>
      </StickyBox>
    </div>
  );
}
