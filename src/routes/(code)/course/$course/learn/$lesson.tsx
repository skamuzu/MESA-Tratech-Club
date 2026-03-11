import { createFileRoute } from '@tanstack/react-router'
import { getLesson } from '@/features/coursework/api'
import { CodeEditor } from './-components/CodeEditor'
import { LessonContentBlock } from '@/features/coursework/types'


export const Route = createFileRoute('/(code)/course/$course/learn/$lesson')({
  component: RouteComponent,
  loader: async ({ params, context }) => {
    return context.queryClient.ensureQueryData({
      queryKey: ['lesson', params.lesson],
      queryFn: () => getLesson(params.lesson),
    })
  },
})

function renderBlock(block: LessonContentBlock): React.ReactNode {
  switch (block.type) {
    case "heading": {
      const Tag = `h${block.level}` as keyof React.JSX.IntrinsicElements
      return <Tag className="text-xl font-bold">{block.text}</Tag>
    }

    case "paragraph": {
      return <p className='text-muted-foreground'>{block.text}</p>
    }

    case "list": {
      return (
        <ul className='text-muted-foreground'>
          {block.items.map((item, index) => (
            <li className='list-disc list-inside'  key={index}>{item}</li>
          ))}
        </ul>
      )
    }

    case "code": {
      return (
        <pre>
          <code className={`language-${block.language}`}>
            {block.code}
          </code>
        </pre>
      )
    }

    case "callout": {
      return (
        <div className={`callout text-muted-foreground  callout-${block.variant}`}>
          {block.text}
        </div>
      )
    }
     }
}

function RouteComponent() {
  const lesson = Route.useLoaderData()
  return (
   <div className="w-full max-h-screen flex p-4">
  <div className="flex-1 min-w-0 px-4 py-2 flex flex-col gap-4 overflow-y-auto h-[85vh]">
    <div className="flex flex-col space-y-1">
      <h2 className="text-xs text-muted-foreground">Introduction</h2>
      <h1 className="text-3xl font-bold">{lesson.content.title}</h1>
    </div>

    {lesson.content.blocks.map((block, i) => (
      <div key={i} className='leading-8'>{renderBlock(block)}</div>
    ))}
  </div>

  <div className="flex-1 min-w-0 overflow-hidden pl-2">
    <CodeEditor />
  </div>
</div>
  )
}
