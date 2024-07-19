import { ScrollShadow } from '@nextui-org/react';

import { MockupBrowser } from '../components';
import { FeaturePhotos } from './feature-photos';

export const ProfilePage = () => {
  return (
    <MockupBrowser>
      <ScrollShadow className="h-[600px]">
        <FeaturePhotos />
        <div className="h-[800px]" />
      </ScrollShadow>
    </MockupBrowser>
  );
};
