'use client';

import { Link } from "@heroui/react";
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
  let isAnimating = false;

  const onClick = () => {
    const element = document.getElementById(`${section}-${tab}`);
    if (!element) return;
    const ariaSelected = element?.getAttribute('aria-selected');

    if (ariaSelected === 'true') {
      if (isAnimating) return; // Check if animation is already in progress
      isAnimating = true; // Set the flag to indicate animation is in progress

      element.classList.add('animate-shake', 'animate-ease-in-out');
      setTimeout(() => {
        element.classList.remove('animate-shake', 'animate-ease-in-out');
        isAnimating = false; // Reset the flag after animation is complete
      }, 1000);
      return;
    }

    element.click();
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
