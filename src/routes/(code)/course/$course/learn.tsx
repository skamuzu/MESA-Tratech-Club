import { createFileRoute } from '@tanstack/react-router'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import Logo from '@/components/Logo'
import { Progress } from '@/components/ui/progress'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { getCourseModules } from '@/features/courses/api'
import { Search } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const Route = createFileRoute('/(code)/course/$course/learn')({
  component: RouteComponent,
  loader: async ({ params, context }) => {
    const course = await context.queryClient.fetchQuery({
      queryKey: ['course', params.course],
      queryFn: () => getCourseModules(params.course),
    })

    return course
  },
})

function RouteComponent() {
  const course = Route.useLoaderData()
  return (
    <>
      <SidebarProvider>
        <Sidebar variant="inset" className="p-0 font-mono">
          <SidebarContent>
            <SidebarHeader className="pr-8 py-4 pl-4">
              <div className="flex items-center text-start font-semibold gap-4 text-xl">
                <Logo className="h-12 w-15" />
                {course.name}
              </div>
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupContent className="p-1 flex flex-col gap-1">
                <SidebarGroupLabel className="flex items-center justify-between p-0">
                  <h1>Your Progress</h1>
                  <p className="text-white">1/162</p>
                </SidebarGroupLabel>

                <Progress value={1}></Progress>
                <p className="text-muted-foreground text-xs mt-2">
                  1% Complete
                </p>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />
            <SidebarGroup>
              <InputGroup>
                <InputGroupInput placeholder="Search lessons..." />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
              </InputGroup>
            </SidebarGroup>
            <SidebarGroup className="px-4 pb-4">
              <Accordion type="single" collapsible>
                {course.modules?.map((module) => (
                  <AccordionItem value={module.name}>
                    <AccordionTrigger>
                      <div className="flex items-center justify-start gap-4">
                        <input
                          type="radio"
                          className="w-5 h-5 accent-amber-300 border-gray-600"
                        ></input>
                        <div className='flex flex-col w-full'>
                          <h2 className='font-mono font-semibold'>{module.name}</h2>
                          <div className='flex items-center w-full gap-4'>
                          <p className='text-muted-foreground text-xs font-mono'>1/30 lessons</p>
                          <Progress value={1} className='w-10 h-1'/>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>Hi</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <main>
            <div className="flex items-center">
              <SidebarTrigger />
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
