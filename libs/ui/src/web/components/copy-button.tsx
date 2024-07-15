'use client';

import { Button } from '@nextui-org/react';
import { Check, Copy } from 'lucide-react';

import { useCopyToClipboard } from '../hooks';
import { cn } from '../utils';

type CopyButtonProps = {
  text: string;
  className?: string;
};

export function CopyButton({ text, className }: CopyButtonProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });
  const handleCopy = () => {
    copyToClipboard(text);
  };

  return (
    <Button
      isIconOnly
      size="sm"
      aria-label="Copy to clipboard"
      className={cn('opacity-50 hover:opacity-100', className)}
      onClick={handleCopy}
    >
      {isCopied ? <Check size={14} /> : <Copy size={14} />}
    </Button>
  );
}
