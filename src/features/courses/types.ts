
export type Course = {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    image: string
    published: boolean
    slug: string,
    courseInfo?: CourseInfo[]
}

export type CourseInfo = {
    question: string
    answer: string
    answerBulletPoints?: string[]
}

export type Module = {
  name: string
}

export type CourseWithModules = {
  id: string
  name: string
  slug: string
  modules: Module[]
}

export type CourseListItem = Omit<Course, "courseInfo">

export type CourseDetail = Course

