import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_dashboard/calendar')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/calendar"!</div>
}
