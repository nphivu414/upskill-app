import { Tab, Tabs } from '@nextui-org/react';

import { Posts } from './posts';

export const ProfileTimeline = () => {
  const tabs = [
    {
      id: 'posts',
      label: 'Posts',
      content: <Posts />,
    },
    {
      id: 'media',
      label: 'Media',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 'likes',
      label: 'Likes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <section className="bg-content1 flex w-full flex-col p-2">
      <Tabs aria-label="Profile timeline" fullWidth items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <div>{item.content}</div>
          </Tab>
        )}
      </Tabs>
    </section>
  );
};
