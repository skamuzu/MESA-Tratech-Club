import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(code)/course/$course/learn/$lesson')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(code)/course/$course/learn/$lesson"!</div>
}
