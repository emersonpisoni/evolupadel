import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_dashboard/inbox')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/inbox"!</div>
}
