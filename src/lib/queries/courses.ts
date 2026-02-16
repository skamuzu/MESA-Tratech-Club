import { useQuery } from "@tanstack/react-query"
import { getCourses } from "../api/courses"

export const useCourses = () => useQuery(
    {
        queryKey: ["courses"],
        queryFn: () => getCourses()
    }
)