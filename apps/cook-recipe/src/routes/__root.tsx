// app/routes/__root.tsx
/// <reference types="vite/client" />
import { createRootRoute, Outlet } from '@tanstack/react-router';

import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
