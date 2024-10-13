import ViewCard from '@/components/view/ViewCard'
import course from '@/lib/course.json'
function CourseView() {
  return (
    <>
      {/* Course Heading */}
      <header>
        <h1 className="text-xl mb-2 font-bold sm:text-2xl sm:mb-4">
          {course.title}
        </h1>
        <p className="max-w-xs sm:max-w-xl md:max-w-3xl text-gray-500">
          {course.description}
        </p>
      </header>
      {/* Course Content */}
      <div className="mt-4">
        <ViewCard />
      </div>
    </>
  )
}
export default CourseView
