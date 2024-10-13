import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LayoutDashboardIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
function NavDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button size={'icon'} asChild>
          <LayoutDashboardIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to={'/courses'}>Courses</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to={'/login'}>Login</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default NavDropdown
