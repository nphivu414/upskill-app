'use client';

import React from 'react';
import { cn, Tab, Tabs } from '@nextui-org/react';

export function CodeBlockTabs(props: {
  tabs: {
    title?: string | undefined;
    children?: React.ReactNode;
  }[];
}) {
  const { tabs } = props;
  const [selected, setSelected] = React.useState(tabs?.[0].title);

  return (
    <Tabs
      id="opencode"
      color="primary"
      selectedKey={selected}
      items={tabs}
      destroyInactiveTabPanel={false}
      onSelectionChange={(key) => setSelected(key.toString())}
      classNames={{
        panel:
          'w-full bg-content2 rounded-lg overflow-x-auto mt-4 min-h-[50px] py-0',
      }}
    >
      {(tab) => {
        return (
          <Tab key={tab.title} title={tab.title}>
            {
              <div
                className={cn({
                  'flex items-center justify-center': tab.title === 'Preview',
                })}
              >
                {tab.children}
              </div>
            }
          </Tab>
        );
      }}
    </Tabs>
  );
}
