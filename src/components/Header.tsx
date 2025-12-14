import {Link} from 'react-router-dom'
function Header() {
  return (
    <header className='bg-muted text-muted-foreground border-b py-2'>
      <div className='align-element flex justify-center sm:justify-end'>
        {/* USER */}
        {/* LINKS */}
        <div className='flex gap-x-6 justify-center items-center'>
          <Link to='/login' className='hover:text-foreground transition-colors'>
            Sign in
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header
