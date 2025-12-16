import {type FC} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {navLink, links, linksWithDashBoard} from './helpers/nav-links'
import {useDashboardContext} from './context/use-dashboard-context'

interface NavLinksProps {
  onClick?: () => void
}

const NavLinksVertical: FC<NavLinksProps> = ({onClick}) => {
  const {pathname} = useLocation()
  const {user} = useDashboardContext() ?? {}
  const renderedLinks = user ? linksWithDashBoard : links

  return (
    <ul className='flex flex-col gap-2 mt-2'>
      {renderedLinks.map(({id, url, text}) => {
        const active = pathname === url

        return (
          <li key={id}>
            <NavLink to={url} onClick={onClick} className={navLink({active})}>
              {text}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinksVertical
