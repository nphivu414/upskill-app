import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/shared';

type ScreenContainerProps = ComponentWithChildren &
  ComponentPropsWithoutRef<'div'>;

export const ScreenContainer = ({
  children,
  className,
  ...rest
}: ScreenContainerProps) => {
  return (
    <div className={cn('container mx-auto max-w-md', className)} {...rest}>
      {children}
    </div>
  );
};
