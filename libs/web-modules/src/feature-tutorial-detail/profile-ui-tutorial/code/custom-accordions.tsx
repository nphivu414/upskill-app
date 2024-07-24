'use client';

import React from 'react';
import { Accordion, AccordionItem, Image, select } from '@nextui-org/react';
import { Heading3 } from '@upskill-app/ui/web';
import StickyBox from 'react-sticky-box';

export function CustomAccordion({
  data,
}: {
  data: {
    title?: string | undefined;
    children?: React.ReactNode;
  }[];
}) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['0']));
  console.log('🚀 ~ selectedKeys:', selectedKeys);

  const renderStepSide = () => {
    if (selectedKeys.has('0')) {
      return (
        <Image
          src="/startup-screen.png"
          className="mx-auto w-1/2 border"
          alt="Profile UI Project Startup Screen"
        />
      );
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
        <div className="flex flex-col items-center justify-center">
          {/* <Code components={{ Code: TutorialCode }} /> */}
          {/* <ProfilePage /> */}
          {/* <iframe
            src="http://localhost:65294/iframe.html?args=&id=tutorials-profile-ui-page-screen--default&"
            width={400}
            height={700}
          /> */}
          {/* <ProfileFullPageDemo /> */}
          {/* <TestComponent /> */}
          {renderStepSide()}
        </div>
      </StickyBox>
    </div>
  );
}
