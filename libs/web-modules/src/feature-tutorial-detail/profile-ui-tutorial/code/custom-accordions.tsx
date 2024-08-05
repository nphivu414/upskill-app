'use client';

import React from 'react';
import { Accordion, AccordionItem, cn, Selection } from '@nextui-org/react';
import StickyBox from 'react-sticky-box';

import { StepContent } from '../../step-content';
import { useContentAccordion } from '../../stores';
import { steps } from '../step-config';
import { ShowCodeModal } from './show-code-modal';

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
    //TODO: Remove this line after the tutorial is completed
    setSelectedKeys(new Set('0'));
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

  const renderStepContent = (index: number) => {
    return <StepContent steps={steps} currentIndex={index} />;
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
          title={<p className="text-lg font-semibold">{accordionItem.title}</p>}
          onPress={onAccordionItemPress(index)}
        >
          <div className="prose prose-zinc dark:prose-invert max-w-full">
            <div className="block items-start lg:flex">
              <div className="w-full flex-none text-sm lg:w-1/2 [&>p:first-child]:mt-0">
                {accordionItem.children}
              </div>
              <StickyBox
                offsetTop={65}
                className={cn('w-full flex-col lg:flex lg:w-1/2 lg:pl-8', {
                  hidden: index !== 0,
                })}
              >
                {renderStepContent(index)}
              </StickyBox>
              {index !== 0 && (
                <ShowCodeModal>
                  <>{renderStepContent(index)}</>
                </ShowCodeModal>
              )}
            </div>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
