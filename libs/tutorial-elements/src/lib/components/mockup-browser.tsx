import { cn } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/shared';

type MockupBrowserProps = {
  className?: string;
} & ComponentWithChildren;

export const MockupBrowser = ({ className, children }: MockupBrowserProps) => {
  return (
    <div
      className={cn('mockup-browser bg-base-300 max-w-xs border', className)}
    >
      <div className="mockup-browser-toolbar">
        <div className="input text-foreground-500">upskill.app</div>
      </div>
      <div className="bg-background">
        <div>{children}</div>
      </div>
    </div>
  );
};
