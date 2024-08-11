import { Button, ButtonGroup, Chip, Link } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/types';

import { cn } from '../utils';
import { CustomIcons } from './custom-icon';

type LivePreviewProps = {
  title?: string;
  storybookUrl: string;
  sourceUrl?: string;
  className?: string;
} & ComponentWithChildren;

export const LivePreview = ({
  title = 'Live Preview',
  storybookUrl,
  sourceUrl,
  children,
  className,
}: LivePreviewProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4',
        className
      )}
    >
      <Chip variant="dot" color="success">
        {title}
      </Chip>
      {children}
      <ButtonGroup variant="ghost" size="sm">
        <Button
          as={Link}
          href={storybookUrl}
          startContent={<CustomIcons.storybook width={14} />}
        >
          Storybook
        </Button>
        {sourceUrl ? (
          <Button
            as={Link}
            href={sourceUrl}
            startContent={<CustomIcons.gitHub width={14} />}
          >
            Source
          </Button>
        ) : null}
      </ButtonGroup>
    </div>
  );
};
