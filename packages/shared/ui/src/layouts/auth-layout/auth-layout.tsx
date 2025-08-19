export const AuthLayout = ({ children, ...props }: React.PropsWithChildren) => {
  return (
    <div {...props}>
      <h1>Welcome to AuthLayout!</h1>
      <>{children}</>
    </div>
  );
};

export default AuthLayout;
