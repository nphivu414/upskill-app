import { ComponentWithChildren } from '@upskill-app/types';

export const MyComponent = ({ children }: ComponentWithChildren) => {
  return <div>MyComponent {children}</div>;
};
