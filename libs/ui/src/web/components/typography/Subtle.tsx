import { cn } from '@nextui-org/react';

import { TypographyProps } from './types';

export function Subtle({ text, className, children }: TypographyProps) {
  return (
    <p className={cn('text-sm text-zinc-500 dark:text-zinc-400', className)}>
      {children || text}
    </p>
  );
}
