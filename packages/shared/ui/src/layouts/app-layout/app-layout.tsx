export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <h1>Welcome to AppLayout!</h1>
      <>{children}</>
    </div>
  );
};

export default AppLayout;
