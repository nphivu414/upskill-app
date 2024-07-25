import { cn } from '@nextui-org/react';
import { TypographyProps } from './types';

export function Heading2({ text, className, children }: TypographyProps) {
  return (
    <h2
      className={cn(
        'mt-10 scroll-m-20 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0',
        className
      )}
    >
      {children || text}
    </h2>
  );
}
