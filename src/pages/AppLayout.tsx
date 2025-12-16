import {Outlet} from 'react-router-dom'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import DashboardProvider from '@/components/context/DashboardProvider'

const AppLayout = () => {
  return (
    <DashboardProvider>
      <div className='flex min-h-screen flex-col'>
        <Header />
        <Navbar />
        <Outlet />
      </div>
    </DashboardProvider>
  )
}

export default AppLayout
