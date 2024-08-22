import { cn, Divider } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/shared';

type MockupBrowserProps = {
  className?: string;
} & ComponentWithChildren;

export const MockupBrowser = ({ className, children }: MockupBrowserProps) => {
  return (
    <div
      className={cn(
        'mockup-browser bg-base-300 w-[320px] max-w-[320px] md:w-[375px] md:max-w-[375px] border-2 border-divider',
        className
      )}
    >
      <div className="mockup-browser-toolbar" />
      <Divider />
      <div className="bg-background">
        <div>{children}</div>
      </div>
    </div>
  );
};
