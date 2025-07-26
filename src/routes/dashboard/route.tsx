
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute('/dashboard')({
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