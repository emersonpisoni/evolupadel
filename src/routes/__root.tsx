import { ModeToggle } from '@/components/mode-toggle'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <hr />
      <div id="root-content">
        <Outlet />
        <ModeToggle />
      </div>
    </>
  ),
})