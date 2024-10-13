import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import View from './pages/View/View'
import CourseView from './pages/View/CourseView'
import SectionView from './pages/View/SectionView'
import LessonView from './pages/View/LessonView'
import Login from './pages/Login'
import Cart from './pages/Cart'
import HomeLayout from './pages/layout/HomeLayout'
import Landing from './pages/Landing'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: 'checkout/cart',
          element: <Cart />,
        },
        { path: '/login', element: <Login /> },
      ],
    },
    {
      path: '/view/course',
      element: <View />,
      children: [
        { index: true, element: <CourseView /> },
        { path: 'section', element: <SectionView /> },
        { path: 'section/lesson', element: <LessonView /> },
      ],
    },
  ])
  return <RouterProvider router={router} />
}
export default App
