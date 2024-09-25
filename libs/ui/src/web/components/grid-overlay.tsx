import React from 'react';

import { cn } from '../utils';

type GridOverlayProps = {
  classNames?: string;
};

export const GridOverlay = ({ classNames }: GridOverlayProps) => {
  return (
    <div
      className={cn(
        'absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30 dark:bg-[linear-gradient(to_right,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.1)_1px,transparent_1px)] dark:opacity-20',
        classNames
      )}
    />
  );
};
