import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>"/"!</div>
}
