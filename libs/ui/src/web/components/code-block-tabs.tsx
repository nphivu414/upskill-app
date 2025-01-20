'use client';

import React, { Key } from 'react';
import { cn, Tab, Tabs, TabsProps } from "@heroui/react";

import { CustomIcons } from './custom-icon';

type FileIconProps = {
  fileName?: string;
  size?: number;
};
export const FileIcon = ({ fileName, size = 14 }: FileIconProps) => {
  const fileExtension = fileName?.split('.').pop();
  switch (fileExtension) {
    case 'tsx':
      return <CustomIcons.react width={size} />;
    case 'ts':
      return <CustomIcons.typescript width={size} />;
    default:
      return null;
  }
};

type CodeBlockTabsProps = {
  tabs: {
    title?: string;
    children?: React.ReactNode;
  }[];
  sectionName?: string;
  destroyInactiveTabPanel?: boolean;
  classNames: TabsProps['classNames'];
};
export function CodeBlockTabs(props: CodeBlockTabsProps) {
  const {
    tabs,
    sectionName = '',
    classNames,
    destroyInactiveTabPanel = true,
  } = props;
  const [selected, setSelected] = React.useState(tabs?.[0].title);
  const onSelectionChange = (key: Key) => {
    setSelected(key.toString());
  };

  return (
    <Tabs
      selectedKey={selected}
      variant="bordered"
      items={tabs}
      onSelectionChange={onSelectionChange}
      destroyInactiveTabPanel={destroyInactiveTabPanel}
      classNames={{
        base: 'overflow-x-auto max-w-full',
        panel:
          'w-full bg-content2 rounded-lg overflow-auto mt-4 min-h-[60vh] max-h-[60vh] lg:min-h-[50px] py-0 lg:max-h-[75vh]',
        ...classNames,
      }}
    >
      {(tab) => {
        return (
          <Tab
            id={`${sectionName}-${tab.title}`}
            key={tab.title}
            title={
              <div className="flex items-center gap-2">
                <FileIcon fileName={tab.title} />
                <span>{tab.title}</span>
              </div>
            }
            titleValue={tab.title}
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
