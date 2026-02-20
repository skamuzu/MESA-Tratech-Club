export type CourseInfo = {
  question: string
  answer: string
  answer_bullet_points?: string[]
}

export type Course = {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    image: string
    published: boolean
    slug: string,
    courseInfo: CourseInfo[]
}

export type CourseListItem = Omit<Course, "courseInfo">

export type CourseDetail = Course