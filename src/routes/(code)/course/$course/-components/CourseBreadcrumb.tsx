import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from '@/components/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { ChevronDownIcon } from 'lucide-react'
import { shorten } from '@/lib/utils'
import { CourseWithModules } from '@/features/courses/types'

export default function CourseBreadcrumb({
  course,
}: {
  course: CourseWithModules
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList className='text-xs'>
        <BreadcrumbItem>
          <BreadcrumbLink>{course.name}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1">
                {course.modules[0].name}
                <ChevronDownIcon className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className=" p-0 h-80">
              <DropdownMenuGroup className="h-3/5">
                {course.modules.map((module, index) => (
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className='p-2 rounded-none'>
                      <span className="text-muted-foreground">{index + 1}.</span>{shorten(module.name, 30)}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>

                    <DropdownMenuSubContent>
                        <DropdownMenuGroup>
                            {module.lessons.map((lesson, index) => 
                            <DropdownMenuItem>
                                <span className='text-muted-foreground text-xs'>{index+1}.</span>{shorten(lesson.name, 30)}
                            </DropdownMenuItem>)}
                        </DropdownMenuGroup>
                    </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator/>
        <BreadcrumbItem>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-white">
                {course.modules[0].lessons[0].name}
                <ChevronDownIcon className="w-3.5 h-3.5" />
              </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                    {course.modules[0].lessons.map((lesson, index) => <DropdownMenuItem>
                        {index + 1}. {lesson.name}
                    </DropdownMenuItem>)}
                </DropdownMenuGroup>
              </DropdownMenuContent>
        </DropdownMenu>

        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
