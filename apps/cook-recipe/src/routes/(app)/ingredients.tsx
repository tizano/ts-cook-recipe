import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/ingredients')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(app)/ingredients"!</div>;
}
