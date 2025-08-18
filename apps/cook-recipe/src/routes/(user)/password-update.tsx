import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(user)/password-update')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(user)/password-update"!</div>;
}
