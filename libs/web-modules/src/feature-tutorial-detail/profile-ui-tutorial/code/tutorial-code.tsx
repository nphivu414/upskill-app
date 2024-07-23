import React from 'react';
import { Block, parseProps } from 'codehike/blocks';
import { z } from 'zod';

import { CustomAccordion } from './custom-accordions';

const Schema = Block.extend({ accordions: z.array(Block) });

export async function CodeWithAccoridions(props: unknown) {
  const { accordions } = parseProps(props, Schema);
  return <CodeAccordions accordions={accordions} />;
}

function CodeAccordions(props: {
  accordions: {
    title?: string | undefined;
    children?: React.ReactNode;
  }[];
}) {
  const { accordions } = props;
  return <CustomAccordion data={accordions} />;
}
