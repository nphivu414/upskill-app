import { ComponentWithChildren } from '@upskill-app/types';

export const AppContainer = ({ children }: ComponentWithChildren) => {
  return <div className="container mx-auto">{children}</div>;
};
