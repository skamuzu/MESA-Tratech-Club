import { api } from "../api-client";
import { Course } from "@/types/courses";

export async function getCourses(): Promise<Course[]> {
    const response = await api.get("/courses");
    return response.data;
}

