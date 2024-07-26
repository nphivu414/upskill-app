'use client';

import React from 'react';
import {
  Accordion,
  AccordionItem,
  cn,
  Image,
  Selection,
} from '@nextui-org/react';
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
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['0']));

  const onSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys as Set<string>);
  };

  const renderStepSide = (index: number) => {
    return (
      <div>
        <div
          className={cn('flex flex-col items-center justify-center', {
            hidden: index !== 0,
          })}
        >
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
        <div
          className={cn({
            hidden: index !== 1,
          })}
        >
          <FeaturePhotosCodeContent components={{ CodeWithTabs, Code }} />
        </div>
        <div
          className={cn({
            hidden: index !== 2,
          })}
        >
          <ProfileInfoCodeContent components={{ CodeWithTabs, Code }} />
        </div>
        <div
          className={cn({
            hidden: index !== 3,
          })}
        >
          <ProfileStatsContent components={{ CodeWithTabs, Code }} />
        </div>
      </div>
    );
  };

  const onAccordionItemPress = (index: number) => {
    return () => {
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
      disallowEmptySelection
      fullWidth
      variant="shadow"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={onSelectionChange}
      keepContentMounted
      itemClasses={{
        base: 'accordion-item',
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
                {renderStepSide(index)}
              </StickyBox>
            </div>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
