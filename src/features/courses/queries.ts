import { useQuery } from "@tanstack/react-query"
import { getCourses, getCourse } from "@/features/courses/api"

export const useCourses = () => useQuery(
    {
        queryKey: ["courses"],
        queryFn: () => getCourses()
    }
)

export const useCourse = (slug: string) => useQuery(
    {
        queryKey: ["courses", slug],
        queryFn: () => getCourse(slug),
        enabled: !!slug

    }
)