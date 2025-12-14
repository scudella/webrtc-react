import {type FC} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {navLink, links} from './helpers/nav-links'

interface NavLinksProps {
  onClick?: () => void
}

const NavLinksVertical: FC<NavLinksProps> = ({onClick}) => {
  const {pathname} = useLocation()
  const user = true

  return (
    <ul className='flex flex-col gap-2 mt-2'>
      {links.map(({id, url, text}) => {
        const active = pathname === url
        if (url === '/dashboard' && !user) return null

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
