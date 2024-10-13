import Navbar from '@/components/Home/Navbar'
import ViewBreadcrumb from '@/components/view/ViewBreadcrumb'
import ViewSidebar from '@/components/view/ViewSidebar'
import { Outlet } from 'react-router'

function View() {
  return (
    <>
      <Navbar />
      <div className="layout grid grid-cols-1 md:grid-cols-12">
        {/* Sidebar */}
        <div className="p-8 hidden md:grid md:col-span-4 min-h-full  ">
          <ViewSidebar />
        </div>
        {/* Main/Outlet */}

        <div className="col-span-12 md:col-span-8  p-8">
          <ViewBreadcrumb />
          <Outlet />
        </div>
      </div>
    </>
  )
}
export default View
