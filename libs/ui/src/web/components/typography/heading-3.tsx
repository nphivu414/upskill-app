import { cn } from '@nextui-org/react';

import { TypographyProps } from './types';

export function Heading3({ text, className, children }: TypographyProps) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
    >
      {children || text}
    </h3>
  );
}
