import { CodeIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import NavDropdown from './NavDropdown'
import FadeIn from '@/utils/FadeIn'

function Navbar() {
  return (
    <div className="border h-16 flex items-center ">
      <div className="nav-center flex justify-between w-full max-w-[80vw] mx-auto">
        {/* logo */}
        <FadeIn>
          <Button size={'icon'} asChild>
            <Link to={'/'}>
              <CodeIcon />
            </Link>
          </Button>
        </FadeIn>
        {/* navigation buttons */}
        {/* NavDropDown */}
        <div className="flex gap-x-1 items-center">
          <FadeIn>
            <NavDropdown />
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
export default Navbar
