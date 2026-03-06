import { api } from "@/lib/api-client";
import type { CourseDetail, CourseListItem, CourseWithModules } from "./types";

export async function getCourses(): Promise<CourseListItem[]> {
    const response = await api.get("/courses/");
    return response.data
}

export async function getCourse(course: string): Promise<CourseDetail> {
    const response = await api.get(`/courses/${course}/`)
    return response.data
}

export async function getCourseModules(course:string): Promise<CourseWithModules>{
    const response = await api.get(`/courses/${course}/modules/`)
    return response.data
}

export async function getLesson(lesson: string) {
    const response = await api.get(`/lessons/${lesson}`)
    return response.data
}