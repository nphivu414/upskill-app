import React from 'react';
import { CodeBlockTabs } from '@upskill-app/ui/web';
import { Block, parseProps } from 'codehike/blocks';
import { z } from 'zod';

import { ContentAccordion } from './content-accordions';

const AccordionCodeSchema = Block.extend({ accordions: z.array(Block) });
const TabCodeSchema = Block.extend({ tabs: z.array(Block) });

export function CodeWithTabs(props: unknown) {
  const { tabs } = parseProps(props, TabCodeSchema);
  return <CodeBlockTabs tabs={tabs} />;
}

export function CodeWithAccoridions(props: unknown) {
  const { accordions } = parseProps(props, AccordionCodeSchema);
  return <ContentAccordion data={accordions} />;
}
