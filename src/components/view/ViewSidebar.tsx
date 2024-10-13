import { Separator } from '../ui/separator'
import SidebarAccordion from './SidebarAccordion'

function ViewSidebar() {
  return (
    <aside>
      {/*Course Display*/}
      <header className="flex items-center gap-x-2 mb-1">
        <div className="w-12 h-12 bg-primary rounded-full"></div>
        <div>
          <p className="font-medium">Course Title</p>
          <span className="text-sm text-neutral-400 hover:underline cursor-pointer ">
            buy now
          </span>
        </div>
      </header>
      <Separator />
      {/* Course Sections & Lessons */}
      <div className="mt-6">
        <SidebarAccordion />
      </div>
    </aside>
  )
}
export default ViewSidebar
