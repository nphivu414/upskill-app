'use client';

import React from 'react';
import { Accordion, AccordionItem, cn, Selection } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/types';
import StickyBox from 'react-sticky-box';

import { useContentSectionQueryState } from '../../useContentSectionQueryState';
import { steps } from '../step-config';
import { ShowCodeModal } from './show-code-modal';
import { useAccordionMotionProps } from './use-accordion-motion-props';

type CustomAccordionData = {
  title?: string;
} & ComponentWithChildren;

type CustomAccordionProps = {
  data: CustomAccordionData[];
};

export const CustomAccordion = ({ data }: CustomAccordionProps) => {
  const { selectedSections, setSelectedSections } =
    useContentSectionQueryState();
  const [isClosedAll, setIsClosedAll] = React.useState(false);
  const [, startCloseAll] = React.useTransition();
  const accordionItemMotionProps = useAccordionMotionProps();

  React.useEffect(() => {
    startCloseAll(() => {
      if (selectedSections[0] === 'empty') {
        setIsClosedAll(true);
      } else {
        setIsClosedAll(false);
      }
    });
  }, [selectedSections, setSelectedSections]);

  const selectedAccordionKeys = isClosedAll
    ? []
    : new Set(selectedSections.map((key) => `${parseInt(key) - 1}`));

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

  const renderStepContent = (index: number) => {
    return <div className="not-prose">{steps[index].content}</div>;
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
};
