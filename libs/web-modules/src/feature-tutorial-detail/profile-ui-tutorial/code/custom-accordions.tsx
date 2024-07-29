'use client';

import React from 'react';
import { Accordion, AccordionItem, Selection } from '@nextui-org/react';
import StickyBox from 'react-sticky-box';

import { StepContent } from '../../step-content';
import { useContentAccordion } from '../../stores';
import { steps } from '../step-config';

export function CustomAccordion({
  data,
}: {
  data: {
    title?: string | undefined;
    children?: React.ReactNode;
  }[];
}) {
  const { selectedKeys, setSelectedKeys, setAllKeys } = useContentAccordion();

  React.useEffect(() => {
    setAllKeys(new Set(data.map((_, index) => index.toString())));
  }, [data, setAllKeys]);

  const onSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys as Set<string>);
  };

  const onAccordionItemPress = (index: number) => {
    return () => {
      if (!selectedKeys.has(index.toString())) {
        return;
      }

      const element = document.getElementById(`accordion-item-${index}`);
      setTimeout(() => {
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'center',
        });
      }, 200);
    };
  };

  return (
    <Accordion
      fullWidth
      variant="shadow"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={onSelectionChange}
      keepContentMounted
      itemClasses={{
        content: 'py-4',
      }}
    >
      {data.map((accordionItem, index) => (
        <AccordionItem
          id={`accordion-item-${index}`}
          className="scroll-mt-16"
          key={index}
          data-key={index}
          aria-label={accordionItem.title}
          title={<p className="text-lg font-bold">{accordionItem.title}</p>}
          onPress={onAccordionItemPress(index)}
        >
          <div className="prose prose-zinc dark:prose-invert max-w-full">
            <div className="flex items-start">
              <div className="w-1/2 flex-none [&>p:first-child]:mt-0">
                {accordionItem.children}
              </div>
              <StickyBox offsetTop={65} className="flex w-1/2 flex-col pl-8">
                <StepContent steps={steps} currentIndex={index} />
              </StickyBox>
            </div>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
