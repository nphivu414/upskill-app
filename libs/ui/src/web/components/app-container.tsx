import { ComponentWithChildren } from '@upskill-app/types';

export const AppContainer = ({ children }: ComponentWithChildren) => {
  return (
    <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl">
      {children}
    </div>
  );
};
