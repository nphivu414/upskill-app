import { NextUIProvider } from '@nextui-org/react';
import { ComponentWithChildren } from '@upskill-app/types';

export const ElementContainer = ({ children }: ComponentWithChildren) => {
  return (
    <div>
      <NextUIProvider>{children}</NextUIProvider>
    </div>
  );
};
