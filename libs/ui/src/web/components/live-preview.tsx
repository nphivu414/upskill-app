import React from 'react';
import { Button, ButtonGroup, Chip, Link } from "@heroui/react";
import { ComponentWithChildren } from '@upskill-app/shared';

import { cn } from '../utils';
import { CustomIcons } from './custom-icon';

type LivePreviewProps = {
  title?: string;
  storybookUrl: string;
  sourceUrl?: string;
  className?: string;
  showStorySourceLink?: boolean;
} & ComponentWithChildren;

export const LivePreview = ({
  title = 'Live Preview',
  storybookUrl,
  sourceUrl,
  children,
  className,
  showStorySourceLink = true,
}: LivePreviewProps) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4 w-full',
        className
      )}
    >
      <Chip
        variant="bordered"
        startContent={
          <div className="bg-success-500 relative mx-1 size-2 rounded-full">
            <div className="bg-success-500 size-2 animate-ping rounded-full " />
          </div>
        }
      >
        {title}
      </Chip>
      {children}
      {showStorySourceLink && (
        <ButtonGroup variant="ghost" size="sm">
          <Button
            as={Link}
            href={isClient ? storybookUrl : undefined}
            target="_blank"
            startContent={<CustomIcons.storybook width={14} />}
          >
            Storybook
          </Button>
          {sourceUrl ? (
            <Button
              as={Link}
              href={sourceUrl}
              target="_blank"
              startContent={<CustomIcons.gitHub width={14} />}
            >
              Source
            </Button>
          ) : null}
        </ButtonGroup>
      )}
    </div>
  );
};
