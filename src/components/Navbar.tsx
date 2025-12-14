import {NavLink} from 'react-router-dom'
import {TextAlignEnd} from 'lucide-react'
import {type FC, useState, useEffect} from 'react'
import NavLinksHorizontal from './NavLinksHorizontal'
import NavLinksVertical from './NavLinksVertical'
import {Button} from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import {ThemeToggle} from './ThemeToggle'

const Navbar: FC = () => {
  const [open, setOpen] = useState(false)

  // close sheet when switching to desktop size
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <nav className='border-b bg-background'>
      <div className='max-w-7xl mx-auto flex items-center justify-between h-16 px-4'>
        {/* LEFT - Logo ----------------------------------------------- */}
        <div className='flex items-center gap-3'>
          <NavLink to='/' className='hidden lg:flex'>
            <Button className='text-2xl px-4 py-6 rounded-2xl'>E</Button>
          </NavLink>

          {/* Mobile Drawer -- Bars icon and vertical menu ------------ */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant='ghost' className='lg:hidden p-2'>
                <TextAlignEnd className='h-6! w-6!' />
              </Button>
            </SheetTrigger>

            <SheetContent side='left' className='w-52 h-80 rounded-xl'>
              <SheetHeader>
                <SheetTitle className='text-2xl mt-4 text-center'>
                  Menu
                </SheetTitle>
              </SheetHeader>

              <ul className='mt-2 space-y-3'>
                <NavLinksVertical onClick={() => setOpen(false)} />
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        {/* CENTER --- Navlinks for large screen ---------------------- */}
        <ul className='hidden lg:flex items-center gap-6'>
          <NavLinksHorizontal />
        </ul>

        {/* RIGHT ---- Theme toggle------------------------------------ */}
        <div className='flex items-center gap-4'>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
