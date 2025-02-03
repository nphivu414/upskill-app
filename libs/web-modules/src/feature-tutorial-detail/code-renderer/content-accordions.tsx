'use client';

import React from 'react';
import { Accordion, AccordionItem, Button, cn, Selection } from '@heroui/react';
import { ComponentWithChildren } from '@upskill-app/shared';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
        content: 'pt-4',
        heading: 'z-10 bg-content1',
      }}
    >
      {data.map((accordionItem, index) => (
        <AccordionItem
          id={`accordion-item-${index}`}
          className="scroll-mt-16"
          key={index}
          data-key={index}
          aria-label={accordionItem.title}
          title={<p className="text-xl font-semibold">{accordionItem.title}</p>}
          onPress={onAccordionItemPress(index)}
          motionProps={accordionItemMotionProps}
        >
          <div className="prose prose-zinc dark:prose-invert max-w-full">
            <div className="block items-start lg:flex">
              <div
                className={cn('w-full flex-none [&>p:first-child]:mt-0', {
                  'lg:w-1/2': stepConfigs?.length,
                })}
              >
                {accordionItem.children}
                <div className="bg-content1/95 sticky bottom-0 z-10">
                  <p className="text-muted m-0 px-0 py-4 text-center text-sm">
                    {accordionItem.title}
                  </p>
                </div>
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
