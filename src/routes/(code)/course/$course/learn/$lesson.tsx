import { createFileRoute } from '@tanstack/react-router'
import { getLesson } from '@/features/coursework/api'
import { CodeEditor } from './-components/CodeEditor'
import { LessonContentBlock } from '@/features/coursework/types'
import React from 'react'

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
      return <Tag>{block.text}</Tag>
    }

    case "paragraph":
      return <p>{block.text}</p>

    case "list":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )

    case "code":
      return (
        <pre>
          <code>{block.code}</code>
        </pre>
      )

    case "callout":
      return <div className={`callout callout-${block.variant}`}>{block.text}</div>

    default:
      return null
  }
}

function RouteComponent() {
  const lesson = Route.useLoaderData()
  return (
   <div className="w-full max-h-screen flex p-4">
  <div className="flex-1 min-w-0 px-4 py-2 flex flex-col gap-4 overflow-y-auto">
    <div className="flex flex-col space-y-1">
      <h2 className="text-xs text-muted-foreground">Introduction</h2>
      <h1 className="text-3xl font-bold">{lesson.content.title}</h1>
    </div>

    {lesson.content.blocks.map((block, i) => (
      <div key={i}>{renderBlock(block)}</div>
    ))}
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, repellat? Repellat provident iure ea repudiandae temporibus, corporis iste harum ab distinctio ipsam soluta, molestias molestiae enim itaque eos ut rem.
  </div>

  <div className="flex-1 min-w-0 overflow-hidden">
    <CodeEditor />
  </div>
</div>
  )
}
