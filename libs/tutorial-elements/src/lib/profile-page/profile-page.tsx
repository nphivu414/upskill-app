import { ScrollShadow } from '@nextui-org/react';

import { MockupBrowser } from '../components';
import { FeaturePhotos } from './feature-photos';

type ProfilePageProps = {
  featurePhotos: string[];
};

export const ProfilePage = ({ featurePhotos }: ProfilePageProps) => {
  return (
    <MockupBrowser>
      <ScrollShadow className="h-[600px]">
        <FeaturePhotos photos={featurePhotos} />
        <div className="h-[800px]" />
      </ScrollShadow>
    </MockupBrowser>
  );
};
