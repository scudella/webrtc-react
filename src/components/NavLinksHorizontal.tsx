import {NavLink, useLocation} from 'react-router-dom'
import {type FC} from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import {navLink} from './helpers/nav-links'
import {links} from './helpers/nav-links'

interface NavLinksProps {
  onClick?: () => void
}

const NavLinksHorizontal: FC<NavLinksProps> = ({onClick}) => {
  // const user = useSelector((state) => state.userState.user)
  const {pathname} = useLocation()
  const user = true

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map(({id, url, text}) => {
          const active = pathname === url
          if (url === '/dashboard' && !user) return null

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
