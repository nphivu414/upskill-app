import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../components';
import { ProfilePage } from './profile-page';
import {
  Company,
  PhotosProps,
  Post,
  PostPhoto,
  Profile,
  ProfileStats,
} from './types';

const defaultFeaturePhotos = [
  '/profile-cover.png',
  '/profile-cover-2.png',
  '/profile-cover-3.png',
];

const defaultProfile: Profile = {
  name: 'Vu Nguyen',
  username: 'nphivu',
  avatar: 'https://i.pravatar.cc/150?img=57',
  bio: '🚀 Tech aficionado crafting digital magic. 🎨 UI/UX maestro building visually stunning websites and apps.',
  location: 'Saigon, Vietnam',
  title: 'Software Engineer',
  website: 'https://x.com/nphivu414',
};

const defaultProfileStats: ProfileStats = {
  followers: 1440,
  following: 90,
  posts: 246,
};

const defaultCompany: Company = {
  name: '@upskill',
  website: 'https://upskill.app',
};

const defaultPosts: Post[] = [
  {
    id: '1',
    content: `
### **Coding Guru** 🤓✨

Hey there, digital world! 👋 I'm a passionate software engineer.

Let's connect and create something awesome together! ✨

**#softwareengineer #UIUX**

---
![Alt text](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQesMK3LuHjvgFzf_Do3dz_tcZN-pp5NWnd3xszkSqUXR419GZLLd_OBoRo1KU0 "Image of person working on a laptop with code displayed on the screen")
`,
    createdAt: '2021-10-01T00:00:00Z',
    profile: defaultProfile,
    stats: {
      likes: 10,
      comments: 5,
      reposts: 2,
    },
  },
  {
    id: '2',
    content: 'Feeling good today! 🌟',
    createdAt: '2021-10-02T00:00:00Z',
    profile: defaultProfile,
    stats: {
      likes: 20,
      comments: 10,
      reposts: 3,
    },
  },
  {
    id: '3',
    content:
      "Thinking about the next big thing in tech. 🚀 What's your favorite tech trend?",
    createdAt: '2021-10-03T00:00:00Z',
    profile: defaultProfile,
    stats: {
      likes: 30,
      comments: 15,
      reposts: 5,
    },
  },
  {
    id: '4',
    content: 'It has been a long day. Time to relax and code.',
    createdAt: '2021-10-04T00:00:00Z',
    profile: defaultProfile,
    stats: {
      likes: 40,
      comments: 20,
      reposts: 7,
    },
  },
  {
    id: '5',
    content: "What is your favorite Assassin's Creed game? 🎮",
    createdAt: '2021-10-05T00:00:00Z',
    profile: defaultProfile,
    stats: {
      likes: 50,
      comments: 25,
      reposts: 10,
    },
  },
];

const defaultPhotos: PostPhoto[] = [
  {
    id: '1',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
  },
  {
    id: '2',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
  },
  {
    id: '3',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
  },
  {
    id: '4',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
  },
  {
    id: '5',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
  },
  {
    id: '6',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
  },
  {
    id: '7',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
  },
  {
    id: '8',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
  },
  {
    id: '9',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
  },
  {
    id: '10',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
  },
  {
    id: '11',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
  },
  {
    id: '12',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
  },
];

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {
  args: {
    featurePhotos: defaultFeaturePhotos,
    profile: defaultProfile,
    company: defaultCompany,
    profileStats: defaultProfileStats,
    posts: defaultPosts,
    photos: defaultPhotos,
  },
};
