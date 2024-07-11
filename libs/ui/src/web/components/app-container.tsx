type AppContainerProps = {
  children: React.ReactNode;
};

export const AppContainer = ({ children }: AppContainerProps) => {
  return <div className="container mx-auto">{children}</div>;
};
