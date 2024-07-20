import { ScrollShadow, Spacer } from '@nextui-org/react';

import { MockupBrowser } from '../components';
import { FeaturePhotos } from './feature-photos';
import { ProfileInfo } from './profile-info';
import { ProfileStats } from './profile-stats';
import { ProfileTimeline } from './profile-timeline';
import { ProfilePageProps } from './types';

export const ProfilePage = ({
  featurePhotos,
  profile,
  company,
  profileStats,
}: ProfilePageProps) => {
  return (
    <MockupBrowser>
      <ScrollShadow className="h-[550px]">
        <FeaturePhotos photos={featurePhotos} />
        <ProfileInfo profile={profile} company={company} />
        <Spacer y={1} />
        <ProfileStats stats={profileStats} />
        <Spacer y={1} />
        <ProfileTimeline />
      </ScrollShadow>
    </MockupBrowser>
  );
};
