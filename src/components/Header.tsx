import {Link} from 'react-router-dom'
import LogoutContainer from './LogoutContainer'
import {useDashboardContext} from './context/use-dashboard-context'

function Header() {
  const {user} = useDashboardContext()

  return (
    <header className='bg-muted text-muted-foreground border-b py-2'>
      <div className='align-element flex justify-center sm:justify-end'>
        {user ? (
          <LogoutContainer />
        ) : (
          <div className='flex gap-x-6 justify-center items-center'>
            <Link
              to='/login'
              className='hover:text-foreground transition-colors'
            >
              Sign in
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
export default Header
