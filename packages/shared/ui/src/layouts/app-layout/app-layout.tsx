import { Header } from '../../components';

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <h1>Welcome to AppLayout!</h1>
      <Header />
      <div
        className="max-w-7xl mx-auto px-4 py-8"
        data-testid="invalid-product"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Invalid Product</h1>
          <p className="mt-2 text-gray-400">
            Please provide a valid product ID.
          </p>
        </div>
      </div>
      <>{children}</>
    </div>
  );
};

export default AppLayout;
