import React from 'react';
import { CodeBlock, CodeBlockTabs } from '@upskill-app/ui/web';
import { Block, parseProps } from 'codehike/blocks';
import { HighlightedCode } from 'codehike/code';
import { z } from 'zod';

import { StepConfig } from '../types';
import { ContentAccordion } from './content-accordions';

const AccordionCodeSchema = Block.extend({
  accordions: z.array(Block),
  stepConfigs: z.custom<StepConfig[]>(),
});

const TabCodeSchema = Block.extend({
  tabs: z.array(Block),
  sectionName: z.string().optional(),
  destroyInactiveTabPanel: z.boolean().optional(),
});

const TooltipCodeSchema = Block.extend({
  code: z.custom<HighlightedCode>(),
  tooltips: z.array(Block).optional(),
});

export function CodeWithTabs(props: unknown) {
  const { tabs, sectionName, destroyInactiveTabPanel } = parseProps(
    props,
    TabCodeSchema
  );
  return (
    <CodeBlockTabs
      tabs={tabs}
      sectionName={sectionName}
      destroyInactiveTabPanel={destroyInactiveTabPanel}
    />
  );
}

export function CodeWithAccoridions(props: unknown) {
  const { accordions, stepConfigs } = parseProps(props, AccordionCodeSchema);
  return <ContentAccordion data={accordions} stepConfigs={stepConfigs} />;
}

export function CodeWithTooltips(props: unknown) {
  const { code, tooltips = [] } = parseProps(props, TooltipCodeSchema);

  return <CodeBlock className="bg-content2" code={code} tooltips={tooltips} />;
}
