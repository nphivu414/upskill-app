import { ScrollShadow } from '@nextui-org/react';

import { MockupBrowser } from '../components';
import { FeaturePhotos } from './feature-photos';
import { PersonalInfo } from './personal-info';

type ProfilePageProps = {
  featurePhotos: string[];
};

export const ProfilePage = ({ featurePhotos }: ProfilePageProps) => {
  return (
    <MockupBrowser>
      <ScrollShadow className="h-[600px]">
        <FeaturePhotos photos={featurePhotos} />
        <PersonalInfo />
        <div className="h-[800px]" />
      </ScrollShadow>
    </MockupBrowser>
  );
};
