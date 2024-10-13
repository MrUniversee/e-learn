import Container from '@/components/global/Container'
import Navbar from '@/components/Home/Navbar'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
        {/* <div className="flex flex-col">
          <Link to={'/view/course'} className="text-blue-400">
            Navigate to view
          </Link>
          <Link to={'checkout/cart'} className="text-blue-400">
            Navigate to cart page
          </Link>
        </div> */}
      </Container>
    </>
  )
}
export default HomeLayout
