import React from 'react';
import { ComponentWithChildren } from '@upskill-app/types';

export const ClientOnlyContainer = ({ children }: ComponentWithChildren) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? children : null;
};
