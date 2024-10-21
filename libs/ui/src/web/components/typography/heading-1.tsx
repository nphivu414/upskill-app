import { cn } from '@nextui-org/react';

import { TypographyProps } from './types';

export function Heading1({ text, className, children }: TypographyProps) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl',
        className
      )}
    >
      {children || text}
    </h1>
  );
}
