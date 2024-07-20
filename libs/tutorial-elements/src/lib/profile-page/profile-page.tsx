import { ScrollShadow } from '@nextui-org/react';

import { MockupBrowser } from '../components';
import { FeaturePhotos } from './feature-photos';
import { PersonalInfo } from './personal-info';
import { ProfilePageProps } from './types';

export const ProfilePage = ({
  featurePhotos,
  profile,
  company,
}: ProfilePageProps) => {
  return (
    <MockupBrowser>
      <ScrollShadow className="h-[550px]">
        <FeaturePhotos photos={featurePhotos} />
        <PersonalInfo profile={profile} company={company} />
        <div className="h-[800px]" />
      </ScrollShadow>
    </MockupBrowser>
  );
};
