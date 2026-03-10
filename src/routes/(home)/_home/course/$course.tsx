import { createFileRoute } from '@tanstack/react-router'
import { getCourse } from '@/features/coursework/api'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/(home)/_home/course/$course')({
  component: RouteComponent,
  loader: async ({ params, context }) => {
    const course = await context.queryClient.fetchQuery({
      queryKey: ['courses', params.course],
      queryFn: () => getCourse(params.course),
    })
    return course
  },
})

function RouteComponent() {
  const course = Route.useLoaderData()
  return (
    <>
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`inline-block ${course.published ?  "bg-green-500/10 text-green-400 " : "bg-amber-500/10 text-amber-400 border-amber-500/20"}  px-3 py-1 rounded-full text-sm font-medium mb-6 border `}>
                {course.published ? '✓ Available' : 'Coming Soon'}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white to-white/60 text-transparent bg-clip-text">
                  {course.name}
                </span>
              </h1>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                {course.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-300 hover:scale-105 font-semibold p-6 rounded-lg transition-all inline-flex items-center text-lg justify-center gap-2">
                  <Link to="/" className="flex items-center gap-4">
                    Start Learning
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>

            <img src={course.image} className="rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="bg-white text-black text-start text-xl py-16 flex flex-col gap-10 px-2">
        {course.courseInfo?.map((info) => (
          <div key={info.question} className='container max-w-4xl mx-auto flex flex-col  justify-center gap-10'>
            <h1 className='font-bold text-4xl text-start'>{info.question}</h1>
            <p>{info.answer}</p>
            <ul className='flex flex-col gap-2'>
            {info.answerBulletPoints?.map((point) => (
              <li key={point} className='text-black list-disc list-inside'>{point}</li>
            ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  )
}
