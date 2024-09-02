'use client';

import { Link } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/shared';

type CodeTabTriggerProps = {
  tab: string;
  section?: string;
} & ComponentWithChildren;

export const CodeTabTrigger = ({
  tab,
  section = '',
  children,
}: CodeTabTriggerProps) => {
  const onClick = () => {
    const element = document.getElementById(`${section}-${tab}`);
    element?.click();
  };

  return (
    <Link
      className="lg:text-primary lg:bg-primary-500/20 pointer-events-none cursor-pointer rounded-lg px-1 font-semibold text-current lg:pointer-events-auto"
      size="sm"
      onClick={onClick}
      role="button"
    >
      {children || tab}
    </Link>
  );
};
