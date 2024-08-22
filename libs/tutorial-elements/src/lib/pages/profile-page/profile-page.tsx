import React from 'react';
import { Spacer } from '@nextui-org/react';
import { useScroll } from 'framer-motion';

import { FeaturePhotos } from './feature-photos';
import { ParallaxContainer } from './parallax-container';
import { ProfileInfo } from './profile-info';
import { ProfileStats } from './profile-stats';
import { ProfileTimeline } from './profile-timeline';
import { ProfilePageProps } from './types';
import { useParallaxHeader } from './use-parallax-header';

export const ProfilePage = ({
  featurePhotos,
  profile,
  company,
  profileStats,
  profileTimeline: { posts, photos, likedPosts },
}: ProfilePageProps) => {
  const { scrollYProgress } = useScroll();
  const y = useParallaxHeader(scrollYProgress);

  return (
    <div>
      <ParallaxContainer y={y}>
        <FeaturePhotos photos={featurePhotos} showDots />
      </ParallaxContainer>
      <ProfileInfo profile={profile} company={company} />
      <Spacer y={1} />
      <ProfileStats stats={profileStats} />
      <Spacer y={1} />
      <ProfileTimeline posts={posts} photos={photos} likedPosts={likedPosts} />
    </div>
  );
};
