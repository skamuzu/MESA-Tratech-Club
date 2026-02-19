import { createFileRoute } from '@tanstack/react-router'
import { useCourse } from '@/features/courses/queries'
import { queryOptions} from "@tanstack/react-query"

export const Route = createFileRoute('/(home)/_home/course/$course')({
  component: RouteComponent,
  
  }
)

function RouteComponent() {
  return <div>Hello "/(home)/_home/course/$course"!</div>
}
