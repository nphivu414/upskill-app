'use client';

import React from 'react';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import { HighlightedCode, Pre, RawCode } from 'codehike/code';

export function CustomTabs(props: {
  tabs: RawCode[];
  highlighted: HighlightedCode[];
}) {
  const { tabs, highlighted } = props;
  const [selected, setSelected] = React.useState(tabs?.[0].meta);
  const tabsWithIndex = tabs.map((tab, index) => ({ ...tab, index }));

  return (
    <Tabs
      color="primary"
      selectedKey={selected}
      items={tabsWithIndex}
      destroyInactiveTabPanel={false}
      onSelectionChange={(key) => setSelected(key.toString())}
    >
      {(tab) => {
        return (
          <Tab key={tab.meta} title={tab.meta}>
            <Card>
              <CardBody>
                <Pre
                  code={highlighted[tab.index]}
                  className="m-0 rounded-none bg-content1"
                />
              </CardBody>
            </Card>
          </Tab>
        );
      }}
    </Tabs>
  );
}
