
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

export type Lesson = {
  name: string
  slug: string
  content: LessonContent 
}

export type LessonContent = {
  title: string
  blocks: LessonContentBlock[]
}

type HeadingBlock = {
  type: "heading"
  text: string
  level: number
}

type ParagraphBlock = {
  type: "paragraph"
  text: string
}

type ListBlock = {
  type: "list"
  items: string[]
}

type CodeBlock = {
  type: "code"
  code: string
  language: "python"
}

type CalloutBlock = {
  type: "callout"
  text: string
  variant: "info"
}

export type LessonContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | CodeBlock
  | CalloutBlock

export type CourseInfo = {
    question: string
    answer: string
    answerBulletPoints?: string[]
}

export type Module = {
  name: string
  lessons: Lesson[]
  totalLessonsInModule: number
}



export type CourseWithModules = {
  id: string
  name: string
  slug: string
  modules: Module[],
  totalLessonsInCourse: number
}

export type CourseListItem = Omit<Course, "courseInfo">

export type CourseDetail = Course

