import { cn } from '../utils';

type AppFooterProps = {
  className?: string;
};

export const AppFooter = ({ className }: AppFooterProps) => {
  return (
    <footer
      className={cn(
        'border-divider flex w-full shrink-0 justify-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6',
        className
      )}
    >
      <p className="text-default-500 text-xs">
        © 2025 Upskills. All rights reserved.
      </p>
    </footer>
  );
};
