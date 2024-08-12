'use client';

import React, { Key } from 'react';
import { cn, Tab, Tabs } from '@nextui-org/react';

export function CodeBlockTabs(props: {
  tabs: {
    title?: string | undefined;
    children?: React.ReactNode;
  }[];
}) {
  const { tabs } = props;
  const [selected, setSelected] = React.useState(tabs?.[0].title);
  const onSelectionChange = (key: Key) => {
    setSelected(key.toString());
  };

  return (
    <Tabs
      color="primary"
      selectedKey={selected}
      size="sm"
      items={tabs}
      onSelectionChange={onSelectionChange}
      classNames={{
        base: 'overflow-x-auto max-w-full',
        panel:
          'w-full bg-content2 rounded-lg overflow-auto mt-4 min-h-[60vh] max-h-[60vh] lg:min-h-[50px] py-0 lg:max-h-[75vh]',
      }}
    >
      {(tab) => {
        return (
          <Tab key={tab.title} title={tab.title}>
            {
              <div
                className={cn({
                  'flex items-center justify-center py-4':
                    tab.title === 'Preview',
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
