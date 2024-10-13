import { Lock, Video } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function LessonItem({ title }: { title: string }) {
  const [isEnrolled, setEnrolled] = useState(false)
  const icon = isEnrolled ? (
    <Video className="w-4 h-4" />
  ) : (
    <Lock className="w-4 h-4" />
  )
  return (
    <div className="flex p-0 py-3 items-center text-sm gap-x-1 hover:bg-gray-100 rounded">
      {icon}
      <Link to={'section/lesson'}>{title}</Link>
    </div>
  )
}
export default LessonItem
