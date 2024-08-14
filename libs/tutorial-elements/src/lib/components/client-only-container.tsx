import React from 'react';
import { cn, Spinner } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/shared';
import { motion } from 'framer-motion';

type ClientOnlyContainerProps = {
  contentContainerClassName?: string;
  loadingLabel?: string;
  loadingContainerClassName?: string;
} & ComponentWithChildren;

export const ClientOnlyContainer = ({
  children,
  contentContainerClassName,
  loadingContainerClassName,
  loadingLabel = 'Loading preview...',
}: ClientOnlyContainerProps) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <motion.div
      key="client-only-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
      className={contentContainerClassName}
    >
      {children}
    </motion.div>
  ) : (
    <div
      className={cn('flex flex-col justify-center', loadingContainerClassName)}
    >
      <Spinner
        color="primary"
        label={loadingLabel}
        classNames={{
          label: 'text-sm',
        }}
      />
    </div>
  );
};
