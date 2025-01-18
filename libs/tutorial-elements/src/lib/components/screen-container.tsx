import { ComponentPropsWithoutRef } from 'react';
import { cn } from "@heroui/react";
import { ComponentWithChildren } from '@upskill-app/shared';

type ScreenContainerProps = ComponentWithChildren &
  ComponentPropsWithoutRef<'div'>;

export const ScreenContainer = ({
  children,
  className,
  ...rest
}: ScreenContainerProps) => {
  return (
    <div className={cn('container mx-auto max-w-md py-4', className)} {...rest}>
      {children}
    </div>
  );
};
