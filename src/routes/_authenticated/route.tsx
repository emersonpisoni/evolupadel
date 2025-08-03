import { getUser } from '@/src/auth/auth';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => {
    const user = getUser();
    if (!user) {
      console.log("User not authenticated, redirecting to login");
      throw redirect({ to: "/login" });
    }

    return {};
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
