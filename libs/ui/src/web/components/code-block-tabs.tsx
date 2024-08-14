'use client';

import React, { Key } from 'react';
import { cn, Tab, Tabs } from '@nextui-org/react';

import { CustomIcons } from './custom-icon';

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
  const renderFileIcon = (fileExtension?: string) => {
    switch (fileExtension) {
      case 'tsx':
        return <CustomIcons.react width={14} />;
      case 'ts':
        return <CustomIcons.typescript width={14} />;
      default:
        return null;
    }
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
        const fileExtension = tab.title?.split('.').pop();
        return (
          <Tab
            key={tab.title}
            title={
              <div className="flex items-center gap-2">
                {renderFileIcon(fileExtension)}
                <span>{tab.title}</span>
              </div>
            }
          >
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
