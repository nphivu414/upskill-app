import { Avatar, AvatarProps } from '@nextui-org/react';

export const AppLogo = (props: AvatarProps) => {
  return <Avatar src="/app-logo.png" radius="full" {...props} />;
};
