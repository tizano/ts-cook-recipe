import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(user)/account')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(user)/account"!</div>;
}
