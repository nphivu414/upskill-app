'use client';

import React from 'react';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import { CodeBock } from '@upskill-app/ui/web';
import { HighlightedCode, RawCode } from 'codehike/code';

import { DemoComponent } from './demo-component';

const PreviewComponent = () => (
  <DemoComponent
    title="Daily Mix"
    subTitle="12 Tracks"
    caption="Frontend Radio"
    coverPhotoUrl="https://nextui.org/images/hero-card-complete.jpeg"
  />
);

export function CustomTabs(props: {
  tabs: RawCode[];
  highlighted: HighlightedCode[];
}) {
  const { tabs, highlighted } = props;
  const [selected, setSelected] = React.useState(tabs?.[0].meta);
  const tabsWithIndex = [
    ...tabs,
    {
      lang: '',
      meta: 'Preview',
      value: PreviewComponent,
    },
  ].map((tab, index) => ({ ...tab, index }));

  return (
    <Tabs
      color="primary"
      selectedKey={selected}
      items={tabsWithIndex}
      destroyInactiveTabPanel={false}
      onSelectionChange={(key) => setSelected(key.toString())}
    >
      {(tab) => {
        const highlightedCode = highlighted[tab.index];
        return (
          <Tab key={tab.meta} title={tab.meta}>
            <Card>
              <CardBody>
                {tab.meta === 'Preview' ? (
                  <div className="flex h-[300px] items-center justify-center">
                    <tab.value />
                  </div>
                ) : (
                  <CodeBock
                    code={highlightedCode}
                    showCopyButton
                    className="bg-content1 m-0 h-[300px] overflow-auto rounded-none"
                  />
                )}
              </CardBody>
            </Card>
          </Tab>
        );
      }}
    </Tabs>
  );
}
