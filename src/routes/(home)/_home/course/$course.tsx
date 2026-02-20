import { createFileRoute } from '@tanstack/react-router'
import { getCourse } from '@/features/courses/api'

export const Route = createFileRoute('/(home)/_home/course/$course')({
  component: RouteComponent,
  loader: async ({ params, context }) => {
    const course = await context.queryClient.fetchQuery({
      queryKey: ['courses', params.course],
      queryFn: () => getCourse(params.course),
    })
    return course
  },
})

function RouteComponent() {
  const course = Route.useLoaderData()
  return <div>{course.name}</div>
}
