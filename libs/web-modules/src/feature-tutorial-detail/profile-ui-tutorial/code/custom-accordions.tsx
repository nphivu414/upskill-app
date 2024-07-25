'use client';

import React from 'react';
import { Accordion, AccordionItem, Image } from '@nextui-org/react';
import { Heading3, Subtle } from '@upskill-app/ui/web';
import StickyBox from 'react-sticky-box';

import FeaturePhotosCodeContent from '../content/feature-photos-content.mdx';
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
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['1']));
  console.log('🚀 ~ selectedKeys:', selectedKeys);

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
    }
  };

  return (
    <div className="flex-5 flex items-start">
      <div className="flex-3">
        <Accordion
          variant="splitted"
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
          // selectedKeys={expandedKey}
          itemClasses={{
            base: 'accordion-item',
          }}
        >
          {data.map((accordionItem, index) => (
            <AccordionItem
              key={index}
              data-key={index}
              aria-label={accordionItem.title}
              title={<Heading3>{accordionItem.title}</Heading3>}
            >
              <div className="prose prose-zinc dark:prose-invert">
                {accordionItem.children}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <StickyBox className="flex-1" offsetTop={60}>
        <div className="bg-content1 flex flex-col items-center justify-center rounded-lg p-4">
          {renderStepSide()}
        </div>
      </StickyBox>
    </div>
  );
}
