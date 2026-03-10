import { Sidebar, SidebarContent, SidebarHeader, SidebarSeparator, SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@/components/ui/sidebar";
import { Progress } from "@/components/ui/progress";
import Logo from "@/components/Logo";
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "@/components/ui/accordion";
import { InputGroup, InputGroupAddon,InputGroupInput } from "@/components/ui/input-group";
import { Code2 } from "lucide-react";
import type { CourseWithModules } from "@/features/coursework/types";
import { Search } from "lucide-react";

export default function CourseSidebar({course}: {course: CourseWithModules} ) {
    return (

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
                  <p className="text-white">1/{course.totalLessonsInCourse}</p>
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
                          <p className='text-muted-foreground text-xs font-mono'>1/{module.totalLessonsInModule} lessons</p>
                          <Progress value={1} className='w-10 h-1'/>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='flex flex-col gap-2'>
                    {module.lessons.map((lesson) => 
                    <div className='flex items-center justify-between text-xs font-sans text-muted-foreground font-semibold p-2'>
                      <div className='flex items-center gap-2'>
                      <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50"></div>
                      <h3>
                         {lesson.name}
                      </h3>
                      </div>
                     <Code2 className='w-4 h-4'/>
                    </div>)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
    )
}