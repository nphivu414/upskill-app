import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/types';

type ScreenContainerProps = ComponentWithChildren &
  ComponentPropsWithoutRef<'div'>;

export const ScreenContainer = ({
  children,
  className,
  ...rest
}: ScreenContainerProps) => {
  return (
    <div
      className={cn('container mx-auto max-w-xs sm:max-w-sm', className)}
      {...rest}
    >
      {children}
    </div>
  );
};
