import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { getCourseModules } from '@/features/coursework/api'
import CourseSidebar from './-components/CourseSidebar'
import CourseBreadcrumb from './-components/CourseBreadcrumb'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import UserAvatar from '@/features/auth/components/userAvatar'
import { useUser } from '@/features/auth/queries'
import { Link } from '@tanstack/react-router'

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
  const user = useUser()

  return (
    <>
      <SidebarProvider>
        <CourseSidebar course={course}/>
        <SidebarInset>
          <main>
            <div className="w-full flex items-center gap-4 justify-between">
              <div className='flex items-center gap-2'>
              <SidebarTrigger className='p-0' />
              <div className='flex items-center justify-between space-x-4 px-2'>
                <ChevronLeft className='w-4.5 h-4.5 text-muted-foreground'/>
                <ChevronRight className='w-4.5 h-4.5 text-accent-foreground'/>
              </div>
              <CourseBreadcrumb course={course}/>
            </div>
            <div className='px-4'>
              {user ? <UserAvatar/> : <Link to="/sign-in">
          <Button variant={'link'} className="text-lg text-muted-foreground cursor-pointer">
            Log In
          </Button>
        </Link>}
              
            </div>
              </div>
              <Outlet/>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
