import { cn } from '@nextui-org/react';

import { StepConfig } from './types';

type StepContentProps = {
  currentIndex: number;
  steps: StepConfig[];
};

export const StepContent = ({ currentIndex, steps }: StepContentProps) =>
  steps.map((step) => (
    <div className={cn('not-prose', { hidden: step.index !== currentIndex })}>
      {steps[step.index].content}
    </div>
  ));
