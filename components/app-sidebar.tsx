import { Home, Inbox, LogOut, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { useAuth } from "@/src/auth/auth-context";
import { Link, useNavigate } from "@tanstack/react-router";
import { getUser } from "@/src/auth/auth";

// Menu items.
const items = [
  {
    title: "Home",
    url: "",
    icon: Home,
  },
]

export function AppSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const user = getUser();

  function handleLogout() {
    logout();
    navigate({ to: "/login" });
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Bem Vindo {user?.name}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarSeparator />
              <SidebarMenuItem key='logout'>
                <SidebarMenuButton onClick={handleLogout}>
                  <>
                    <LogOut />
                    <span>Sair</span>
                  </>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}