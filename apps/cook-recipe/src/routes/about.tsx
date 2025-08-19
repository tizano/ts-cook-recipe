import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-3xl bg-amber-800 text-red-900">Hello "/about"!</div>
  );
}
