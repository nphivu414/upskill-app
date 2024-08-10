import { Button, ButtonProps } from '@nextui-org/react';
import { CollapsibleContentProps } from '@radix-ui/react-collapsible';
import { ComponentWithChildren } from '@upskill-app/types';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@upskill-app/ui/web';
import { Info } from 'lucide-react';

type CollapsibleBlockProps = ComponentWithChildren & {
  triggerProps?: ButtonProps;
  triggerLabel: string;
  contentProps?: CollapsibleContentProps;
};

export const CollapsibleBlock = ({
  triggerLabel,
  triggerProps,
  contentProps,
  children,
}: CollapsibleBlockProps) => {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button
          variant="bordered"
          fullWidth
          startContent={<Info size={16} />}
          {...triggerProps}
        >
          {triggerLabel}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-content2 rounded-xl" {...contentProps}>
        <div className="mt-2 p-1">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};
