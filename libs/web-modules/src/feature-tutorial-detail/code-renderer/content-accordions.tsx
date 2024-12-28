'use client';

import React from 'react';
import { Accordion, AccordionItem, cn, Selection } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/shared';
import StickyBox from 'react-sticky-box';

import { StepConfig } from '../types';
import { useContentSectionQueryState } from '../use-content-section-query-state';
import { ShowCodeModal } from './show-code-modal';
import { useAccordionMotionProps } from './use-accordion-motion-props';

type ContentAccordionData = {
  title?: string;
} & ComponentWithChildren;

type ContentAccordionProps = {
  data: ContentAccordionData[];
  stepConfigs?: StepConfig[];
};

export const ContentAccordion = ({
  data,
  stepConfigs,
}: ContentAccordionProps) => {
  const { selectedSections, setSelectedSections } =
    useContentSectionQueryState();
  const accordionItemMotionProps = useAccordionMotionProps();
  const selectedAccordionKeys = new Set(
    selectedSections.map((key) => `${parseInt(key) - 1}`)
  );

  const onSelectionChange = (keys: Selection) => {
    setSelectedSections(
      Array.from(keys).map((key) => (parseInt(key.toString()) + 1).toString())
    );
  };

  const onAccordionItemPress = (index: number) => {
    return () => {
      const isClosedItem =
        selectedSections?.indexOf((index + 1).toString()) === -1;
      if (isClosedItem) {
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

  const renderStepContent = (index: number, stepConfigs: StepConfig[]) => {
    return <div className="not-prose">{stepConfigs[index].content}</div>;
  };

  return (
    <Accordion
      fullWidth
      variant="shadow"
      selectionMode="multiple"
      selectedKeys={selectedAccordionKeys}
      onSelectionChange={onSelectionChange}
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
          motionProps={accordionItemMotionProps}
        >
          <div className="prose prose-zinc dark:prose-invert max-w-full">
            <div className="block items-start lg:flex">
              <div
                className={cn(
                  'w-full flex-none text-sm lg:text-base [&>p:first-child]:mt-0',
                  {
                    'lg:w-1/2': stepConfigs?.length,
                  }
                )}
              >
                {accordionItem.children}
              </div>
              {stepConfigs?.length ? (
                <>
                  <StickyBox
                    offsetTop={65}
                    className={cn('w-full flex-col lg:flex lg:w-1/2 lg:pl-8', {
                      hidden: index !== 0,
                    })}
                  >
                    {renderStepContent(index, stepConfigs)}
                  </StickyBox>
                  {index !== 0 && (
                    <ShowCodeModal>
                      {renderStepContent(index, stepConfigs)}
                    </ShowCodeModal>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
