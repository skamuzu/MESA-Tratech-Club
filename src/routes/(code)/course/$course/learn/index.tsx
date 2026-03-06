import { createFileRoute, redirect } from '@tanstack/react-router'
import { getCourseModules } from '@/features/courses/api'

export const Route = createFileRoute('/(code)/course/$course/learn/')({
  component: RouteComponent,
  loader: async ({params, context}) => {
    const courses = await context.queryClient.ensureQueryData({
      queryKey: ["courses", params.course],
       queryFn: () => getCourseModules(params.course),
    })

    const firstLesson = courses.modules[0].lessons[0]

    throw redirect({
      to: '/course/$course/learn/$lesson',
      params: {
        course: params.course,
        lesson: firstLesson.slug
      }
    })
  }
})

function RouteComponent() {
  return <div>Hello "/(code)/course/$course/learn/"!</div>
}
