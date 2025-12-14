import {Outlet} from 'react-router-dom'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

function HomeLayout() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <Navbar />
      <main className='flex-1 bg-muted/50'>
        <section className='align-element py-20 bg-muted/50"'>
          <Outlet />
        </section>
      </main>
    </div>
  )
}
export default HomeLayout
