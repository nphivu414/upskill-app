import { Spacer } from '@nextui-org/react';
import { cn } from '@upskill-app/ui/web';

import { InforLineProps } from '../types';

export const InfoLine = ({
  icon,
  className,
  children,
  ...rest
}: InforLineProps) => {
  return (
    <div
      className={cn(
        'flex items-center px-4 [&:not(:first-child)]:mt-2',
        className
      )}
      {...rest}
    >
      {icon}
      <Spacer x={1} />
      <div className="text-sm">{children}</div>
    </div>
  );
};
