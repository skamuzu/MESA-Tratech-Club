import { createFileRoute } from '@tanstack/react-router'
import { getLesson } from '@/features/courses/api'
import { lazy, Suspense } from 'react'

const LessonEditor = lazy(() =>
  import('./-components/CodeEditor').then(m => ({ default: m.CodeEditor }))
)

export const Route = createFileRoute('/(code)/course/$course/learn/$lesson')({
  component: RouteComponent,
  loader: async ({ params, context }) => {
    return context.queryClient.ensureQueryData({
      queryKey: ["lesson", params.lesson],
      queryFn: () => getLesson(params.lesson)
    })
  }
})

function RouteComponent() {
  const lesson = Route.useLoaderData()

  return (
    <div style={{ margin: "1%" }}>
      <Suspense fallback={<div>Loading editor...</div>}>
        <LessonEditor />
      </Suspense>
    </div>
  )
}