import { Avatar, AvatarProps } from "@heroui/react";

export const AppLogo = (props: AvatarProps) => {
  return <Avatar src="/app-logo.png" radius="full" {...props} />;
};
