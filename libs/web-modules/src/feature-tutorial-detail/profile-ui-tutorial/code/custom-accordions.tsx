'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { CodeBlock, Heading3 } from '@upskill-app/ui/web';
import { HighlightedCode, RawCode } from 'codehike/code';
import StickyBox from 'react-sticky-box';

export function CustomAccordion({
  data,
}: {
  data: {
    title?: string | undefined;
    children?: React.ReactNode;
  }[];
}) {
  // const { accordions, highlighted } = props;
  // console.log('🚀 ~ highlighted:', highlighted);
  // console.log('🚀 ~ accordions:', accordions);
  // const [selected, setSelected] = React.useState(accordions?.[0].meta);
  // console.log('🚀 ~ selected:', selected);
  // const tabsWithIndex = accordions.map((tab, index) => ({ ...tab, index }));
  // console.log('🚀 ~ tabsWithIndex:', tabsWithIndex);

  return (
    <div className="flex items-start">
      <div className="flex-1">
        <Accordion
          variant="splitted"
          selectionMode="single"
          defaultExpandedKeys={['0']}
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
              {accordionItem.children}
            </AccordionItem>
          ))}
          {/* <AccordionItem
            key="1"
            data-key="1"
            aria-label="Introduction to React"
            title={<Heading3>Introduction to React</Heading3>}
            subtitle="Learn the fundamentals of React, including its history,
    architecture, and key concepts."
          >
            
          </AccordionItem> */}
        </Accordion>
      </div>
      <StickyBox className="flex-1" offsetTop={60}>
        <div className="flex flex-col items-center justify-center p-4">
          {/* <Code components={{ Code: TutorialCode }} /> */}
          {/* <ProfilePage /> */}
          {/* <iframe
            src="http://localhost:65294/iframe.html?args=&id=tutorials-profile-ui-page-screen--default&"
            width={400}
            height={700}
          /> */}
          {/* <ProfileFullPageDemo /> */}
          {/* <TestComponent /> */}
        </div>
      </StickyBox>
    </div>
  );
}
