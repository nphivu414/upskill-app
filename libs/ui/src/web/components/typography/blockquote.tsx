import { cn } from "@heroui/react";
import { TypographyProps } from './types';

export function Blockquote({ text, className, children }: TypographyProps) {
  return (
    <blockquote
      className={cn(
        'mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 dark:border-zinc-600 dark:text-zinc-200',
        className
      )}
    >
      {children || text}
    </blockquote>
  );
}
