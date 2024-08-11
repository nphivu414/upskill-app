import { StepConfig } from './types';

type StepContentProps = {
  currentIndex: number;
  steps: StepConfig[];
};

export const StepContent = ({ currentIndex, steps }: StepContentProps) => {
  return <div className="not-prose">{steps[currentIndex].content}</div>;
};
