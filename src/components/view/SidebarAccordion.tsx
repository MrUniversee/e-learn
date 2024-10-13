import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import courses from '@/lib/course.json'
import LessonItem from '../global/LessonItem'

function SidebarAccordion() {
  return (
    <Accordion type="multiple" className="flex flex-col gap-y-2">
      {courses.sections.map((section, index) => {
        return (
          <AccordionItem
            value={index.toString()}
            key={index}
            className="border-none"
          >
            <AccordionTrigger className=" text-[15px] hover:no-underline hover:bg-gray-100 rounded px-1 flex justify-start gap-x-2 items-center  py-2 max-w-fit">
              {section.title}
            </AccordionTrigger>
            {section.lessons.map((lesson, i) => (
              <AccordionContent key={i}>
                <LessonItem title={lesson.title} />
              </AccordionContent>
            ))}
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
export default SidebarAccordion
