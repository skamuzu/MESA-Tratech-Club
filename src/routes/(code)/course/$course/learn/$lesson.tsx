import { createFileRoute } from '@tanstack/react-router'
import { getLesson } from '@/features/courses/api'
import { CodeEditor } from './-components/CodeEditor'

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

  return (
    <div className='w-full flex items-center p-4'>
      <div className='flex-1'>
Hello
      </div>
        <CodeEditor/>
    </div>
  )
}