import { createFileRoute, Outlet } from '@tanstack/react-router';
import { AppLayout } from '@ts-cook-recipe/shared-ui';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
