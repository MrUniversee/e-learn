import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useLocation, useNavigate } from 'react-router'

function ViewBreadcrumb() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const routes = pathname.split('/').filter((path) => path !== '')

  function handleCrumbNavigation({ route }: { route: string }): void {
    if (route === 'section') {
      return navigate(`section`)
    }
    if (route === 'view') {
      return navigate('/products', { replace: true })
    }
    navigate('', { relative: 'route' })
  }

  const lastItem = routes.length - 1
  return (
    <Breadcrumb>
      <BreadcrumbList className="sm:gap-1">
        {routes.map((route, idx) => (
          <div className="flex items-center" key={route}>
            <BreadcrumbItem
              onClick={() => handleCrumbNavigation({ route: `${route}` })}
            >
              {idx !== lastItem ? (
                <BreadcrumbLink>{route}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{route}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {idx !== lastItem && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default ViewBreadcrumb
