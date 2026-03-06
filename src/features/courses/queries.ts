import { useQuery } from '@tanstack/react-query'
import { getLesson } from './api'

export const useLesson = ({ lesson }: { lesson: string }) =>
  useQuery({
    queryKey: ['lessons', lesson],
    queryFn: () => getLesson(lesson),
  })
