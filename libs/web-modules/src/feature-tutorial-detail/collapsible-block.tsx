import { CollapsibleContentProps } from '@radix-ui/react-collapsible';
import { ComponentWithChildren } from '@upskill-app/shared';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@upskill-app/ui/web';
import { AlertCircle } from 'lucide-react';

type CollapsibleBlockProps = ComponentWithChildren & {
  triggerTitle?: string;
  triggerDescription: string;
  contentProps?: CollapsibleContentProps;
};

export const CollapsibleBlock = ({
  triggerTitle,
  triggerDescription,
  contentProps,
  children,
}: CollapsibleBlockProps) => {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Alert variant="default" className="bg-content2 cursor-pointer">
          <AlertCircle className="size-4" />
          {triggerTitle ? <AlertTitle>{triggerTitle}</AlertTitle> : null}
          <AlertDescription>{triggerDescription}</AlertDescription>
        </Alert>
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-content2 rounded-xl" {...contentProps}>
        <div className="mt-2 p-1">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};
