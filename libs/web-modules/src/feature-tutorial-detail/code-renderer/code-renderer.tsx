import React from 'react';
import { TabsProps } from "@heroui/react";
import { CodeBlockTabs } from '@upskill-app/ui/web';
import { Block, parseProps } from 'codehike/blocks';
import { HighlightedCode } from 'codehike/code';
import { z } from 'zod';

import { Code } from '../content-code-block';
import { StepConfig } from '../types';
import { ContentAccordion } from './content-accordions';

const AccordionCodeSchema = Block.extend({
  accordions: z.array(Block),
  stepConfigs: z.custom<StepConfig[]>().optional(),
});

const TabCodeSchema = Block.extend({
  tabs: z.array(Block),
  sectionName: z.string().optional(),
  classNames: z.custom<TabsProps['classNames']>().optional(),
  destroyInactiveTabPanel: z.boolean().optional(),
});

const TooltipCodeSchema = Block.extend({
  code: z.custom<HighlightedCode>(),
  tooltips: z.array(Block).optional(),
});

export function CodeWithTabs(props: z.infer<typeof TabCodeSchema>) {
  const { tabs, sectionName, classNames, destroyInactiveTabPanel } = parseProps(
    props,
    TabCodeSchema
  );
  return (
    <CodeBlockTabs
      tabs={tabs}
      sectionName={sectionName}
      classNames={classNames}
      destroyInactiveTabPanel={destroyInactiveTabPanel}
    />
  );
}

export function CodeWithAccoridions(
  props: z.infer<typeof AccordionCodeSchema>
) {
  const { accordions, stepConfigs } = parseProps(props, AccordionCodeSchema);
  return <ContentAccordion data={accordions} stepConfigs={stepConfigs} />;
}

export function CodeWithTooltips(props: z.infer<typeof TooltipCodeSchema>) {
  const { code, tooltips = [] } = parseProps(props, TooltipCodeSchema);

  return <Code codeblock={code} tooltips={tooltips} />;
}
