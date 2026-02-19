import { api } from "@/lib/api-client";
import type { Course } from "./types";

export async function getCourses(): Promise<Course[]> {
    const response = await api.get("/courses/");
    return response.data;
}

export async function getCourse(slug: string): Promise<Course | undefined> {
    const response = await api.get(`/courses/${slug}`)
    return response.data
}