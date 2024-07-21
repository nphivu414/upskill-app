import React from 'react';
import { Tab, Tabs } from '@nextui-org/react';

import { ProfileTimelineProps } from '../types';
import { Photos } from './photos';
import { Posts } from './posts';

export const ProfileTimeline = ({ posts, photos }: ProfileTimelineProps) => {
  const tabs = React.useMemo(() => {
    return [
      {
        id: 'posts',
        label: 'Posts',
        content: <Posts posts={posts} />,
      },
      {
        id: 'photos',
        label: 'Photos',
        content: <Photos photos={photos} />,
      },
      {
        id: 'likes',
        label: 'Likes',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ];
  }, [photos, posts]);

  return (
    <section className="flex w-full flex-col">
      <Tabs
        aria-label="Profile timeline"
        color="primary"
        fullWidth
        variant="underlined"
        destroyInactiveTabPanel
        items={tabs}
        classNames={{
          base: 'sticky top-[2px] z-50 bg-background',
        }}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <div className="px-2">{item.content}</div>
          </Tab>
        )}
      </Tabs>
    </section>
  );
};
