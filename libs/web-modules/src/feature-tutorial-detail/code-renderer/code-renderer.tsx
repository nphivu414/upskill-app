import React from 'react';
import { CodeBlockTabs } from '@upskill-app/ui/web';
import { Block, parseProps } from 'codehike/blocks';
import { z } from 'zod';

import { StepConfig } from '../types';
import { ContentAccordion } from './content-accordions';

const AccordionCodeSchema = Block.extend({
  accordions: z.array(Block),
  stepConfigs: z.custom<StepConfig[]>(),
});

const TabCodeSchema = Block.extend({ tabs: z.array(Block) });

export function CodeWithTabs(props: unknown) {
  const { tabs } = parseProps(props, TabCodeSchema);
  return <CodeBlockTabs tabs={tabs} />;
}

export function CodeWithAccoridions(props: unknown) {
  console.log('🚀 ~ CodeWithAccoridions ~ props:', props);
  const { accordions, stepConfigs } = parseProps(props, AccordionCodeSchema);
  return <ContentAccordion data={accordions} stepConfigs={stepConfigs} />;
}
