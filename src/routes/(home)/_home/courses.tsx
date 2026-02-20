import { createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { getCourses } from '@/features/courses/api'


export const Route = createFileRoute('/(home)/_home/courses')({
  component: RouteComponent,
  loader: async ({context}) => {
    const courses = await context.queryClient.fetchQuery({
      queryKey: ["courses"],
      queryFn: getCourses
    })

    return courses
  }
})

function RouteComponent() {
  const data = Route.useLoaderData()
  return (
    <>
      <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900/50 to-zinc-950"></div>
        <div className="absolute inset-0 opacity-[0.04] grid-bg"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col gap-2  ">
          <h1 className=" text-6xl md:text-7xl lg:text-8xl font-bold p-2 mx-auto">
            <span className=" bg-linear-to-r from-white to-white/40 text-transparent bg-clip-text">
              Courses
            </span>
          </h1>
          <p className='text-muted-foreground text-xl'>Deep-dive into professional development with courses designed to transform your skills</p>
        </div>
      </section>
      <div className="grid max-w-7xl grid-cols-1 p-2 md:grid-cols-2 mx-auto container gap-4">
        {data &&
          data.map((course) => (
            <Card>
              <img
                src={course.image}
                alt="course-image"
                className="w-full h-full rounded-2xl "
              />
              <CardContent className='flex flex-col gap-2'>
                <CardTitle className='font-bold text-2xl'>{course.name}</CardTitle>
                <CardDescription className='text-xl'>{course.description}</CardDescription>
                <div className="flex w-full justify-between items-center">
                  <h1 className='flex'>
                    {course.published ? (
                      "Start Learning"
                    ) : (
                      "Coming Soon"
                    )}
                    <ArrowRight/>
                  </h1>
                  <Button>Course Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
      <section className="py-16 md:py-24 lg:py-20 px-4 bg-zinc-950 my-8 border-t">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white px-4">
            Ready to Level Up Your Engineering Skills?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Join thousands of aspiring mechanical engineers learning the skills
            that matter. It's completely free and always will be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-lg rounded-xl"
            >
              <Link to="/">
                Back to Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
