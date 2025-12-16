import {NavLink, useLocation} from 'react-router-dom'
import {type FC} from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import {navLink} from './helpers/nav-links'
import {links, linksWithDashBoard} from './helpers/nav-links'
import {useDashboardContext} from './context/use-dashboard-context'

interface NavLinksProps {
  onClick?: () => void
}

const NavLinksHorizontal: FC<NavLinksProps> = ({onClick}) => {
  const {pathname} = useLocation()
  const {user} = useDashboardContext()
  const renderedLinks = user ? linksWithDashBoard : links

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {renderedLinks.map(({id, url, text}) => {
          const active = pathname === url
          // if (url === '/dashboard' && !user) return null

          return (
            <NavigationMenuItem key={id}>
              <NavigationMenuLink asChild className={navLink({active})}>
                <NavLink to={url} onClick={onClick}>
                  {text}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default NavLinksHorizontal
