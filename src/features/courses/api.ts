import { api } from "@/lib/api-client";
import type { CourseDetail, CourseListItem } from "./types";



export async function getCourses(): Promise<CourseListItem[]> {
    const response = await api.get("/courses/");
    return response.data
}

export async function getCourse(slug: string): Promise<CourseDetail> {
    const response = await api.get(`/courses/${slug}`)
    return response.data
}