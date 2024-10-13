import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import courses from '@/lib/course.json'
import LessonItem from '../global/LessonItem'
import { Link } from 'react-router-dom'

function ViewCard() {
  const { sections } = courses
  return (
    <>
      {sections.map((section) => {
        const { lessons } = section
        return (
          <Card key={section.title} className="mb-4">
            <CardHeader>
              <CardTitle className="hover:underline">
                <Link to={'section'}>{section.title}</Link>
              </CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {lessons.map((lesson) => (
                <LessonItem key={lesson.title} title={lesson.title} />
              ))}
            </CardContent>
          </Card>
        )
      })}
    </>
  )
}
export default ViewCard
