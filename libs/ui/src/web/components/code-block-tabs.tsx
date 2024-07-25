'use client';

import React from 'react';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

export function CodeBlockTabs(props: {
  tabs: {
    title?: string | undefined;
    children?: React.ReactNode;
  }[];
}) {
  const { tabs } = props;
  console.log('🚀 ~ tabs:', tabs);
  const [selected, setSelected] = React.useState(tabs?.[0].title);

  return (
    <Tabs
      color="primary"
      selectedKey={selected}
      items={tabs}
      destroyInactiveTabPanel={false}
      onSelectionChange={(key) => setSelected(key.toString())}
    >
      {(tab) => {
        return (
          <Tab key={tab.title} title={tab.title}>
            <Card>
              <CardBody>{tab.children}</CardBody>
            </Card>
          </Tab>
        );
      }}
    </Tabs>
  );
}
