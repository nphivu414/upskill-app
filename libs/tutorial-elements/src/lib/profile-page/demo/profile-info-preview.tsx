'use client';

import { ClientOnlyContainer } from '../../components';
import { defaultCompany, defaultProfile } from '../data';
import { ProfileInfo } from '../profile-info';

export const ProfileInfoPreview = () => {
  return (
    <ClientOnlyContainer
      contentContainerClassName="h-[320px] w-[350px] pt-[40px]"
      loadingContainerClassName="min-h-[350px]"
    >
      <ProfileInfo profile={defaultProfile} company={defaultCompany} />
    </ClientOnlyContainer>
  );
};
