import { cn } from '@nextui-org/react';

import { TypographyProps } from './types';

export function Heading4({ text, className, children }: TypographyProps) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
    >
      {children || text}
    </h4>
  );
}
