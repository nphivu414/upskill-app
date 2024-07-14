import React from 'react';
import { Block, CodeBlock, parseProps } from 'codehike/blocks';
import { highlight, RawCode } from 'codehike/code';
import { z } from 'zod';

import { CustomTabs } from './custom-tabs';

const Schema = Block.extend({ tabs: z.array(CodeBlock) });

export async function CodeWithTabs(props: unknown) {
  const { tabs } = parseProps(props, Schema);
  return <CodeTabs tabs={tabs} />;
}

async function CodeTabs(props: { tabs: RawCode[] }) {
  const { tabs } = props;
  const highlighted = await Promise.all(
    tabs.map((tab) => highlight(tab, 'github-dark'))
  );
  return <CustomTabs highlighted={highlighted} tabs={tabs} />;
}
