import { getUser } from '@/src/auth/auth';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => {
    const user = getUser();
    if (!user) {
      // Redireciona para login se não estiver autenticado
      console.log("User not authenticated, redirecting to login");
      throw redirect({ to: "/login" });
    }

    // if (user.role !== "professor") {
    //   // Bloqueia usuários que não sejam professores
    //   throw redirect({ to: "/unauthorized" });
    // }

    return {};
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
