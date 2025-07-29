import { ModeToggle } from '@/components/mode-toggle'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <div id="root-content">
        <Outlet />
        <ModeToggle />
      </div>
    </>
  ),
})