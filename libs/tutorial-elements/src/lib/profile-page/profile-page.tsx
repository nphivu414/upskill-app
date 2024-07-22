import React from 'react';
import { ScrollShadow, Spacer } from '@nextui-org/react';
import { useScroll } from 'framer-motion';

import { MockupBrowser } from '../components';
import { FeaturePhotos } from './feature-photos';
import { ParallaxContainer } from './parallax-container';
import { ProfileInfo } from './profile-info';
import { ProfileStats } from './profile-stats';
import { ProfileTimeline } from './profile-timeline';
import { ProfilePageProps } from './types';
import { useParallax } from './use-parallax-header';

export const ProfilePage = ({
  featurePhotos,
  profile,
  company,
  profileStats,
  profileTimeline: { posts, photos, likedPosts },
}: ProfilePageProps) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });
  const y = useParallax(scrollYProgress);

  return (
    <MockupBrowser>
      <ScrollShadow ref={ref} className="h-[550px]" size={15}>
        <ParallaxContainer y={y}>
          <FeaturePhotos photos={featurePhotos} />
        </ParallaxContainer>
        <ProfileInfo profile={profile} company={company} />
        <Spacer y={1} />
        <ProfileStats stats={profileStats} />
        <Spacer y={1} />
        <ProfileTimeline
          posts={posts}
          photos={photos}
          likedPosts={likedPosts}
        />
      </ScrollShadow>
    </MockupBrowser>
  );
};
