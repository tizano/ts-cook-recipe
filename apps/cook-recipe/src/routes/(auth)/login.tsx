// apps/web/app/routes/login.tsx
import { createFileRoute } from '@tanstack/react-router';
import { AuthLayout } from '@ts-cook-recipe/shared-ui';
// import { LoginForm } from '@recipe-app/features/auth';

const LoginForm = () => {
  return <form>Mon formulaire de login</form>;
};

export const Route = createFileRoute('/(auth)/login')({
  component: () => (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  ),
});
