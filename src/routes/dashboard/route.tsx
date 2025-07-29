
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { getUser } from "@/src/auth/auth";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

export const Route = createFileRoute('/dashboard')({
  beforeLoad: () => {
    const user = getUser();
    if (!user) {
      // Redireciona para login se não estiver autenticado
      throw redirect({ to: "/login" });
    }

    // if (user.role !== "professor") {
    //   // Bloqueia usuários que não sejam professores
    //   throw redirect({ to: "/unauthorized" });
    // }

    return {};
  },
  component: Layout,
})

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}